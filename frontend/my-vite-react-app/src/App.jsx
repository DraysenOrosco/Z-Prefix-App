import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home.jsx";
import Inventory from "./inventory.jsx";
import Navbar from '../components/Navbar.jsx'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/items')
    .then(response => {
      if(response.status != 200) {
        throw new Error ('unable to fetch resources')
      } else {
        return response.json()
      }
    })
    .then(data => setItems(data))
  }, [])
  
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  )
}

export default App;