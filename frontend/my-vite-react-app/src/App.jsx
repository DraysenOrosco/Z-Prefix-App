import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home.jsx";
import Inventory from "./inventory.jsx";
import Navbar from '../components/Navbar.jsx'
import Login from "../components/Login.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [userId, setUserId] = useState(null)
  
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
        <Route path="/login" element={<Login onLogin={setUserId} /> } />
        <Route path="/inventory" element={<Inventory userId={userId} />} />
      </Routes>
    </Router>
  )
}

export default App;