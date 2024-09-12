import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import Profile from "./components/profile/profile";
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
