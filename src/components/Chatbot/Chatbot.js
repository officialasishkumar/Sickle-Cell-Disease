import React, { useState } from 'react';
import './Chatbot.css';

// simple regexes for greeting vs. sickle‐cell related
const GREETING_RE = /^(hi|hello|hey|good (morning|afternoon|evening))\b/i;
const SICKLE_RE = /\b(sickle|anemia|hemoglobin|blood disorder|vaso-occlusive|transfusion|hydroxyurea)\b/i;

const DEEPSEEK_ENDPOINT = 'https://api.deepseek.com/v1/query';
const DEEPSEEK_API_KEY = 'you-really-thought-you-will-find-an-api-key?';

export default function Chatbot() {
    const [messages, setMessages] = useState([
        { from: 'bot', text: '👋 Hi there! I’m here to help with Sickle Cell Disease questions.' }
    ]);
    const [input, setInput] = useState('');

    const addMessage = (from, text) => {
        setMessages(msgs => [...msgs, { from, text }]);
    };

    const handleSend = async () => {
        const text = input.trim();
        if (!text) return;
        addMessage('user', text);
        setInput('');

        // 1. Greeting?
        if (GREETING_RE.test(text)) {
            addMessage('bot', 'Hello! How can I assist you with Sickle Cell Disease today?');
            return;
        }

        // 2. Not about SCD?
        if (!SICKLE_RE.test(text)) {
            addMessage('bot',
                "I’m only designed to answer questions about Sickle Cell Disease. Could you please ask something related to that?");
            return;
        }

        // 3. Proxy to Deepseek
        addMessage('bot', 'Let me look that up for you…');

        try {
            const res = await fetch(DEEPSEEK_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
                },
                body: JSON.stringify({ query: text })
            });
            if (!res.ok) throw new Error(`status ${res.status}`);
            const { answer } = await res.json();
            addMessage('bot', answer);
        } catch (err) {
            console.error(err);
            addMessage('bot', 'Sorry, something went wrong fetching that information. Please try again later.');
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chat-window">
                {messages.map((m, i) => (
                    <div key={i} className={`chat-message ${m.from}`}>
                        {m.from === 'bot' ? '🤖 ' : '👤 '}
                        {m.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="Type your question…"
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}
