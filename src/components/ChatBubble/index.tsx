import React, { FC } from "react";

interface IChatBubble {
  message: string;
  name: string;
  cName: string;
}

const ChatBubble: FC<IChatBubble> = ({ message, name, cName }) => {
  return (
    <div className={`chat-bubble ${cName}`}>
      <div className="chat-bubble__name">{name}</div>
      <div className="chat-bubble__message">{message}</div>
    </div>
  );
};

export default ChatBubble;
