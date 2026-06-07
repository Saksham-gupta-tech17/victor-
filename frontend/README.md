# VectorShift AI Pipeline Builder

A professional, high-performance pipeline builder that allows users to design, visualize, and validate AI workflows with real-time Directed Acyclic Graph (DAG) detection.

## Features
- **Cinematic UI:** Custom "Deep Glass" node design with a cohesive dark-mode aesthetic.
- **Dynamic Topology:** Intuitive handle generation based on variable input syntax (e.g., `{{variable}}`).
- **Backend Intelligence:** Robust cycle-detection algorithm (DFS) to validate pipeline integrity before deployment.
- **Node Abstraction:** Highly modular architecture for scalable node creation.
- **Interactive Workspace:** Drag-and-drop node placement with easy deletion and connection management.

## Tech Stack
- **Frontend:** React, React Flow, Zustand, CSS (Glassmorphism)
- **Backend:** Python, FastAPI, Pydantic

## Getting Started

### Prerequisites
- Node.js (v18+)
- Python (v3.10+)

### Backend Setup
1. Navigate to the backend folder: `cd backend`
2. Install dependencies: `pip install fastapi uvicorn`
3. Run the server: `uvicorn main:app --reload`

### Frontend Setup
1. Navigate to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Start the application: `npm start`

## Assessment Checklist
- [x] Node Abstraction (BaseNode component)
- [x] Unified Modern Styling (Dark-themed Glassmorphism)
- [x] Text Node Logic (Dynamic handle generation)
- [x] Backend Integration (Parsing pipeline statistics & DAG validation)