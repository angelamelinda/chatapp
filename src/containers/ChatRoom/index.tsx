import React, { PureComponent, ChangeEvent, MouseEvent } from "react";
import axios from "axios";
import Modal from "../../components/Modal";
import ChatBox from "../../components/ChatBox";
import GuestForm from "../../components/GuestForm";
import ChatPanel from "../../components/ChatPanel";
import { database, reqHeader } from "../../Firebase";
import { IMessage } from "../../interfaces";

interface IChatRoomState {
  isModalOpen: boolean;
  username: string;
  users: any[];
  messages: any[];
  message: string;
}

interface IChatRoomProps {}

class ChatRoom extends PureComponent<IChatRoomProps, IChatRoomState> {
  private usernameStorage = localStorage.getItem("chat_username");

  constructor(props: IChatRoomProps) {
    super(props);
    this.state = {
      isModalOpen: this.usernameStorage ? false : true,
      username: this.usernameStorage ? this.usernameStorage : "",
      users: [],
      messages: [],
      message: ""
    };
  }

  componentDidMount() {
    const userRef = database
      .ref("users")
      .orderByKey()
      .limitToLast(100);

    const messagesRef = database
      .ref("messages")
      .orderByKey()
      .limitToLast(100);

    userRef.once("value", snapshot => {
      const users = [snapshot.val()];
      this.setState({ users });
    });

    messagesRef.on("value", snapshot => {
      const messagesObj = snapshot.val();
      if (messagesObj) {
        const messages: IMessage[] = Object.keys(messagesObj).map(
          key => messagesObj[key]
        );
        const extractMessages = messages.map((message: IMessage) => ({
          text: message.text,
          user: message.user,
          id: message.key
        }));
        this.setState({
          messages: extractMessages
        });
      } else {
        this.setState({
          messages: []
        });
      }
    });
  }

  handleChangeInputUsername = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: e.target.value
    });
  };

  handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      message: e.target.value
    });
  };

  handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { username } = this.state;
    database.ref("users").push({ username: username });
    localStorage.setItem("chat_username", username);

    this.setState({
      isModalOpen: false
    });
  };

  handleSendMessage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { message, username } = this.state;
    database.ref("messages").push({ text: message, user: username });
    let cat = localStorage.getItem("fcmtoken");

    axios
      .post(
        "https://fcm.googleapis.com/fcm/send",
        {
          to: "/topics/messages",
          data: {
            title: username,
            body: message,
            sendertoken: cat
          }
        },
        { headers: reqHeader }
      )
      .then(_ => {})
      .catch(_ => {});

    this.setState({
      message: ""
    });
  };

  render() {
    const { isModalOpen, username, messages, message } = this.state;
    return (
      <div className="container">
        <ChatPanel messages={messages} username={username} />
        <ChatBox
          handleChangeMessage={this.handleChangeMessage}
          handleSendMessage={this.handleSendMessage}
          message={message}
        />
        {isModalOpen && (
          <Modal title={"ChatBox"}>
            {
              <GuestForm
                change={this.handleChangeInputUsername}
                username={username}
                handleLogin={this.handleLogin}
              />
            }
          </Modal>
        )}
      </div>
    );
  }
}

export default ChatRoom;