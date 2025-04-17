import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router basename="/elmontag1">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
