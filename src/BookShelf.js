import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import './BookShelf.css';

const BookShelf = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('books'));
        if (storedBooks) {
            setBooks(storedBooks);
        }
    }, []);

    const handleRemoveBook = (index) => {
        
        const updatedBooks = [...books];
        updatedBooks.splice(index, 1);
        setBooks(updatedBooks);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
    };

    return (
        <div className='bsp-bg'>
            <h1>My Book Shelf</h1>

            <section className='grid-container-shelf'>
                {books.map((book, index) => (
                    <BookCard key={index} btnvisible={false} book={book} onDoubleClick={() => handleRemoveBook(index)} />
                ))}
            </section>
        </div>
    );
};

export default BookShelf;
