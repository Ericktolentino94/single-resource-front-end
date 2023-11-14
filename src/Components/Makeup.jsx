import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Makeup.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const API = import.meta.env.VITE_API_URL;

const Makeup = ({ makeup, index }) => {
  let navigate = useNavigate();

  const handleDelete = () => {
    const httpOptions = { method: 'DELETE' };

    fetch(`${API}/makeups/${index}`, httpOptions)
      .then((res) => {
        console.log(res);
        alert('The makeup was deleted.');

        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="makeup-container card">
      <div className="card-body">
        <Link to={`/makeups/${index}`} className="makeup-link card-title">
          <img src={makeup.image} height="200px" alt={makeup.name} className="makeup-image card-img-top" />
        </Link>
        <p>{makeup.name}</p>
        <p className="card-text">Category: {makeup.category}</p>
        <p className="card-text">Cost: ${makeup.cost}</p>
        <p className="card-text"> <a href={makeup.link} target="_blank" rel="noopener noreferrer">View Product</a>
        </p>
        <Link to={`/makeups/${makeup.id}/edit`} className="edit-link btn btn-primary">
          ✏️ Edit
        </Link>
        <button className="btn btn-danger" onClick={handleDelete}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default Makeup;
