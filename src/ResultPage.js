import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ResultPage = () => {
  const { id } = useParams(); // Get the ID from the URL parameters
  const [assessment, setAssessment] = useState(null);

  useEffect(() => {
    const fetchAssessment = () => {
      const storedAssessments = JSON.parse(localStorage.getItem('assessments')) || [];
      const selectedAssessment = storedAssessments[id]; // Get the specific assessment by ID
      setAssessment(selectedAssessment);
    };

    fetchAssessment();
  }, [id]);

  if (!assessment) {
    return <div>Loading...</div>; // Loading state while fetching data
  }

  return (
    <div className="result-page-container">
      <h2>Assessment Details</h2>
      <h3>{assessment.title}</h3>
      <p>{assessment.description}</p>
      {assessment.diagram && (
        <div>
          <h4>Uploaded Diagram:</h4>
          <img src={URL.createObjectURL(assessment.diagram)} alt="Uploaded Diagram" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
      <Link to="/assessments">Back to Assessments</Link>
    </div>
  );
};

export default ResultPage;
