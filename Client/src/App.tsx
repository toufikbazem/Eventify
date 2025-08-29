import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registre from "./pages/Registre";
import AuthProtection from "./utils/AuthProtection";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
