import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "Name of the wind", author: "Patrick rothfuss", id:1},
        {title: "The final empire", author: "Brandon sanderson", id:2},
        {title: "El amor en los tiempos del cólera", author: "García Márquez", id:3},

    ])

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuidv4()}])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book=> book.id !== id))
    }

    return ( 
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            { props.children }
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;