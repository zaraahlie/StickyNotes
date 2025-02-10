import logo from './logo.svg';
import React from "react";
import './App.css';
import AddProject from "./components/addproject.js";
import ProjectList from './components/projectlist.js';

function App() {
  return (
    <div className="App">
      <h1>Add Project</h1>
      <AddProject />
      <h1>Projects</h1>
      <ProjectList/>
    </div>
  );
}

export default App;
