import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebaseConfig";
import { signOut } from "firebase/auth";
import Signup from "./components/Signup";
import Login from "./components/Login";
import StudentDashboard from "./components/StudentDashboard";


import Home from "./pages/Home";
import About from "./pages/About";  
import Contact from "./pages/Contact";
import Others from "./pages/Others";

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <Router>
     
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/others" element={<Others />} />

        
        {!user ? (
          <>
            <Route path="/login" element={<Login toggleAuth={() => setIsLogin(false)} onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup toggleAuth={() => setIsLogin(true)} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<StudentDashboard onLogout={handleLogout} />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
