import "./NavBar.css";
import "../../App.css";
import logo from "../../assets/logo.png";
import ClassicButton from "../ClassicButton/ClassicButton.jsx";
import TextButton from "../TextButton/TextButton";
import SearchBar from "../SearchBar/SearchBar";
import NavBarItem from "../NavBarItem/NavBarItem";
import IconButtons from "../IconButton/IconButton.jsx";
import Face5 from "@mui/icons-material/Face5";

const NavBar = ({ color, extraClasses, isLoggedIn = "false" }) => {
  return (
    <nav className="columns">
      <div className="column is-2">
        <img src={logo} alt="logo" className="logo" />
        <span id="only" className="smallText">
          Only
        </span>
        <span id="builds" className="smallText">
          Builds
        </span>
      </div>
      {/* <div className="column is-1"></div> */}

      <div className="column">
        <SearchBar color="var(--primaryColor)"></SearchBar>
      </div>
      <div className="column is-1">
        <NavBarItem label="Home" extraClasses="textBold" />
      </div>
      <div className="column is-1">
        <NavBarItem label="About" extraClasses="textBold" />
      </div>
      <div className="column is-1">
        <NavBarItem label="Posts" extraClasses="textBold" />
      </div>
      <div className="column is-1">
        <NavBarItem label="Contact" extraClasses="textBold" />
      </div>

      {isLoggedIn === "false" ? (
        <div className="column is-2">
          <ClassicButton
            label="Sign In"
            isRounded="true"
            labelColor="white"
            backgroundColor="var(--primaryColor)"
            hoverBackground="var(--primaryColorOpacity)"
            hoverColor="white"
            extraClasses="opacity50 xsText"
            onClick={() => {}}
          />

          <ClassicButton
            label="Sign Up"
            isRounded="true"
            labelColor="var(--backgroundColor)"
            backgroundColor="var(--accentColor)"
            hoverBackground="var(--accentColorOpacity)"
            extraClasses="xsText"
            onClick={() => {}}
          />
        </div>
      ) : (
        <div className="column is-2">
          <IconButtons
            iconColor="var(--backgroundColor)"
            onClick={() => {}}
            iconType={<Face5 />}
          />

          <TextButton
            label="Profile"
            labelColor="var(--backgroundColor)"
            extraClasses="mediumText"
          />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
