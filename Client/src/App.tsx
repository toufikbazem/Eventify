import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registre from "./pages/Registre";
import AuthProtection from "./utils/AuthProtection";
import Dashboard from "./pages/Dashboard";
import DashEvent from "./components/DashEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <AuthProtection>
              <Login />
            </AuthProtection>
          }
        />
        <Route
          path="/registre"
          element={
            <AuthProtection>
              <Registre />
            </AuthProtection>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashEvent" element={<DashEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
