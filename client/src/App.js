import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllUser from "./components/AllUser";
import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import CRUD2 from "./components/CRUD2";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CRUD2 />} />
        <Route path="/all" element={<AllUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
