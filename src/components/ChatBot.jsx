// components/ChatBot.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaComments } from "react-icons/fa";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([
    {
      sender: "bot",
      type: "text",
      text: "Hi there! 👋 How can I help you today?",
    },
    {
      sender: "bot",
      type: "options",
      options: ["Looking for Internship", "Looking for Solution"],
    },
  ]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef();
  const wrapperRef = useRef(null);

  const sendMessage = async (customText) => {
    const messageText = customText || input.trim();
    if (!messageText) return;

    const userMessage = { sender: "user", type: "text", text: messageText };
    setChat((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    if (messageText.toLowerCase().includes("internship")) {
      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          type: "text",
          text: (
            <span>
              You can apply here 👉{" "}
              <a
                href="https://forms.gle/9YQgxcs5TZLMCM5y7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Internship Form
              </a>
            </span>
          ),
        },
      ]);
      setLoading(false);
      return;
    }

    if (messageText.toLowerCase().includes("solution")) {
      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          type: "text",
          text: (
            <span>
              Explore solutions 👉{" "}
              <a href="#Data" className="text-blue-600 underline">
                Explore Solutions
              </a>
            </span>
          ),
        },
      ]);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
text: `You are a smart and friendly virtual assistant for BridgeAi, a company that provides AI-driven solutions, data analytics, and internship opportunities. A user just asked: "${messageText}". Respond clearly, professionally, and in a conversational tone. Be helpful and concise. If applicable, include relevant links, examples, or suggestions. Your goal is to guide the user and make their experience seamless and informative.`,

                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const botText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "🤔 Hmm, I couldn't understand that. Could you please rephrase?";

      setChat((prev) => [...prev, { sender: "bot", type: "text", text: botText }]);
    } catch (error) {
      console.error("Gemini error:", error);
      setChat((prev) => [
        ...prev,
        { sender: "bot", type: "text", text: "Oops! Something went wrong. 😢" },
      ]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaComments size={22} />
      </button>

      {isOpen && (
        <div
          ref={wrapperRef}
          className="w-80 sm:w-96 h-[460px] mt-3 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-300"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 font-semibold text-lg">
            BridgeAi Chatbot
          </div>

          <div
            className="flex-1 overflow-y-auto p-3 space-y-3 text-sm"
            ref={chatRef}
          >
            {chat.map((msg, idx) => (
              <div
                key={idx}
                className={`rounded-lg px-4 py-2 max-w-max break-words whitespace-pre-line ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-100 text-right"
                    : "mr-auto bg-gray-100 text-left"
                }`}
              >
                {msg.type === "options" ? (
                  <div className="flex flex-col gap-2">
                    {msg.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => sendMessage(option)}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md text-sm text-left"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-xs italic">Typing...</div>
            )}
          </div>

          <div className="p-3 border-t flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Type your message..."
            />
            <button
              onClick={() => sendMessage()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
