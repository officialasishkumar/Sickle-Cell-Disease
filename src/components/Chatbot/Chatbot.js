import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = async () => {
        if (input.trim() === '') return;
    
        const userMessage = { text: input, sender: 'user', timestamp: new Date().toLocaleTimeString() };
        setMessages([...messages, userMessage]);
    
        console.log('Sending message to server:', input);
    
        try {
            const response = await fetch('https://sickle-cell-disease.onrender.com/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch response');
            }
            const data = await response.json();
            if (data.reply.toLowerCase().includes("sickle cell disease")) {
                data.reply = "Sickle cell disease (SCD) is an inherited blood disorder that causes red blood cells to become rigid and sickle-shaped."
            }
            if(data.reply.toLowerCase().includes("remedies")) {
                data.reply = "There is no cure for SCD, but treatments can help manage symptoms and complications."
            }
            if(data.reply.toLowerCase().includes("symptoms")) {
                data.reply = "Symptoms of SCD can include pain, anemia, fatigue, and infections."
            }
            if(data.reply.toLowerCase().includes("prevention")) {
                data.reply = "The best way to prevent SCD is through genetic counseling and testing."
            }
            if(data.reply.toLowerCase().includes("treatment")) {
                data.reply = "Treatments for SCD can include medications, blood transfusions, and bone marrow transplants."
            }
            if(data.reply.toLowerCase().includes("diagnosis")) {
                data.reply = "SCD is usually diagnosed through newborn screening or genetic testing."
            }
            if(data.reply.toLowerCase().includes("risk factors")) {
                data.reply = "The main risk factor for SCD is having a family history of the disease."
            }
            if(data.reply.toLowerCase().includes("complications")) {
                data.reply = "Complications of SCD can include stroke, organ damage, and infections."
            }
            if(data.reply.toLowerCase().includes("support")) {
                data.reply = "Support groups and counseling can help people with SCD and their families cope with the disease."
            }
            if(data.reply.toLowerCase().includes("prognosis")) {
                data.reply = "The prognosis for SCD varies depending on the type and severity of the disease."
            }
            const botMessage = { text: data.reply, sender: 'bot', timestamp: new Date().toLocaleTimeString() };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
            setMessages(prevMessages => [...prevMessages, { text: 'Error connecting to server.', sender: 'bot' }]);
            console.error('Error during fetch:', error);
        }
    
        setInput('');
    };
    
    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="chatbot-container">
            <div className="chatbot-icon" onClick={toggleChatbot}>
                {isOpen ? 'x' : '💬'}
            </div>
            {isOpen && (
                <div className="chatbot">
                    <div className="chat-window">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender}>
                                <p>{msg.text}</p>
                                <small>{msg.timestamp}</small>
                            </div>
                        ))}
                    </div>
                    <div>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your message..."
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
