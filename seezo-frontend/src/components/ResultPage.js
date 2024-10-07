import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResultPage = () => {
    const [assessments, setAssessments] = useState([]);
    const [newAssessment, setNewAssessment] = useState({ title: '', description: '' });

    const fetchAssessments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/assessments');
            setAssessments(response.data);
        } catch (error) {
            console.error('Error fetching assessments:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/assessments', newAssessment);
            console.log('New assessment created:', response.data);
            setNewAssessment({ title: '', description: '' }); // Reset form
            fetchAssessments(); // Refresh assessments list
        } catch (error) {
            console.error('Error creating assessment:', error);
            alert('Submission failed! Check console for details.'); // Alert for user feedback
        }
    };

    useEffect(() => {
        fetchAssessments();
    }, []);

    return (
        <div>
            <h2>Create Assessment</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Assessment Title" 
                    value={newAssessment.title} 
                    onChange={(e) => setNewAssessment({ ...newAssessment, title: e.target.value })} 
                />
                <textarea 
                    placeholder="Assessment Description" 
                    value={newAssessment.description} 
                    onChange={(e) => setNewAssessment({ ...newAssessment, description: e.target.value })} 
                />
                <button type="submit">Create Assessment</button>
            </form>

            <h2>List of Assessments</h2>
            <ul>
                {assessments.map((assessment) => (
                    <li key={assessment.id}>{assessment.title}: {assessment.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResultPage;
