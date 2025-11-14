import express from 'express';
import dotenv from 'dotenv';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const API_PORT = process.env.API_PORT || 5000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const NODE_ENV = process.env.NODE_ENV || 'development';

if (!GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY is not set in .env file');
  process.exit(1);
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const systemPrompt = `You are a financial advisor and GST (Goods and Services Tax) expert assistant for the GSTmate platform.
Your expertise includes:
- GST compliance and regulations in India
- Tax calculations and filing procedures
- Financial planning and business advice
- Answer user questions concisely and accurately
- If a question is outside your domain, politely redirect to relevant topics`;

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: systemPrompt,
            },
            {
              text: message,
            },
          ],
        },
      ],
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error:', errorData);
      return res.status(response.status).json({
        error: 'Failed to get response from AI model',
        details: errorData,
      });
    }

    const data = await response.json();
    const botResponse =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Sorry, I could not process your request.';

    res.json({ response: botResponse });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(API_PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║  GSTmate Server Running Successfully  ║
╚════════════════════════════════════════╝

API Server:   http://localhost:${API_PORT}
Environment: ${NODE_ENV}
Gemini API:  Connected ✓

Endpoints:
  - POST /api/chat       → AI Chat Endpoint
  - GET  /api/health     → Health Check
  - GET  /*              → Frontend Routes
  `);
});
