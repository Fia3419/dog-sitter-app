import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DogSitters from './pages/DogSitters';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sitters" element={<DogSitters />} />
            </Routes>
        </Router>
    );
}

export default App;
