import newInventoryImage from "../assets/new-inventory.jpeg";
import trackInventoryImage from "../assets/track-inventory.jpeg";
import manageInventoryImage from "../assets/manage-inventory.avif";

import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1>
        Boost Your Make Up Collection And Your Bottom Line With Organized
        Inventory Management
      </h1>
      <div>
        <h2>Add New Inventory</h2>
        <img
          className="new-inventory"
          src={newInventoryImage}
          alt="cartoon checks new inventory"
        />
      </div>
      <div>
        <h2>Track Your Inventory</h2>
        <img
          className="track-inventory"
          src={trackInventoryImage}
          alt="cartoon checks boxes for inventory"
        />
      </div>
      <div>
        <h2>Manage Your Inventory</h2>
        <img
          className="manage-inventory"
          src={manageInventoryImage}
          alt="cartoon warehouse worker checks inventory"
        />
      </div>
    </div>
  );
}
export default Home;
