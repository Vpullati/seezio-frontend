// src/App.js
import React, { useState } from 'react';
import NewAssessment from './components/NewAssessment';
import ListPage from './components/ListPage';
import ResultPage from './components/ResultPage';
import './styles.css';

const App = () => {
    const [currentPage, setCurrentPage] = useState('newAssessment');

    const handleAssessmentSubmit = () => {
        setCurrentPage('listPage'); // Change to List Page after submit
    };

    return (
        <div className="app">
            {currentPage === 'newAssessment' && (
                <NewAssessment onSubmit={handleAssessmentSubmit} />
            )}
            {currentPage === 'listPage' && <ListPage />}
            {currentPage === 'resultPage' && <ResultPage />}
        </div>
    );
};

export default App;
