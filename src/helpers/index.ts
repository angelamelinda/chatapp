import axios from "axios";
import { reqHeader } from "../Firebase";

export function registerTokenToTopic(token: string, topic: string) {
  axios
    .post(
      "https://iid.googleapis.com/iid/v1/" + token + "/rel/topics/" + topic,
      {},
      { headers: reqHeader }
    )
    .then(resp => {
      console.log("Register token: ", resp);
    })
    .catch(err => {
      console.log("Register token: ", err);
    })
    .finally(() => {
      localStorage.setItem("fcmtoken", token);
    });
}

export function sendChat(username: string, message: string, fcmToken: string) {
  return axios
    .post(
      "https://fcm.googleapis.com/fcm/send",
      {
        to: "/topics/messages",
        data: {
          title: username,
          body: message,
          sendertoken: fcmToken
        }
      },
      { headers: reqHeader }
    )
    .then(resp => {
      return resp;
    })
    .catch(_ => {
      throw new Error("Invalid Request");
    });
}
