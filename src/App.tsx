import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DogSitters from './pages/DogSitters';
import Dogs from './components/Dogs';
import AddDog from './components/AddDog';
import React from 'react';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sitters" element={<DogSitters />} />
                <Route path="/dogs" element={<Dogs />} />
                <Route path="/add-dog" element={<AddDog />} />
            </Routes>
        </Router>
    );
}

export default App;