# seezio-frontend
# Seezo App

This is a full-stack web application for Seezo. The project includes both a frontend built with React and a backend built with Node.js and Express.js.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
4. [Running the Project](#running-the-project)
5. [API Endpoints](#api-endpoints)

## Project Overview
The application includes the following features:
- Creating new assessments
- Listing assessments
- Viewing assessment results

## Technologies Used
- Frontend: React.js, Axios
- Backend: Node.js, Express.js
- Database: (Add if any)
- Other: (Add if any)

## Setup Instructions

### Prerequisites
- Node.js (>= v16.0.0)
- NPM (>= 7.0.0)
- Git

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name/seezo-frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend:
    ```bash
    npm start
    ```

4. Open the app in your browser:
    - Local: [http://localhost:3000](http://localhost:3000)

### Backend Setup

1. Navigate to the backend folder:
    ```bash
    cd ../seezo-backend
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    node server.js
    ```

4. The server should be running on [http://localhost:5001](http://localhost:5001).

## Running the Project
1. Start the frontend and backend servers as described above.
2. Navigate to [http://localhost:3000](http://localhost:3000) to use the app.

## API Endpoints
- **GET** `/api/assessments`: Fetch all assessments
- **POST** `/api/assessments`: Create a new assessment
- **GET** `/api/assessments/:id`: Get details for a specific assessment
