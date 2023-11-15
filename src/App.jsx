import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main className="Main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/makeups" element={<Index />} />
            <Route path="/makeups/new" element={<New />} />
            <Route exact path="/makeups/:id" element={<Show />} />
            <Route path="/makeups/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />}  />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
