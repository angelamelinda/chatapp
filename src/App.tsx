import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
import ChatRoom from "./containers/ChatRoom";
import { messaging } from "./Firebase";
import { registerTokenToTopic } from "./helpers";

class App extends PureComponent {
  componentDidMount() {
    messaging
      .requestPermission()
      .then(async function() {
        const token = await messaging.getToken();
        registerTokenToTopic(token, "messages");
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });

    navigator.serviceWorker.addEventListener("message", message => {
      try {
        const storageFCMToken = localStorage.getItem("fcmtoken");
        const messageData = message.data["firebase-messaging-msg-data"].data;
        if (
          storageFCMToken &&
          messageData.sendertoken &&
          messageData.sendertoken.trim() === storageFCMToken.trim()
        ) {
          console.log("Ignore Notification on self");
          return;
        }

        alert(messageData.body);
      } catch (error) {
        console.log("error", error);
      }
    });

    messaging.onTokenRefresh(() => {
      messaging.getToken().then(refreshedToken => {
        registerTokenToTopic(refreshedToken, "messages");
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ChatRoom}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
