
import './App.css';
import BookSearchPage from './BookSearchPage';
import BookShelf from './BookShelf';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" index element={<BookSearchPage/>} />
      <Route path="bookshelf" element={<BookShelf/>} />
    </Routes>
  </Router>
      
    
  );
}

export default App;
