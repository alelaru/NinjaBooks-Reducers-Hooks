import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from "./BookDetails"

const BookList = () => {
    const {books} = useContext(BookContext);

    return books.length ?( 
            <div className={"book-list"}>
                <ul>
                    { books.map((book) => {
                        return (<BookDetails book={book} key={book.id}></BookDetails>)
                    })}
                </ul>
            </div>
         ) :( 
            <div className={"empty"}>Hello no book to read, you have free time :)</div>
         )
}
 
export default BookList;