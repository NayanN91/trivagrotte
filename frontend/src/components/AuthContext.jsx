import React, { useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const correctusername = "djokzer";
  const correctpassword = "64zer";

  const authContextValue = {
    password,
    setPassword,
    username,
    setUsername,
    isLoggedIn,
    setIsLoggedIn,
    correctusername,
    correctpassword,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
