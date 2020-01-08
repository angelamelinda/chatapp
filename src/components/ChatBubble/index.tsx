import React, { FC } from "react";

interface IChatBubble {
  message: string;
  name: string;
}

const ChatBubble: FC<IChatBubble> = ({ message, name }) => {
  return (
    <div className="chat-bubble">
      <div className="chat-bubble__name">{name}:</div>
      <div className="chat-bubble__message">{message}</div>
    </div>
  );
};

export default ChatBubble;
