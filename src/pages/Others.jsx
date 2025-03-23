import React from "react";
import Navbar from "../compo/Navbar"
import Footer from "../compo/Footer";


export default function Others() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6">
        {/* Header Section */}
        <header className="bg-blue-600 text-white text-center py-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">Others</h1>
        </header>
        
        {/* Hostels Section */}
        <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Hostels</h2>
          <p className="text-gray-700 mb-4">
            NIT Uttarakhand has 09 hostels (07 Boys and 02 Girls) in Srinagar (Garhwal), providing accommodation for approximately 650 students. Hostel rooms are available on a sharing basis with two and three-seater capacities.
          </p>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Hostel Name</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Rooms</th>
                <th className="border p-2">Capacity</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Alakanada", "Boys", "36 (3-Seater), 11 (1/2-Seater)", "120"],
                ["Sarayu", "Boys", "36 (3-Seater), 11 (1/2-Seater)", "120"],
                ["Yamuna", "Boys", "22 (3-Seater)", "66"],
                ["Saraswati", "Boys", "18 (2-Seater)", "36"],
                ["Bhagirathi", "Boys", "35 (3-Seater)", "105"],
                ["Bhilangana", "Boys", "14 (2-Seater)", "28"],
                ["Pindar", "Boys", "19 (3-Seater)", "57"],
                ["Ganga", "Girls", "17 (2-Seater), 3 (3-Seater)", "43"],
                ["Mandakini", "Girls", "23 (3-Seater)", "69"],
              ].map(([name, type, rooms, capacity]) => (
                <tr key={name}>
                  <td className="border p-2">{name}</td>
                  <td className="border p-2">{type}</td>
                  <td className="border p-2">{rooms}</td>
                  <td className="border p-2">{capacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        
        {/* Clubs Section */}
        <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Student Clubs</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Technical Club (Organizes Tech Fest - ProdyoGeeky)</li>
            <li>Sports Club</li>
            <li>Literary Club</li>
            <li>Film and Photography Club</li>
            <li>Adventure Activities & Community Service Club</li>
            <li>SAE Club</li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}