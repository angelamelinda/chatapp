import React, { PureComponent, ChangeEvent, MouseEvent } from "react";
import Modal from "../../components/Modal";
import ChatBox from "../../components/ChatBox";
import GuestForm from "../../components/GuestForm";
import ChatPanel from "../../components/ChatPanel";
import { database } from "../../Firebase";
import { IMessage } from "../../interfaces";
import { sendChat } from "../../helpers";
import Toast from "../../components/Toast";

interface IChatRoomState {
  isModalOpen: boolean;
  username: string;
  users: any[];
  messages: any[];
  message: string;
  toast: null | string;
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
      message: "",
      toast: null
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

    this.setState(
      {
        isModalOpen: false
      },
      () => {
        this.handleSetToast("Successfully Login");
      }
    );
  };

  handleSendMessage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { message, username } = this.state;
    if (message.trim().length !== 0) {
      database.ref("messages").push({ text: message, user: username });
      let fcmToken = localStorage.getItem("fcmtoken");
      sendChat(username, message, fcmToken as string)
        .then(_ => {
          this.setState({
            message: ""
          });
        })
        .catch(error => {
          console.log("Send Chat: ", error);
        });
    }
  };

  handleSetToast = (message: string) => {
    this.setState(
      {
        toast: message
      },
      () => {
        setTimeout(() => {
          this.setState({
            toast: null
          });
        }, 2000);
      }
    );
  };

  render() {
    const { isModalOpen, username, messages, message, toast } = this.state;
    return (
      <div className="container">
        {!isModalOpen && username && (
          <div className="chat-information">Logged in as {username}</div>
        )}
        <ChatPanel
          messages={messages}
          username={username}
          isModalOpen={isModalOpen}
        />
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
        {toast && <Toast message={toast} />}
      </div>
    );
  }
}

export default ChatRoom;
