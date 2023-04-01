import { useState } from "react";

import "./App.css";

// importing a pages from the pages section

import AuthPage from "./AuthPage.jsx";
import ChatsPage from "./ChatsPage";

function App() {
  // undefined is a default value
  const [user, setUser] = useState(undefined);

  if (!user) {
    // here onAuth is a props which pass the username
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    // here if the username is there than we will render chatspage 
    return <ChatsPage user={user} />;
  }
}

export default App;