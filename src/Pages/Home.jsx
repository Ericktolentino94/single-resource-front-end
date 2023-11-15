import Makeups from "../Components/Makeups";

function Home() {
  return (
    <div>
      <h1>
        Boost Your Make Up Collection And Your Bottom Line With Organized
        Inventory Management
      </h1>
      <section>
        <h2>Add New Inventory</h2>
        <img
          className="new-inventory"
          src="/single-resource-front-end/src/assets/new-inventory.jpeg"
          alt="cartoon checks new inventory"
        />
      </section>
      <section>
        <h2>Track Your Inventory</h2>
        <img
          className="track-inventory"
          src="/single-resource-front-end/src/assets/track-inventory.jpeg"
          alt="cartoon checks boxes for inventory"
        />
      </section>
      <section>
        <h2>Manage Your Inventory</h2>
        <img
          className="manage-inventory"
          src="/single-resource-front-end/src/assets/manage-inventory.avif"
          alt="cartoon warehouse worker checks inventory"
        />
      </section>
    </div>
  );
}
export default Home;
