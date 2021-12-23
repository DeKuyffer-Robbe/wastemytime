import './App.css';
import React from 'react';
import Header from './components/Header';
import FactPage from './Pages/FactPage';
import ImagePage from './Pages/ImagePage';
import HomePage from './Pages/HomePage';
import AddNewFactPage from './Pages/AddNewFactPage';
import QuizPage from './Pages/QuizPage';
import HumorPage from './Pages/HumorPage';
import AvatarCreationPage from './Pages/AvatarCreationPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header> 
          <Routes>
            <Route path='/' exact element={<HomePage/>}/>
            <Route path='/FactPage' exact element={<FactPage/>} />
            <Route path='/ImagePage' exact element={<ImagePage/>} />
            <Route path='/AddNewFactPage' exact element={<AddNewFactPage/>} />
            <Route path='/QuizPage' exact element={<QuizPage/>} />
            <Route path='/HumorPage' exact element={<HumorPage/>} />
            <Route path='/AvatarCreationPage' exact element={<AvatarCreationPage/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
