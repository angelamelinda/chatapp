import React, { FC } from "react";
import { IMessage } from "../../interfaces";
import ChatBubble from "../ChatBubble";

interface IChatPanel {
  messages: IMessage[] | null;
  username: string;
}

const ChatPanel: FC<IChatPanel> = ({ messages , username}) => {
  return (
    <div className="chat-panel">
      {messages &&
        messages.map((message, index) => (
          <ChatBubble key={index} message={message.text} name={message.user} cName={message.user === username ? 'chat-bubble--right': 'chat-bubble--left'}/>
        ))}
    </div>
  );
};

export default ChatPanel;
