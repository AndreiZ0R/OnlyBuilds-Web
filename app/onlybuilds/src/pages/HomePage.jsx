import "./HomePage.css";
import { useEffect, useState } from "react";

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
        <span>
          <div id="firstSectionTitle">OnlyBuilds</div>
          <div className="blinking-cursor">
            <span className="writing">{text}</span>
          </div>
        </span>
      </div>
      <div
        className="mySection centerItems"
        style={{
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <span className="quickLook ">A quick look.</span>
        <div>CAROUSEL</div>
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
        <span className="quickLook ">Contact Us.</span>
        <div>Details</div>
      </div>
    </>
  );
};

export default HomePage;
