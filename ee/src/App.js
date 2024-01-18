import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import OurTeam from "./pages/OurTeam";
import OurVision from "./pages/OurVision";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter> 
         <Header />
         <Routes>
           <Route path="/ourteam" element={<OurTeam/>} />
           <Route path="/ourvision" element={<OurVision />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
      </BrowserRouter>    
    </div>
    
  );
}

export default App;
