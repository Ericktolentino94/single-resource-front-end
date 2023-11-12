import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8888"

function NewMakeupForm() {
  const navigate = useNavigate();
  const [makeup, setMakeup] = useState({
    name: "",
    image: "",
    link: "",
    category: "",
    cost: 0,
  });

  // Add a makeup. Redirect to the index view.
  const addMakeup = () => {
    fetch(`${API}/makeups`, {
      method: "POST",
      body: JSON.stringify(makeup),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert(`${makeup.name} added`);
        navigate(`/makeups`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setMakeup({ ...makeup, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMakeup();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={makeup.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Makeup"
          required
        />
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          value={makeup.image}
          type="text"
          onChange={handleTextChange}
          placeholder="Image URL"
          required
        />
        <label htmlFor="link">Link:</label>
        <input
          id="link"
          value={makeup.link}
          type="text"
          onChange={handleTextChange}
          placeholder="Product link"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          value={makeup.category}
          type="text"
          onChange={handleTextChange}
          placeholder="Category"
          required
        />
        <label htmlFor="cost">Cost:</label>
        <input
          id="cost"
          value={makeup.cost}
          type="number"
          onChange={handleTextChange}
          placeholder="Cost"
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewMakeupForm;
