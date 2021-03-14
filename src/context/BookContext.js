import React, { createContext, useEffect, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer,[], () => {
        const localData = localStorage.getItem("books")
        // It returns the value as books
        return localData? JSON.parse(localData) : []
    })
    // You use it great because it will change the localStorage everytime there is a change in the books
    // For example Add, Delete or Edit
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books))
    },[books])

    return ( 
        <BookContext.Provider value={{ books, dispatch}}>
            { props.children }
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;