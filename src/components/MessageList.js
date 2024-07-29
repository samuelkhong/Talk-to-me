import React from "react";

// display component. Sees all list of history no need for state

const MessageList = ({messages}) => {
    const reversedMessages = [...messages].reverse();

    return (
        <div>
            <h2>Messages</h2>
            <ul>
                {reversedMessages.map((messages, index) => (
                    <li key = {index}>
                        <span className="timestamp">
                            {new Date(message.timestamp).toLocaleDateString()}
                        </span>
                        <span>
                            {message.user ? message.user.username : 'Anonymous'}
                        </span>
                        <span>
                            {message.content}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MessageList;