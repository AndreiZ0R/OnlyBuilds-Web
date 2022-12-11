import "./HomePage.css";
import Carousel from "../components/Carousel/Carousel.jsx";
import { useEffect, useState } from "react";
import ClassicButton from "../components/ClassicButton/ClassicButton";
import PostCard from "../components/PostCard/PostCard.jsx";

import User from "../models/UserModel.js";
import Post from "../models/PostModel.js";

const HomePage = () => {
  const loremTxt =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id culpa hic? Minima reprehenderit similique iure eius, adipisci delectus optio odio iusto ipsa quam vero deleniti eaque repellat perferendis dolorum.\
     Illo nam error reiciendis molestiae vel, odio dolore sint necessitatibus nulla, ad, deserunt impedit quam quo! Magni placeat laudantium eos dolorem accusantium fuga soluta illum in, nemo eius! Natus, doloremque. Illo nam error reiciendis molestiae vel, odio dolore sint necessitatibus nulla, ad, deserunt impedit quam quo! Magni placeat laudantium eos dolorem accusantium fuga soluta illum in, nemo eius! Natus, doloremque.\
     Vitae illo temporibus laboriosam eum incidunt eos voluptatem provident, sed, ea non facilis! Sapiente, consequuntur accusantium inventore nemo laboriosam quaerat perspiciatis necessitatibus quo, minima asperiores ex quis veritatis. Explicabo, rem?";

  const mockUser = new User(
    "user",
    "mockinger@gmail.com",
    "url...",
    "Mock",
    "Ingbird",
    "Qatari",
    "Doha",
    "Qatara",
    541554,
    "0727752379",
    "User"
  );
  const mockPost = new Post(
    "Announcement Title",
    "1",
    mockUser.username,
    loremTxt,
    "post-tag",
    new Date()
  );

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
  }, [selectedText, typing, text, textState]);

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
        <span className="quickLook applyFont">Take a closer look.</span>
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
        className="mySection centerItems quickLook applyFont"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="aboutCard">
          <p>
            We like to believe that everyone has a purpose on this planet, no
            matter how big or small it might be. Creating software is what we
            like. It's what{" "}
            <span style={{ color: "var(--primaryColor)" }}>we do</span>. It's a
            <span style={{ color: "var(--primaryColor)" }}>lifestyle</span>.
            <span
              style={{
                color: "var(--primaryColor)",
                display: "block",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
              }}
            >
              "Mori memorias non somnia."
            </span>
            It's a motto we get to live by every day and encourage you all to
            follow it: Die with{" "}
            <span style={{ color: "var(--primaryColor)" }}>memoreis</span>, not
            <span style={{ color: "var(--primaryColor)" }}>dreams</span>.
            <div style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
              So, if your dreams are also tech-wise, you're already one of us!
            </div>
          </p>
        </div>
        What drives us.
      </div>
      <div
        className="mySection centerItems quickLook applyFont"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        Create a post.
        <div
          style={{ fontSize: "1rem", display: "inline-block", width: "50%" }}
        >
          <PostCard user={mockUser} post={mockPost} />
        </div>
      </div>
      <div
        className="mySection centerItems"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="contactCard">
          <div className="actualCard">
            <form action="">
              <label
                className="formLbl applyFont"
                htmlFor="formName"
                style={{
                  display: "block",
                  color: "var(--backgroundColor)",
                  padding: "0.5rem",
                }}
              >
                Name
              </label>

              <input
                className="formInpt applyFont"
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
                className="formLbl applyFont"
                htmlFor="formEmail"
                style={{
                  display: "block",
                  color: "var(--backgroundColor)",
                  padding: "0.5rem",
                }}
              >
                Email
              </label>

              <input
                className="formInpt applyFont"
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
                className="formLbl applyFont"
                htmlFor="formMsg"
                style={{
                  display: "block",
                  color: "var(--backgroundColor)",
                  padding: "0.5rem",
                }}
              >
                Message
              </label>
              <textarea
                className="formInpt applyFont"
                placeholder="Leave us a message"
                id="formMsg"
                rows="5"
                cols="40"
                maxLength="250"
              ></textarea>

              <div style={{ paddingTop: "2rem" }}>
                <ClassicButton
                  isRounded="true"
                  label="Send"
                  backgroundColor="var(--primaryColor)"
                  color="black"
                  labelColor="var(--backgroundColor)"
                  hoverBackground="var(--primaryColorOpacity)"
                  extraClasses="applyFont"
                />
              </div>
            </form>
          </div>
        </div>
        <span className="quickLook applyFont">Let's get in touch!</span>
      </div>
    </>
  );
};

export default HomePage;
