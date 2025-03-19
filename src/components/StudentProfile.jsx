import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const StudentProfile = ({ studentId }) => {
  const [student, setStudent] = useState(null);
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const studentDoc = await getDoc(doc(db, "students", studentId));
        if (studentDoc.exists()) {
          setStudent(studentDoc.data());
          setIssuedBooks(studentDoc.data().issuedBooks);
          setLoading(false);
        } else {
          console.log("No student found!");
        }
      } catch (error) {
        console.error("❌ Error fetching student profile:", error);
      }
    };

    fetchStudentProfile();
  }, [studentId]);

  const checkOverdue = (dueDate) => {
    const currentDate = new Date();
    return new Date(dueDate) < currentDate;
  };

  return (
    <div className="p-6 text-black">
      <h2 className="text-2xl font-semibold mb-4">Student Profile</h2>
      {loading ? (
        <p>Loading profile...</p>
      ) : (
        <>
          <div className="mb-4">
            <strong>Name:</strong> {student.name}<br />
            <strong>Email:</strong> {student.email}<br />
            <strong>Password:</strong> ******** (consider not showing passwords for security reasons)
          </div>
          <h3 className="text-xl mb-2">Issued Books</h3>
          {issuedBooks.length === 0 ? (
            <p>No books issued yet.</p>
          ) : (
            <ul>
              {issuedBooks.map((book, index) => (
                <li key={index} className="border p-3 mb-2 rounded shadow">
                  <strong>{book.title}</strong> - {book.genre}<br />
                  Issued on: {book.issueDate} <br />
                  Due date: {book.dueDate} <br />
                  {checkOverdue(book.dueDate) ? (
                    <span className="text-red-500">Overdue!</span>
                  ) : (
                    <span className="text-green-500">On time</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};


export default StudentProfile;
