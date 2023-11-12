import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function NewMakeupForm() {
  const [makeup, setMakeup] = useState({
    name: "",
    image: "",
    link: "",
    category: "",
    cost: 0,
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setMakeup({ ...makeup, [event.target.id]: event.target.value });
  };

  const addMakeup = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(makeup),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${API}/makeups`, httpOptions)
      .then((res) => res.json())
      .then((data) => {
        alert(`${makeup.name} added`);
        navigate("/makeups");
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMakeup();
  };

  return (
    <div className="container">
      <div className="New">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={makeup.name}
              type="text"
              onChange={handleTextChange}
              className="form-control"
              placeholder="Name of Makeup"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              id="image"
              value={makeup.image}
              type="text"
              onChange={handleTextChange}
              className="form-control"
              placeholder="Image URL"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="link">Link</label>
            <input
              id="link"
              value={makeup.link}
              type="text"
              onChange={handleTextChange}
              className="form-control"
              placeholder="Product link"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              id="category"
              value={makeup.category}
              type="text"
              onChange={handleTextChange}
              className="form-control"
              placeholder="Category"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cost">Cost</label>
            <input
              id="cost"
              value={makeup.cost}
              type="number"
              onChange={handleTextChange}
              className="form-control"
              placeholder="Cost"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Makeup
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewMakeupForm;
