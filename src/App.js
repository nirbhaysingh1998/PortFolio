import Body from './Components/Body';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Learning from './Components/Learning/Learning';
import About from './Components/About';
import Contact from './Components/Contact';

import { Routes, Route, BrowserRouter } from "react-router-dom"



function App() {

  return (
    <div>
      {
        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path="/" element={<Body />} />
            <Route path="/Learning" element={<Learning />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      }


    </div>
  );
}

export default App;
