import React, { PureComponent } from "react";
import Modal from "../../components/Modal";
import ChatBox from "../../components/ChatBox";
import GuessForm from "../../components/GuestForm";
import ChatPanel from "../../components/ChatPanel";

interface IChatRoom {
  isModalOpen: boolean;
}

class ChatRoom extends PureComponent<IChatRoom> {
  render() {
    const { isModalOpen } = this.props;
    return (
      <div className="container">
        <ChatPanel
          messages={[{ user: "ganteng", text: "heheh", id: "1212" }]}
        />
        <ChatBox />
        {isModalOpen && <Modal title={"ChatBox"}>{<GuessForm />}</Modal>}
      </div>
    );
  }
}

export default ChatRoom;
