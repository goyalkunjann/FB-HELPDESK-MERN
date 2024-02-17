
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Connect from "./pages/Connect";
import Delete from "./pages/Delete";
import Agent from "./pages/Agent";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/connect" element={<Connect />} />
  <Route path="/page-integration/:pid" element={<Delete />} />
  <Route path="/Agent" element={<Agent />} />
</Routes>

      </BrowserRouter>
    </>
  );
}

export default App;