import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ toggleAuth, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const validateEmail = (email) => {
    const pattern = /^bt\d{2}(cse|ece|civ|mec|eee)\d{3}@nituk\.ac\.in$/;
    return pattern.test(email.toLowerCase());
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("❌ Invalid email format! Use: btXX[branch]YYY@nituk.ac.in");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully:", userCredential.user);
      onLogin(userCredential.user); // ✅ Update user state in App.jsx to show Dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Library Login</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        
        <form onSubmit={handleLogin} className="space-y-4 w-full">
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 text-black"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 text-black"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Don't have an account?{" "}
          <button onClick={toggleAuth} className="text-blue-500 font-semibold hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
