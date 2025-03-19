 
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const SearchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksCollection = collection(db, "books");
        const bookSnapshot = await getDocs(booksCollection);
        const bookList = bookSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBooks(bookList);
        setLoading(false);
      } catch (error) {
        console.error("❌ Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    (book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
  (book.genre && book.genre.toLowerCase().includes(searchTerm.toLowerCase())) ||
  (book.author && book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6 text-black h-screen overflow-y-auto px-4 w-full"> {/* ✅ Enables scrolling */}
      <h2 className="text-2xl font-semibold text-black mb-4">📚 Search Books</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by title or genre..."
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      {loading ? (
        <p>Loading books...</p>
      ) : filteredBooks.length === 0 ? (
        <p>No books found matching your search criteria.</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id} className="border p-3 mb-2 rounded shadow">
              <strong>{book.title}</strong> - {book.author} ({book.genre})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 

export default SearchBooks;
