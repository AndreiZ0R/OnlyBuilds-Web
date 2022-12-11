import "./LoginPage.css";
import React, {useState} from 'react';
import FormInput from "../components/FormInput/FormInput";
import "../App.css";
import OutlinedButton from "../components/OutlinedButton/OutlinedButton";
const LoginPage = () => {

  // States for Login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "[A-Za-z0-9]{3,16}$",
    },


    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
  ];

  const [text, setText] = useState("Login");

  return (
      <div className="bodyLogin gradientSecondary">
        <div className="LoginContainer">
          <form className="formPrimary" >
            <span className="SignUp applyFont">{text}</span>
            {inputs.map((input) => (
                <FormInput
                    id={input.id}
                    placeholder={input.placeholder}
                    // label={input.name}
                    type={input.type}
                />
            ))}
            <OutlinedButton label="Submit" backgroundColor="var(--primaryColor)" labelColor="black" isRounded="true" onClick="" extraClasses="applyFont btnLoginSubmit" />
            {/*<button className="btnLogin mediumText gradientThird">Submit</button>*/}
          </form>
        </div>
      </div>
  );
};

export default LoginPage;


