import { Send } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled,
}: ChatInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="flex gap-3 p-4 bg-white border-t border-gray-200">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ask about GST, taxes, or finance..."
        disabled={disabled}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1C3D8D] focus:ring-1 focus:ring-[#1C3D8D] disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
      />
      <button
        onClick={onSend}
        disabled={disabled || value.trim() === ''}
        className="px-4 py-2 bg-[#1C3D8D] text-white rounded-lg hover:bg-[#2a5ac5] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
}
