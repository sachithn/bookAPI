import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter books every time books or searchTerm changes
    const filteredData = books.filter((book) =>
      searchTerm === "" || 
      (Number.isInteger(Number(searchTerm)) && book.id.toString().includes(searchTerm))
      //book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filteredData);
  }, [books, searchTerm]);

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <SearchBar onSearchChange={handleSearchChange} />
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={filteredBooks} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
