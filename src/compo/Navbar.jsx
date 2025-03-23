import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo & Heading */}
      <div className="flex items-center">
        <img 
          src="https://th.bing.com/th/id/OIP._C2k2Ch7PYiWPW6G0Chr-gAAAA?rs=1&pid=ImgDetMain"
          alt="Library Logo"
          className="h-20 w-32 mr-2"
        />
        <div>
          <h1 className="text-3xl text-blue-600 font-semibold">
            National Institute of Technology Uttarakhand
          </h1>
          <p className="text-lg font-medium text-gray-600">
            Welcome to NITUK Library 📖
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 text-lg flex items-center">
        {["Home", "About", "Others", "Contact"].map((item) => (
          <Link 
            key={item}
            to={`/${item.toLowerCase()}`} 
            className="group relative transition"
          >
            <span className="text-gray-700 group-hover:text-blue-600 font-medium transition">
              {item}
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
          </Link>
        ))}

        {/* Login Button */}
        <Link 
          to="/login" 
          className="text-white px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-md"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
