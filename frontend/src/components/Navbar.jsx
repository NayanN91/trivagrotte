import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="Nav-All">
            <div className="Nav-Left">
                <img src="src\assets\TrivaGrotte-Logo.png" alt="TrivaGrotte" className="Nav-Logo" />
            </div>
            <div className="Nav-Right">
                <div className="Nav-Search">
                    <input type="text" placeholder="Search..." />
                </div>
                <div>
                    <img src="src\assets\Nav-NoLog.png" alt="No-Log" className="Nav-NoLog"/>
                </div>
            </div>
        </div>
    );


}

export default Navbar;