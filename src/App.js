import { BrowserRouter, Route, Routes } from "react-router-dom";
 
import Start from "./Components/Pages/Start";
import Home from "./Components/Pages/Home";
import Contact from "./Pages/Contact";
import Plan from "./Pages/Plan";
import Calculater from "./Pages/Calculater";
import Resources from "./Pages/Pages/Resources";
import Cavg from "./Pages/Cavg";
import NewStudent from "./Pages/NewStudent";
import AvgF from "./Pages/AvgF";
import CPP from "./Pages/Pages/Pages/C++";

 
 
export default function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/plans" element={<Plan />}/>
        <Route path="calculate" element={<Calculater />}/>
        <Route path="/المعدل الفصلي" element={<AvgF />}/>
        <Route path="/المعدل التراكمي" element={<Cavg />}/>
        <Route path="/المعدل الفصلي و التراكمي للطالب مستجد" element={<NewStudent />}/>
        <Route path="/resources" element={<Resources />}/>
        <Route path="/resource/0" element={<Home />} />
       <Route path="/resource/1" element={<CPP />} />
      </Routes>
      </BrowserRouter>
       
    
  );
}