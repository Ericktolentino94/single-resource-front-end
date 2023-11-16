import newInventoryImage from "../assets/new-inventory.jpeg";
import trackInventoryImage from "../assets/track-inventory.jpeg";
import manageInventoryImage from "../assets/manage-inventory.avif";


import "./Home.css";



function Home() {
  return (
    <div>
      <h1>
        Boost Your Make Up Collection And Your Bottom Line With Organized
        Inventory Management
      </h1>
      <div className="home-inventory">
     
        <section>
          <h2>Add New Inventory</h2>
          <img
            className="new-inventory"
            src={newInventoryImage}
            alt="cartoon checks new inventory"
          />
        </section>
        <section>
          <h2>Track Your Inventory</h2>
          <img
            className="track-inventory"
            src={trackInventoryImage}
            alt="cartoon checks boxes for inventory"
          />
        </section>
        <section>
          <h2>Manage Your Inventory</h2>
          <img
            className="manage-inventory"
            src={manageInventoryImage}
            alt="cartoon warehouse worker checks inventory"
          />
        </section>
      </div>
    </div>
  );
}
export default Home;
