import React, { useState, useEffect } from 'react';
import './BookSearchPage.css';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css';
import { FaSearch } from 'react-icons/fa';
import Spinner from './Spinner';

const BookSearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm.trim() !== '') {
                handleSearch(searchTerm);
            } else {
                setSearchResults([]);
            }
        }, 100); 

        return () => clearTimeout(timer);
    }, [searchTerm]);

    const handleSearch = async (query) => {
        console.log(query)
        setIsLoading(true);
        setError(null);
        try {
            const encodedQuery = encodeURIComponent(query);
            const response = await axios.get(`https://openlibrary.org/search.json?q=${encodedQuery}&limit=10&page=1`);
            setSearchResults(response.data.docs);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setError('Error fetching search results. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm((prevSearchTerm) => event.target.value); 
    };

    return (
        <div className='bsp-bg'>
            <h1>Book Search Page</h1>
            <Link to="/bookshelf">
                <button className='my-book-shelf'>My Bookshelf</button>
            </Link>
            <div className='search-bar'>
                <div className='input-container'>
                    <input
                        placeholder='Search by book name...'
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <FaSearch className="search-icon" size={25} />
                </div>
            </div>
            {isLoading && <Spinner />}
            {error && <p>{error}</p>}
            {!isLoading && searchResults.length === 0 && <p className='no-result'>No results found! ☹️</p>}
            <section className='grid-container'>
                {searchResults.map((book, index) => (
                    <BookCard key={index} btnvisible={true} book={book} />
                ))}
            </section>
        </div>
    );
};

export default BookSearchPage;
