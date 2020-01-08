import React, { FC } from "react";
import { IMessage } from "../../interfaces";
import ChatBubble from "../ChatBubble";

interface IChatPanel {
  messages: IMessage[] | null;
}

const ChatPanel: FC<IChatPanel> = ({ messages }) => {
  return (
    <div className="chat-panel">
      {messages &&
        messages.map(message => (
          <ChatBubble
            key={message.id}
            message={message.text}
            name={message.user}
          />
        ))}
    </div>
  );
};

export default ChatPanel;
