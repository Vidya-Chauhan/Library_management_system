import { useState } from "react";
import { auth } from "./firebaseConfig";
import { signOut } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import StudentDashboard from "./components/StudentDashboard";
import SearchBooks from "./components/SearchBooks";
import StudentProfile from "./components/StudentProfile"
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

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4 h-screen w-screen">
        <div className="w-full max-w-lg flex justify-center">
          {isLogin ? (
            <Login toggleAuth={() => setIsLogin(false)} onLogin={handleLogin} />
          ) : (
            <Signup toggleAuth={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    );
  }

  return (
    <Router>
      <StudentDashboard onLogout={handleLogout} />


    </Router>
  );
}

export default App;
