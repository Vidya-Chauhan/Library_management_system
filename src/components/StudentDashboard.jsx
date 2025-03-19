import { Link, Routes, Route, Navigate } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import StudentProfile from "./StudentProfile"; 
const StudentDashboard = ({ onLogout }) => {
  return (
    <div className="flex h-screen min-h-screen w-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">📚 Library System</h2>
        <nav className="space-y-4">
          <Link to="/search-books" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">
            🔍 Search Books
          </Link>
          <Link to="/profile" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">
            👤 Profile
          </Link>
          <Link to="/dues" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">
            💰 Check Dues
          </Link>
          <button onClick={onLogout} className="w-full bg-red-600 py-2 rounded hover:bg-red-700">
            🚪 Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Routes>
          <Route path="/search-books" element={<SearchBooks />} /> 
          <Route path="/profile" element={<StudentProfile />} /> {/* Route for Profile */}
          <Route path="*" element={<Navigate to="/search-books" />} />
        </Routes> 
      </div>
    </div>
  );
};

export default StudentDashboard;
