import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/views/Valo/Home/Home";
import Proyectos from "@/views/Valo/Proyectos/Proyectos";
import Contacto from "@/views/Valo/Contacto/Contacto";
import Nosotros from "@/views/Valo/Nosotros/Nosotros";
import Conocenos from "@/views/Valo/Nosotros/Conocenos";
import NosotrosLayout from "@/views/Valo/Nosotros/NosotrosLayout";
import EquipoDeTrabajo from "@/views/Valo/Nosotros/EquipoDeTrabajo";
import ProyectosLayout from "@/views/Valo/Proyectos/ProyectosLayout";
import NuevoLeon from "@/views/Valo/Proyectos/Ciudades/NuevoLeon";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<NosotrosLayout />}>
          <Route index element={<Nosotros />} />
          <Route path="conoce-valo-developers" element={<Conocenos />} />
          <Route path="equipo-de-trabajo" element={<EquipoDeTrabajo />} />
        </Route>
        <Route path="/proyectos" element={<ProyectosLayout />}>
          <Route index element={<Proyectos />} />
          <Route path="nuevo-leon" element={<NuevoLeon />} />
        </Route>
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}
