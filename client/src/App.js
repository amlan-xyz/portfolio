import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./component/Footer/Footer";
import { Navbar } from "./component/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import "./style.css";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
