import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
    <article>
      <h3>{/* Add your makeup rating logic here */}</h3>
      <h5>
        <span>
          <a href={makeup.link}>{makeup.name}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp; {makeup.link}
      </h5>
      <h6>{makeup.category}</h6>
      {/* Add more details about the makeup */}
      <div className="showNavigation">
        <div>
          <Link to={`/makeups`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/makeups/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
}

export default MakeupDetails;
