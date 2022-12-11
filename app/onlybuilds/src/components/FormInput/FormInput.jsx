import "./FormInput.css";
import "../../App.css";
import {useState} from "react";

const FormInput = ({label, errorMessage, id, placeholder,type }) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    };


    return (
        <div className="formInput">
            <label htmlFor={id}>{label}</label>
            <input
                placeholder={placeholder}
                type={type}
                id={id}


                // onChange={onChange}
                // onBlur={handleFocus}
                // onFocus={() =>
                //     inputProps.name === "confirmPassword" && setFocused(true)
                // }
                // focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
};
export default FormInput;