import { useState, useContext } from "react";
import AuthPage from "./AuthPage";
import { AuthContext } from "./AuthContext";
import "./Navbar.css";
import ti from "../assets/Ti_Franck.png";
import off from "../assets/Nav-NoLog.png";

const Navbar = () => {
  const [showAuthPage, setShowAuthPage] = useState(false);
  const handleLogoClick = () => {
    setShowAuthPage(true);
  };

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="Nav-All">
      <div className="Nav-Left">
        <img
          src="src/assets/TrivaGrotte-Logo.png"
          alt="TrivaGrotte"
          className="Nav-Logo"
        />
      </div>
      <div className="Nav-Right">
        <div className="Nav-Search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="logoconnect">
          {console.log(isLoggedIn)}
          <img
            src={isLoggedIn ? ti : off}
            alt="TrivaGrotte"
            className="logoconnect"
            onClick={handleLogoClick}
          />
        </div>
      </div>
      {showAuthPage && <AuthPage />}
    </div>
  );
};

export default Navbar;
