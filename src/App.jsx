import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ImageUploader from './components/ImageUploader';
import ContactForm from './components/ContactForm';
import Servicios from './components/Servicios';



function App() {
  return (
    <Router>
      <nav>
        <Link to="/" style={{ marginRight: "10px" }}>Subir Imagen</Link>
        <Link to="/contacto"style={{ marginRight: "10px" }}>Contacto</Link>
        <Link to="/servicios"style={{ marginRight: "10px" }}>Servicios</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ImageUploader />} />
        <Route path="/contacto" element={<ContactForm />} />
        <Route path='/servicios' element ={<Servicios/>}/>
      </Routes>
    </Router>
  );
}

export default App
