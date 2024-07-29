import React, { userState, useState } from "react";

const MessageInput = ({sendMessage}) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        sendMEssage(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Send</button>

        </form>
    )
}
export default MessageInput;

