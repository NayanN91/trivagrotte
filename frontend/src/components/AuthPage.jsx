import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import "./AuthPage.css";
import "./Navbar.css";
// import { Link } from "react-router-dom";

const AuthPage = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const correctusername = "caveman";
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
    <AuthContext.Provider
      value={{
        password,
        setPassword,
        username,
        setUsername,
        isLoggedIn,
        setIsLoggedIn,
        correctusername,
        correctpassword,
      }}
    >
      <div className="Autentification">
        {isLoggedIn ? (
          <div className="isloggedin">
            <img src="" alt="" />
            <div className="statusDot"></div>
          </div>
        ) : (
          <form
            action=""
            method="get"
            className="form-loggin"
            onSubmit={handleLoginClickzer}
          >
            <div className="username">
              <label htmlFor="username"></label>
              <input
                className="inputUsername"
                type="text"
                name="username"
                id="username"
                required
                placeholder="Username"
                onChange={(event) => setUsername(event.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="password">
              <label htmlFor="password"></label>
              <input
                className="inputPassword"
                type="password"
                name="password"
                id="password"
                required
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="form-example">
              <input
                className="inputLogin"
                type="submit"
                value="Submit"
                onChange={(event) => setUsername(event.target.value)}
                onKeyDown={handleKeyDown}
                {...(event) => setPassword(event.target.value)}
              />
            </div>
          </form>
        )}
      </div>
    </AuthContext.Provider>
  );
};

export default AuthPage;
