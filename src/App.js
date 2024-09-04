import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import Sports from './components/Sports';
import Live from './components/Live';
import Settings from './components/Settings';
import languages from './languages';
import './App.css'

function App() {
    const [language, setLanguage] = useState('english');
    
    return (
        <Router>
            <div className='App'>
                <nav className="navbar">
                    <ul className='navbar-nav'>
                        <li className="nav-item"><Link to="/home" className="nav-link">{languages[language].home}</Link></li>
                        <li className="nav-item"><Link to="/Movies" className="nav-link">{languages[language].movies}</Link></li>
                        <li className="nav-item"><Link to="/TvShows" className="nav-link">{languages[language].tvShows}</Link></li>
                        <li className="nav-item"><Link to="/Sports" className="nav-link">{languages[language].sports}</Link></li>
                        <li className="nav-item"><Link to="/Live" className="nav-link">{languages[language].live}</Link></li>
                        <li className="nav-item"><Link to="/settings" className="nav-link1">{languages[language].settings}</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tvShows" element={<TvShows />} />
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/live" element={<Live />} />
                    
                    <Route path="/settings" element={<Settings setLanguage={setLanguage} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
