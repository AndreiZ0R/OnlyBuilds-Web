import "./HomePage.css";
import Carousel from "../components/Carousel/Carousel.jsx";
import { useEffect, useState } from "react";
import ClassicButton from "../components/ClassicButton/ClassicButton";

const HomePage = () => {
  const strings = [
    "Where components meet professionals.",
    "Ask | Build | Enjoy.",
  ];

  const [selectedText, setSelectedText] = useState(strings[0]);

  const textState = ["istyping", "isdeleting"];
  const [typing, setTyping] = useState(textState[0]);
  const [text, setText] = useState("");

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "istyping" && text !== selectedText) {
        setText(selectedText.slice(0, text.length + 1));
      } else if (text === selectedText && typing === "istyping") {
        sleep(2000).then(() => {
          setTyping(textState[1]);
        });
      } else if (typing === "isdeleting" || text !== "") {
        setText(selectedText.slice(0, text.length - 1));
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [selectedText, typing, text]);

  useEffect(() => {
    if (text === "") {
      setSelectedText(selectedText === strings[0] ? strings[1] : strings[0]);
      setTyping(textState[0]);
    }
  }, [text]);

  return (
    <>
      <div className="mySection centerItems">
        <span id="beCentered">
          <div id="firstSectionTitle">OnlyBuilds</div>
          <div className="blinking-cursor">
            <span className="writing" style={{ alignSelf: "center" }}>
              {text}
            </span>
          </div>
        </span>
      </div>
      <div
        className="mySection centerItems"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="quickLook ">A closer look.</span>
        <Carousel
          images={[
            "https://www.neweggbusiness.com/smartbuyer/wp-content/uploads/DARK_FLASH_TOWER_WEBREADY-08678.jpg",
            "https://media.wired.com/photos/624df21cb340f55b37084fdc/4:3/w_1796,h_1347,c_limit/How-to-Build-a-PC-Gear.jpg",
            "https://images.saymedia-content.com/.image/t_share/MTc1MDA5NzM3OTcxMDgyOTg0/build-photo-editing-pc.jpg",
            "https://www.teahub.io/photos/full/162-1621070_pc-build-setup.jpg",
            "https://wallpaperaccess.com/full/5459443.jpg",
            "https://wallpaperaccess.com/full/7860127.jpg",
            "https://specials-images.forbesimg.com/imageserve/62b4570b678d2aa35f4a638c/Corsair-Vengeance-i7300-gaming-PC-in-a-bedroom-/960x0.jpg?cropX1=138&cropX2=1065&cropY1=0&cropY2=618",
          ]}
        />
      </div>
      <div
        className="mySection centerItems quickLook"
        style={{ alignItems: "flex-start" }}
      >
        About Us
      </div>
      <div
        className="mySection centerItems quickLook"
        style={{ alignItems: "flex-start", justifyContent: "flex-end" }}
      >
        Posts
      </div>
      <div
        className="mySection centerItems"
        style={{
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <span className="quickLook">Contact Us!</span>
        <div className="contactCard">
          <div className="actualCard">
            <form action="">
              <label
                className="formLbl"
                for="formName"
                style={{
                  display: "block",
                  color: "var(--backgroundColor)",
                  padding: "0.5rem",
                }}
              >
                Name
              </label>

              <input
                className="formInpt"
                placeholder="Your name"
                id="formName"
                type="text"
                style={{
                  borderRadius: "0.4rem",
                  border: "none",
                  padding: "0.2rem",
                }}
              />

              <label
                className="formLbl"
                for="formEmail"
                style={{
                  display: "block",
                  color: "var(--backgroundColor)",
                  padding: "0.5rem",
                }}
              >
                Email
              </label>

              <input
                className="formInpt"
                id="formEmail"
                placeholder="Your email address"
                type="email"
                style={{
                  borderRadius: "0.4rem",
                  border: "none",
                  padding: "0.2rem",
                }}
              />

              <label
                className="formLbl"
                for="formMsg"
                style={{
                  display: "block",
                  color: "var(--backgroundColor)",
                  padding: "0.5rem",
                }}
              >
                Message
              </label>
              <textarea
                className="formInpt"
                placeholder="Leave us a message"
                id="formMsg"
                rows="5"
                cols="40"
              ></textarea>

              <div style={{ paddingTop: "2rem" }}>
                <ClassicButton
                  isRounded="true"
                  label="Send"
                  backgroundColor="var(--primaryColor)"
                  color="black"
                  labelColor="var(--backgroundColor)"
                  hoverBackground="var(--primaryColorOpacity)"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
