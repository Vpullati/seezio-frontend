import React, { useState } from 'react';
import axios from 'axios';

const NewAssessment = () => {
    const [assessmentTitle, setAssessmentTitle] = useState('');
    const [assessmentDescription, setAssessmentDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert('Button clicked!'); // Check if the function is called
        try {
            const response = await axios.post('http://localhost:5000/assessments', {
                title: assessmentTitle,
                description: assessmentDescription,
            });
            console.log('Response from server:', response.data);
        } catch (error) {
            console.error('Error submitting assessment:', error);
            alert('Submission failed. Check console for details.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Assessment Title:</label>
                <input
                    type="text"
                    value={assessmentTitle}
                    onChange={(e) => setAssessmentTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Assessment Description:</label>
                <input
                    type="text"
                    value={assessmentDescription}
                    onChange={(e) => setAssessmentDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Assessment</button>
        </form>
    );
};

export default NewAssessment;
