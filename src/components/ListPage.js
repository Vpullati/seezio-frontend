import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListPage = () => {
    const [assessments, setAssessments] = useState([]);

    useEffect(() => {
        // Fetch assessments from the backend
        axios.get('http://localhost:5000/api/assessments')
            .then(response => {
                setAssessments(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the assessments!", error);
            });
    }, []);

    return (
        <div>
            <h1>List of Assessments</h1>
            <ul>
                {assessments.map(assessment => (
                    <li key={assessment.id}>
                        <h2>{assessment.title}</h2>
                        <p>{assessment.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListPage;
