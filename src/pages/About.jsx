import Navbar from '../compo/Navbar';
import Footer from '../compo/Footer';

export default function About() {
    return (
      <>
        <Navbar />
        <div className="bg-gray-400 min-h-screen flex flex-col items-center px-6 py-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">About NIT Uttarakhand</h1>
          <div className="max-w-5xl bg-white p-8 shadow-lg rounded-lg text-gray-800 leading-relaxed">
            <p className="mb-6">
              Welcome to <span className="font-semibold">NIT Uttarakhand</span>! 
              We are a premier institute fostering technical education, research, and innovation. 
              Located in the serene Himalayas, NITUK offers undergraduate, postgraduate, and doctoral programs, nurturing students for academic and professional excellence.
            </p>

            {/* Departments Section */}
            <h2 className="text-3xl font-bold text-blue-900 mt-10 mb-6 text-center">📚 Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[ 
                { name: "Civil Engineering", description: "Focuses on infrastructure development, environmental sustainability, and structural engineering." },
                { name: "Computer Science & Engineering", description: "Deals with software development, artificial intelligence, and cybersecurity." },
                { name: "Electrical Engineering", description: "Covers power systems, electronics, and renewable energy technologies." },
                { name: "Electronics & Communication Engineering", description: "Specializes in communication networks, VLSI, and embedded systems." },
                { name: "Mechanical Engineering", description: "Explores thermodynamics, robotics, and advanced manufacturing processes." },
                { name: "Physics", description: "Researches fundamental and applied physics, including quantum mechanics and nanotechnology." },
                { name: "Chemistry", description: "Covers material science, organic synthesis, and environmental chemistry." },
                { name: "Mathematics", description: "Focuses on applied mathematics, data analytics, and computational modeling." },
                { name: "Humanities & Social Sciences", description: "Develops soft skills, ethics, and managerial competencies for engineers." },
              ].map((dept, index) => (
                <div key={index} className="p-4 bg-gray-200 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800">{dept.name}</h3>
                  <p className="text-gray-700">{dept.description}</p>
                </div>
              ))}
            </div>

            {/* Administration Section */}
            <h2 className="text-3xl font-bold text-blue-900 mt-10 mb-6 text-center">🏛️ NITUK Administration</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="py-3 px-4 text-left">S. No.</th>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Designation</th>
                    <th className="py-3 px-4 text-left">Ext.</th>
                    <th className="py-3 px-4 text-left">Email</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {[
                    { id: 1, name: "Prof. Lalit K. Awasthi", designation: "Director", ext: "401", email: "director@nituk.ac.in" },
                    { id: 2, name: "Dr. Dhramendra Tripathi", designation: "I/c Registrar", ext: "402", email: "registrar@nituk.ac.in" },
                    { id: 3, name: "Dr. Lalta Prasad", designation: "Dean, Academic Affairs", ext: "411", email: "dean.academics@nituk.ac.in" },
                    { id: 4, name: "Dr. Gurinder Singh Brar", designation: "Dean, Planning & Development", ext: "417", email: "dean.pd@nituk.ac.in" },
                    { id: 5, name: "Dr. Sanat Agrawal", designation: "Dean, Research and Consultancy", ext: "418", email: "dean.rnc@nituk.ac.in" },
                    { id: 6, name: "Dr. Hariharan Muthusamy", designation: "Dean, Faculty Welfare, Student Affairs", ext: "413", email: "dean.fw@nituk.ac.in" },
                    { id: 7, name: "Dr. Dharmendra Tripathi", designation: "Dean, Student Affairs", ext: "-", email: "deansw@nituk.ac.in" },
                    { id: 8, name: "Dr. Prakash Dwivedi", designation: "Associate Dean (Academics Affairs – UG)", ext: "421", email: "associatedean_ug@nituk.ac.in" },
                    { id: 9, name: "Dr. Saroj Ranjan De", designation: "Associate Dean (Academics Affairs – PG)", ext: "421", email: "saroj.de@nituk.ac.in" },
                    { id: 10, name: "Dr. Aditya Kumar Anupam", designation: "Associate Dean (P&D-1)", ext: "431", email: "ak.anupam@nituk.ac.in" },
                    { id: 11, name: "Dr. Vikas Pratap Singh", designation: "Associate Dean (P&D-2)", ext: "431", email: "" },
                    { id: 12, name: "Dr. Pawan Kumar Rakesh", designation: "Associate Dean Research & Consultancy", ext: "431", email: "pawanrakesh@nituk.ac.in" },
                    { id: 13, name: "Dr. Siva Kumar Tadepalli", designation: "Associate Dean Student Welfare", ext: "421", email: "sktadepalli@nituk.ac.in" },
                    { id: 14, name: "Dr. Kranti Gyanchand Jain", designation: "Civil Engineering", ext: "531", email: "jainkranti8@nituk.ac.in" },
                  ].map((admin, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3 px-4">{admin.id}</td>
                      <td className="py-3 px-4">{admin.name}</td>
                      <td className="py-3 px-4">{admin.designation}</td>
                      <td className="py-3 px-4">{admin.ext}</td>
                      <td className="py-3 px-4">
                        <a href={`mailto:${admin.email}`} className="text-blue-600 hover:underline">
                          {admin.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}



