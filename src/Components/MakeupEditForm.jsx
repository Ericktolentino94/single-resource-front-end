import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const API = "http://localhost:8888";

function MakeupEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [makeup, setMakeup] = useState({
    name: "",
    image: "",
    link: "",
    category: "",
    cost: 0,
  });

  const handleTextChange = (event) => {
    setMakeup({ ...makeup, [event.target.id]: event.target.value });
  };

  const updateMakeup = () => {
    fetch(`${API}/makeups/${id}`, {
      method: 'PUT',
      body: JSON.stringify(makeup),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((updatedMakeup) => {
        navigate(`/makeups/${id}`);
      })
      .catch((error) => console.error("catch", error));
  };

  useEffect(() => {
    fetch(`${API}/makeups/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setMakeup(responseJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMakeup();
  };

  return (
    <div className="Edit container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
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
          <label htmlFor="image" className="form-label">Image URL:</label>
          <input
            id="image"
            type="text"
            value={makeup.image}
            className="form-control"
            placeholder="Image URL"
            onChange={handleTextChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="link" className="form-label">Link:</label>
          <input
            id="link"
            type="text"
            value={makeup.link}
            className="form-control"
            placeholder="Product link"
            onChange={handleTextChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category:</label>
          <input
            id="category"
            type="text"
            value={makeup.category}
            className="form-control"
            placeholder="Category"
            onChange={handleTextChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cost" className="form-label">Cost:</label>
          <input
            id="cost"
            type="number"
            value={makeup.cost}
            className="form-control"
            placeholder="Cost"
            onChange={handleTextChange}
          />
        </div>

        <input type="submit" className="btn btn-primary" />
      </form>
      <Link to={`/makeups/${id}`}>
        <button className="btn btn-secondary mt-2">Return to Makeup Show Page</button>
      </Link>
    </div>
  );
}

export default MakeupEditForm;
