import Loader from '../../components/Loader';

interface ChatMessageProps {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isLoading?: boolean;
}

export default function ChatMessage({
  id,
  text,
  sender,
  timestamp,
  isLoading,
}: ChatMessageProps) {
  const isUser = sender === 'user';

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} fade-in`}>
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg ${
          isUser
            ? 'bg-[#1C3D8D] text-white rounded-lg rounded-br-none'
            : 'bg-gray-100 text-gray-900 rounded-lg rounded-bl-none'
        } px-4 py-3 shadow-sm`}
      >
        <div className="break-words text-sm md:text-base">
          {isLoading ? <Loader /> : text}
        </div>
        <div
          className={`text-xs mt-2 ${
            isUser ? 'text-gray-200' : 'text-gray-500'
          }`}
        >
          {formatTime(timestamp)}
        </div>
      </div>
    </div>
  );
}
