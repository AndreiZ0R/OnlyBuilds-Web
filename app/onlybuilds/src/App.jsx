import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  function handleIsLoggedIn() {
    //get la server pt a primi daca e logat sau nu
  }

  return (
    <div>
      <NavBar
        isLoggedIn={isLoggedIn}
        onSignIn={() => {
          window.location = "/login";
        }}
        onSignUp={() => {
          window.location = "/signup";
        }}
        onHome={() => {
          window.location = "/";
        }}
        onAboutUs={() => {}}
        onContactUs={() => {}}
        onProfile={() => {}}
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
