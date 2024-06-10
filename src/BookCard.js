import React from 'react';
import './BookCard.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookCard = ({ btnvisible, book, onDoubleClick }) => {
    const handleAddToShelf = () => {
        const existingBooks = JSON.parse(localStorage.getItem('books')) || [];
        const updatedBooks = [...existingBooks, book];
        localStorage.setItem('books', JSON.stringify(updatedBooks));

        toast.success('Book added to your bookshelf!');
    };

    return (
        <div className='book-card' onDoubleClick={onDoubleClick}>
            <ToastContainer />
            <table>
                <tbody>
                    <tr>
                        <td className='tdata'>Book Title:</td>
                        <td className='tdata2'>{book.title}</td>
                    </tr>
                    <tr>
                        <td className='tdata'>Edition Count:</td>
                        <td className='tdata2'>{book.edition_count}</td>
                    </tr>
                </tbody>
            </table>
            <button className={`add-btn ${btnvisible ? "" : "displayNone"}`} onClick={handleAddToShelf}>
                Add to Bookshelf
            </button>
        </div>
    );
};

export default BookCard;
