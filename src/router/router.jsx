import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/views/Valo/Home/Home";
import Proyectos from "@/views/Valo/Proyectos/Proyectos";
import Contacto from "@/views/Valo/Contacto/Contacto";
import Nosotros from "@/views/Valo/Nosotros/Nosotros";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}
