import { FaEnvelope, FaPhone, FaGlobe, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left Section - NIT Info */}
                <div className="text-center md:text-left">
                    <img 
                        src="https://images.indianexpress.com/2018/11/nit-logo.jpg?w=759" 
                        alt="NIT Uttarakhand Logo" 
                        className="w-24 mx-auto md:mx-0 mb-4"
                    />
                    <h3 className="text-lg font-semibold">National Institute of Technology, Uttarakhand</h3>
                    <p className="text-sm text-gray-400">Srinagar, Pauri (Garhwal) - 246174</p>
                    <div className="mt-3 space-y-2">
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <FaPhone className="text-green-400" /> 01346-257400
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <FaEnvelope className="text-blue-400" />
                            <a href="mailto:nituttarakhand@nituk.ac.in" className="hover:underline">
                                nituttarakhand@nituk.ac.in
                            </a>
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <FaGlobe className="text-blue-400" />
                            <a href="https://www.nituk.ac.in" className="hover:underline">
                                www.nituk.ac.in
                            </a>
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex justify-center md:justify-start space-x-4 mt-4">
                        <a href="https://www.facebook.com/NITUKofficial" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-blue-500 hover:text-blue-400 text-xl transition duration-300" />
                        </a>
                        <a href="https://twitter.com/NITUKofficial" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-blue-400 hover:text-blue-300 text-xl transition duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/school/nituttarakhand/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-blue-600 hover:text-blue-500 text-xl transition duration-300" />
                        </a>
                    </div>
                </div>

                {/* Right Section - Admissions & Visitor Info */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-3 border-b pb-2">Admissions & Support</h3>
                    <ul className="space-y-2">
                        {["Anti-Ragging Initiative", "Liaison Officer", "Public Grievances", "CCMT 2024", "JoSAA 2023", "CSAB 2023"].map((link, index) => (
                            <li key={index}>
                                <a href="#" className="hover:text-gray-300 transition duration-300">{link}</a>
                            </li>
                        ))}
                    </ul>

                    
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 text-center">
                <a href="https://www.nituk.ac.in/contact" 
                   className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg transition duration-300">
                    Contact Us
                </a>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6 text-sm text-gray-400 border-t pt-3">
                <p>© 2024 National Institute of Technology, Uttarakhand. All Rights Reserved.</p>
                <p>Developed & Maintained by Computer Centre, NIT Uttarakhand</p>
            </div>
        </footer>
    );
}
