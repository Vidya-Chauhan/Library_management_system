import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [students, setStudents] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);
  const [loadingStudents, setLoadingStudents] = useState(true);

  useEffect(() => {
    // Fetch books data from Firestore
    const fetchBooks = async () => {
      try {
        const booksCollection = collection(db, "books");
        const bookSnapshot = await getDocs(booksCollection);
        const bookList = bookSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBooks(bookList);
        setLoadingBooks(false);
      } catch (error) {
        console.error("❌ Error fetching books:", error);
      }
    };

    // Fetch students data from Firestore
    const fetchStudents = async () => {
      try {
        const studentsCollection = collection(db, "students");
        const studentSnapshot = await getDocs(studentsCollection);
        const studentList = studentSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setStudents(studentList);
        setLoadingStudents(false);
      } catch (error) {
        console.error("❌ Error fetching students:", error);
      }
    };

    fetchBooks();
    fetchStudents();
  }, []);

  const handleAddBook = async () => {
    const newBook = { title: "New Book", genre: "Fiction", author: "Author" };
    try {
      const docRef = await addDoc(collection(db, "books"), newBook);
      console.log("Book added with ID:", docRef.id);
      setBooks([...books, { ...newBook, id: docRef.id }]);
    } catch (error) {
      console.error("❌ Error adding book:", error);
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await deleteDoc(doc(db, "books", bookId));
      setBooks(books.filter((book) => book.id !== bookId));
    } catch (error) {
      console.error("❌ Error deleting book:", error);
    }
  };

  return (
    <div className="p-6 text-black">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      {/* Add Book Button */}
      <button onClick={handleAddBook} className="bg-blue-500 text-white p-2 mb-4">Add New Book</button>
      
      {/* Books List */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Books List</h3>
        {loadingBooks ? (
          <p>Loading books...</p>
        ) : books.length === 0 ? (
          <p>No books available.</p>
        ) : (
          <ul>
            {books.map((book) => (
              <li key={book.id} className="border p-3 mb-2 rounded shadow">
                <strong>{book.title}</strong> - {book.genre} <br />
                <button onClick={() => handleDeleteBook(book.id)} className="bg-red-500 text-white p-2 mt-2">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Students List */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Students List</h3>
        {loadingStudents ? (
          <p>Loading students...</p>
        ) : students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          <ul>
            {students.map((student) => (
              <li key={student.id} className="border p-3 mb-2 rounded shadow">
                <strong>{student.name}</strong> - {student.email}<br />
                <button className="bg-yellow-500 text-white p-2 mt-2">Update Books</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
