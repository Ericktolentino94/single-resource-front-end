import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
const API = import.meta.env.VITE_API_URL;

function MakeupDetails() {
  const [makeup, setMakeup] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/makeups/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setMakeup(responseJSON);
      })
      .catch((error) => console.log(error));
  }, [id, API]);

  const handleDelete = () => {
    deleteMakeup();
  };

  const deleteMakeup = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/makeups/${id}`, httpOptions)
      .then(() => navigate(`/makeups`))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>Details</h3>
        </div>
        <div className="card-body">
          <h4 className="card-title"> {makeup.name}</h4>
          <p className="card-text"><img src={makeup.image} height="200px" alt={makeup.name} className="img-fluid" /></p>
          <p className="card-text">Link: <a href={makeup.link} target="_blank" rel="noopener noreferrer">{makeup.link}</a></p>
          <p className="card-text">Category: {makeup.category}</p>
          <p className="card-text">Cost: ${makeup.cost}</p>
        </div>
        <div className="card-footer">
          <Link to="/makeups" className="btn btn-primary">
            Back
          </Link>
          <Link to={`/makeups/${makeup.id}/edit`} className="btn btn-warning ml-2">
            Edit
          </Link>
          <button onClick={handleDelete} className="btn btn-danger ml-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MakeupDetails;
