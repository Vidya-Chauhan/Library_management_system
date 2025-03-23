import Navbar from '../compo/Navbar';
import Footer from '../compo/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    const contacts = [
        { id: 1, name: "Admissions & Scholarships", email: "ar.academic@nituk.ac.in, academics@nituk.ac.in", phone: "01346-257422/404" },
        { id: 2, name: "Accounts", email: "ar_accounts@nituk.ac.in, accounts.nituk@gov.in", phone: "01346-257426" },
        { id: 3, name: "Hostel & Mess", email: "ar_hostel@nituk.ac.in, hostel@nituk.ac.in", phone: "01346-257654" },
        { id: 4, name: "Tender & Purchase", email: "arstore@nituk.ac.in, stores@nituk.ac.in", phone: "01346-257436" },
        { id: 5, name: "Library", email: "assistant_librarian@nituk.ac.in, library@nituk.ac.in", phone: "01346-257436" },
        { id: 6, name: "Dispensary", email: "coordinator.dispensary@nituk.ac.in, dispensary.nituk@gov.in", phone: "01346-257655" },
        { id: 7, name: "Sports", email: "saso@nituk.ac.in, saso.nit-uk@gov.in", phone: "01346-257668, 9557750908" },
        { id: 8, name: "Career & Placement", email: "c2p@nituk.ac.in", phone: "9557750906" },
        { id: 9, name: "Civil Maintenance", email: "dean.pd@nituk.ac.in, jecivil.nit-uk@gov.in", phone: "01346-257425" },
        { id: 10, name: "Electrical Maintenance", email: "dean.pd@nituk.ac.in, jeeee.nit-uk@gov.in", phone: "01346-257425" },
        { id: 11, name: "Recruitment", email: "nitukrecruitmentcell@gmail.com", phone: "01346-251249" },
        { id: 12, name: "Legal", email: "ar_legal@nituk.ac.in, legal@nituk.ac.in" },
        { id: 13, name: "RTI", email: "rti@nituk.ac.in" },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r from-teal-400 via-blue-300 to-indigo-300 min-h-screen flex flex-col items-center px-6 py-12 text-gray-900">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">📞 Contact Us</h1>
                <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contacts.map(contact => (
                        <div key={contact.id} className="bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-400 w-80">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{contact.name}</h3>
                            <p className="flex flex-col items-center gap-1">
                                <FaEnvelope className="text-blue-500" /> 
                                {contact.email.split(", ").map((email, index) => (
                                    <a key={index} href={`mailto:${email}`} className="text-blue-600 hover:underline break-all">{email}</a>
                                ))}
                            </p>
                            {contact.phone && <p className="flex items-center gap-2 mt-2 text-gray-800"><FaPhone className="text-green-500" /> {contact.phone}</p>}
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">🏛 Institute Address</h2>
                    <p className="flex items-center justify-center gap-2 mt-2 text-gray-700"><FaMapMarkerAlt className="text-red-500" /> National Institute of Technology, Uttarakhand, Srinagar, Pauri (Garhwal)-246174</p>
                    <p className="flex items-center justify-center gap-2 mt-1 text-gray-700"><FaPhone className="text-green-500" /> Telephone: 01346-257400 (EPABX)</p>
                    <p className="flex items-center justify-center gap-2 mt-1 text-gray-700"><FaEnvelope className="text-blue-500" /> <a href="mailto:nituttarakhand@nituk.ac.in" className="text-blue-600 hover:underline">nituttarakhand@nituk.ac.in</a></p>
                </div>
            </div>
            <Footer />
        </>
    );
}
