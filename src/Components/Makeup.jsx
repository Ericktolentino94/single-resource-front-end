import React from "react";
import { Link, useNavigate } from "react-router-dom";


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
    <div className="makeup-container">
      <img src={makeup.image} height="200px" alt={makeup.name} className="makeup-image" />
      <Link to={`/makeups/${index}`} className="makeup-link">
          {makeup.name}
        </Link>
      <p>Category: {makeup.category}</p>
      <p>Cost: ${makeup.cost}</p>
      <p>Product Link: <a href={makeup.link} target="_blank" rel="noopener noreferrer">{makeup.link}</a></p>
      <Link to={`/makeups/${makeup.id}/edit`} className="edit-link">
        ✏️ Edit
      </Link>
      {/* Add any additional details or links as needed */}
    </div>
  );
};

export default Makeup;
