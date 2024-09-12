import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (

    <div className="App">
      <Profile></Profile>
      {isAuthenticated?<LogoutButton/>:<LoginButton/>}</div>
  );
}

export default App;
