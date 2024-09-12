import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./profile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
       
        <div className="profile_details">
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
        <img src={user.picture} alt={user.name} className="profile_img"/>
      </div>
    )
  );
};

export default Profile;
