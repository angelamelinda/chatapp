import React, { PureComponent } from "react";

interface IChatBox {}

class ChatBox extends PureComponent<IChatBox> {
  private textarea: any;

  render() {
    return (
      <div className="chat-box">
        <div className="chat-box__textarea">
          <textarea
            ref={node => (this.textarea = node)}
            placeholder={"Type a message..."}></textarea>
        </div>
        <button className="button chat-box__button-send">Send</button>
      </div>
    );
  }
}
export default ChatBox;
