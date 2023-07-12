import { useState } from "react";

import "./AuthPage.css";
// import { Link } from "react-router-dom";

const AuthPage = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const correctusername = "djokzer";
  const correctpassword = "64zer";
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleLoginClickzer(event);
    }
  };
  const handleLoginClickzer = (event) => {
    event.preventDefault();
    console.log(password);
    console.log(username);

    if (username === correctusername && password === correctpassword) {
      setIsLoggedIn(true);
    }
  };
  return (
    <div className="Autentification">
      <form
        action=""
        method="get"
        className="form-loggin"
        onSubmit={handleLoginClickzer}
      >
        <div className="username">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={(event) => setUsername(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="form-example">
          <input
            type="submit"
            value="log in"
            onChange={(event) => setUsername(event.target.value)}
            onKeyDown={handleKeyDown}
            {...(event) => setPassword(event.target.value)}
          />
        </div>
      </form>
      {isLoggedIn && (
        <div className="navigation">
          {/* Contenu à afficher dans la barre de navigation */}
          <span>Connecté</span>
          <div className="statusDot"></div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
