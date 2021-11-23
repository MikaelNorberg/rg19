import "./App.css";
import { StatusProvider } from "./StatusContext";
import "./FontAwesome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AlertList from "./Components/AlertList";
import Dashboard from "./Components/Dashboard";
import Node from "./Components/Node";
import logo from "./logo.png";

function App() {
  return (
    <div className="container">
      <Router>
        <StatusProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/alertlist" element={<AlertList />} />
            <Route path="/node" element={<Node />} />
          </Routes>
          <img className="logo" src={logo} alt="Rg19 logo" />
        </StatusProvider>
      </Router>
    </div>
  );
}
export default App;
