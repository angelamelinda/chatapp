import React from "react";
import { Switch, Route } from "react-router-dom";
import ChatRoom from "./containers/ChatRoom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ChatRoom}></Route>
      </Switch>
    </div>
  );
};

export default App;
