import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditAssessment = ({ assessments, setAssessments }) => {
    const { id } = useParams(); // Get the assessment ID from the URL
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        // Find the assessment to edit
        const assessmentToEdit = assessments.find(assessment => assessment.id === parseInt(id));
        if (assessmentToEdit) {
            setTitle(assessmentToEdit.title);
            setDescription(assessmentToEdit.description);
            setFile(assessmentToEdit.file);
        }
    }, [id, assessments]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedAssessment = {
            id: parseInt(id),
            title,
            description,
            file,
        };

        // Update the assessments state
        setAssessments((prev) =>
            prev.map(assessment => (assessment.id === parseInt(id) ? updatedAssessment : assessment))
        );

        // Navigate back to the list page
        navigate('/list');
    };

    return (
        <div>
            <h2>Edit Assessment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Upload Diagram:</label>
                    <input type="file" onChange={handleFileChange} />
                    <p>{file ? file.name : "No file chosen"}</p>
                </div>
                <button type="submit">Update Assessment</button>
            </form>
        </div>
    );
};

export default EditAssessment;
