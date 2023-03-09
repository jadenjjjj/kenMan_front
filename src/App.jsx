import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import MangaList from './components/MangaList';
import Auth from './components/Auth';
import AddManga from './components/AddManga';

function App() {
  return (
    <Router>
      <Routes>
      
      {/* <Link to="/add-manga">Add Manga</Link> */}
      <Route path="/" element={<Auth />} />


        {/* <Route path="/" exact component={MangaList} /> */}
        <Route path="/add-manga" component={AddManga} />
      
      </Routes>
    </Router>
  );
}

export default App;


