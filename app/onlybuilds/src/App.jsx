import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import PostsPage from "./pages/PostsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getUsersEndpoint } from "./api/ApiHelper";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState("false");

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <NavBar
        isLoggedIn="false"
        onSignIn={() => {
          window.location = "/login";
        }}
        onSignUp={() => {
          window.location = "/signup";
        }}
        onHome={() => {
          window.location = "/";
        }}
        onAboutUs={() => {
          window.location = "/";
        }}
        onContactUs={() => {
          // window.location = "/";
          console.log("Trying a fetch...");

          getUsersEndpoint()
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        onPosts={() => {
          window.location = "/posts";
        }}
        onProfile={() => {
          window.location = "/profile";
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
