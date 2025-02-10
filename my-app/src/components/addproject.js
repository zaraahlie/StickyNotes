import { useState } from "react";
import axios from "axios";

const AddProject = () => {
  const [author, setAuthor] = useState("");
  const [title, setBookName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/projects", {
        author,
        title,
        description,
      });
      console.log("Project added:", response.data);
      alert("Project added successfully!");
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Book Name"
        value={title}
        onChange={(e) => setBookName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProject;
