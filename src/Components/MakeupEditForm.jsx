import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

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
      method: "PUT",
      body: JSON.stringify(makeup),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
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
    <div className="Edit">
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
          type="text"
          value={makeup.image}
          placeholder="Image URL"
          onChange={handleTextChange}
        />
        <label htmlFor="link">Link:</label>
        <input
          id="link"
          type="text"
          value={makeup.link}
          placeholder="Product link"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          value={makeup.category}
          placeholder="Category"
          onChange={handleTextChange}
        />
        <label htmlFor="cost">Cost:</label>
        <input
          id="cost"
          type="number"
          value={makeup.cost}
          placeholder="Cost"
          onChange={handleTextChange}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/makeups/${id}`}>
        <button>Return to Make up Show page</button>
      </Link>
    </div>
  );
}

export default MakeupEditForm;
