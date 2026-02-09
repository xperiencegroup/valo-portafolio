import MapaMonterrey from "@/assets/images/proyectos/MapaMonterrey";
import { MapFilterButtons } from "@/components/Buttons/MapFilterButtons";
import BackButton from "@/components/Navigation/BackButton";

export default function NuevoLeon() {
  return (
    <div className="w-dvw h-dvh">
      {/* Filter Buttons */}
      <MapFilterButtons />

      {/* Map and Markers */}
      <div className="absolute z-0 inset-0">
        <MapaMonterrey />
      </div>

      {/* Return button */}
      <div className="fixed bottom-0 p-5 z-30">
        <BackButton to="/proyectos" />
      </div>
    </div>
  );
}
