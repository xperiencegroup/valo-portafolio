import masterplanBg from "@/assets/images/proyectos/masterplan.jpg";
import { MapaMexico } from "@/assets/images/proyectos/MapaMexico";
import BackButton from "@/components/Navigation/BackButton";

const ACTIVE_STATES = ["nuevo-leon", "guanajuato"];

export default function Proyectos() {
  return (
    <div className="h-dvh w-dvw">
      {/* Background image */}
      <img
        src={masterplanBg}
        alt="Imagen del masterplan de fondo"
        className="absolute z-0 inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute z-0 inset-0 w-full h-full bg-[#12274C]/85 backdrop-blur-md" />

      {/* Content */}
      <div className="relative w-full h-full flex justify-center items-center">
        <MapaMexico ACTIVE_STATES={ACTIVE_STATES} />
      </div>

      {/* Return button */}
      <div className="fixed bottom-0 p-5 z-30">
        <BackButton to="/" />
      </div>
    </div>
  );
}
