import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";

const Signup = ({ toggleAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Function to validate email format
  const validateEmail = (email) => {
    const pattern = /^bt\d{2}(cse|eee|mech|civ|ece)\d{3}@nituk\.ac\.in$/;
    return pattern.test(email.toLowerCase());
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Check if email matches required format
    if (!validateEmail(email)) {
      setError("❌ Invalid email ! Use college mail id ");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("✅ Account created successfully! You can now log in.");
    } catch (err) {
      setError("❌ " + err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Library Sign Up</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center mb-4">{success}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{' '}
          <button onClick={toggleAuth} className="text-blue-500 font-semibold hover:underline">
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
