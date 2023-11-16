import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const API = import.meta.env.VITE_API_URL;

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
    <div className="New container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            id="name"
            value={makeup.name}
            type="text"
            className="form-control"
            onChange={handleTextChange}
            placeholder="Name of Makeup"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL:
          </label>
          <input
            id="image"
            value={makeup.image}
            type="text"
            className="form-control"
            onChange={handleTextChange}
            placeholder="Image URL"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="link" className="form-label">
            Link:
          </label>
          <input
            id="link"
            value={makeup.link}
            type="text"
            className="form-control"
            onChange={handleTextChange}
            placeholder="Product link"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <input
            id="category"
            value={makeup.category}
            type="text"
            className="form-control"
            onChange={handleTextChange}
            placeholder="Category"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cost" className="form-label">
            Cost:
          </label>
          <input
            id="cost"
            value={makeup.cost}
            type="number"
            className="form-control"
            onChange={handleTextChange}
            placeholder="Cost"
            required
          />
        </div>

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default NewMakeupForm;
