import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import ComicsPage from './Pages/ComicsPage';

function App() {
  return (
    <>
      <Navbar />
      <main className="main-section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Comics" element={<ComicsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
