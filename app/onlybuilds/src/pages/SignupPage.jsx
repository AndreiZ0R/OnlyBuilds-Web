import React, {useReducer, useState} from 'react';
import "./SignUpPage.css";
import FormInput from "../components/FormInput/FormInput";
import "../App.css";

const SignUpPage = () => {
    // const [username,setUsername] = userState("")
    // const usernameRef = useRef()

    // States for registration
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            pattern: null
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

        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm password",
            errorMessage: "Passwords don't match!",
            // pattern: values.password,
            pattern: "",
        },
    ];

    const [text, setText] = useState("Sign Up");

    return (
        <div className="bodySignUp gradientSecondary">
            <div className="SignUpContainer">
                <form className="formPrimary" >
                    <span className="SignUp applyFont">{text}</span>
                    {inputs.map((input) => (
                        <FormInput
                            id={input.id}
                            // onChange={onChange}
                            placeholder={input.placeholder}
                            // label={input.name}
                            // errorMessage={input.errorMessage}
                            type={input.type}
                        />
                    ))}
                    <button className="btnSignUp mediumText gradientThird">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
