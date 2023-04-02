import SignInPage from "./pages/signin-page/signin-page.jsx";
import SignUpPage from "./pages/singup-page/signup.component.jsx";
import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component.jsx";
import TokenPage from "./pages/signup-token/signup-token.component.jsx";
import {useState} from "react";

function App() {

  const [userData, setUserData] = useState({});

  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/signin" element={<SignInPage setUserData={setUserData}/>}/>
         <Route path="/signup" element={<SignUpPage/>}/>
         <Route path="/signup/token" element={<TokenPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
