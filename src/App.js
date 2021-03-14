import './App.css';
import BookContextProvider from "./context/BookContext"
import NavBar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar></NavBar>
        <BookList></BookList>
        <BookForm></BookForm>
      </BookContextProvider>
    </div>
  );
}

export default App;
