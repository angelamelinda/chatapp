import React, { FC, MouseEvent, ChangeEvent } from "react";

interface IChatBox {
  handleSendMessage: (e: MouseEvent<HTMLButtonElement>) => void;
  handleChangeMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  message: string;
}

const ChatBox: FC<IChatBox> = ({
  handleSendMessage,
  handleChangeMessage,
  message
}) => {
  return (
    <div className="chat-box">
      <div className="chat-box__textarea">
        <textarea
          value={message}
          onChange={handleChangeMessage}
          placeholder={"Type a message..."}></textarea>
      </div>
      <button
        className="button chat-box__button-send"
        onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatBox;
