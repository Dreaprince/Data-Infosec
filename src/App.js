import React from 'react'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import News from './component/News';
import CommentPage from './component/pages/CommentPage';
import DetailProduct from './component/pages/DetailProduct';

  


function App() {

  return (
    <Router>
        <News />
        <DetailProduct />
        <CommentPage />
    </Router>
  );
}

export default App;


