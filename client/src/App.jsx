
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Connect from "./pages/Connect";
import Delete from "./pages/Delete";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/connect" element={<Connect />} />
  <Route path="/page-integration/:pid" element={<Delete />} />
</Routes>

      </BrowserRouter>
    </>
  );
}

export default App;