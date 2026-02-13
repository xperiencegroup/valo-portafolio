import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { createPortal } from "react-dom";
import MontevoLandmark from "@/assets/icons/proyectos/markers/MontevoLandmark.svg";
import TorrelunaLandmark from "@/assets/icons/proyectos/markers/TorrelunaLandmark.svg";
import ValoParkApodacaLandmark from "@/assets/icons/proyectos/markers/ValoParkApodacaLandmark.svg";
import ValoParkSantaCatarinaLandmark from "@/assets/icons/proyectos/markers/ValoParkSantaCatarinaLandmark.svg";

const LANDMARKS = {
  "valo-santa-catarina": ValoParkSantaCatarinaLandmark,
  "valo-apodaca": ValoParkApodacaLandmark,
  torreluna: TorrelunaLandmark,
  montevo: MontevoLandmark,
};

const Marker = ({
  map,
  feature,
  handleMarkerClick,
  isVisible,
  activeFeature,
}) => {
  const { geometry, properties } = feature;

  const markerRef = useRef(null);
  const popupRef = useRef(null);
  const [container] = useState(() => document.createElement("div"));

  const icon = LANDMARKS[properties.landmarkId];
  const isActive = activeFeature === properties.landmarkId;

  useEffect(() => {
    markerRef.current = new mapboxgl.Marker(container, { anchor: "bottom" })
      .setLngLat([geometry.coordinates[0], geometry.coordinates[1]])
      .addTo(map);

    return () => {
      markerRef.current.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Click fuera del popup para cerrarlo
  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !container.contains(event.target)
      ) {
        handleMarkerClick(null);
      }
    };

    // Agregar el listener al documento
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, handleMarkerClick, container]);

  return createPortal(
    <div className="relative">
      <img
        src={icon}
        alt={properties.name}
        onClick={() => handleMarkerClick(feature)}
        className={`hover:cursor-pointer transition-all hover:scale-110 hover:drop-shadow-2xl hover:brightness-110 origin-bottom
        ${
          isVisible
            ? "opacity-100 scale-100 pointer-events-auto animate-bounce-once"
            : "opacity-0 scale-0 pointer-events-none"
        }
      `}
      />

      {/* Popup */}
      <div
        ref={popupRef}
        className={`absolute flex flex-col w-120 h-fit -bottom-80 -left-45 text-3xl bg-white border-2 border-solid border-white shadow-2xl transition-all duration-300 ${
          isActive && isVisible
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-95"
        }`}
      >
        {/* Image */}
        <div className="flex w-full h-20 bg-linear-to-tl from-valo to-blue-500"></div>

        {/* Description */}
        <div className="flex flex-col gap-3 text-xl px-4 py-4 text-black">
          <p className="opacity-60">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            deleniti quasi iste.
          </p>

          <p className="font-semibold">{properties.landmarkId}</p>

          <button className="py-4 bg-valo text-white font-bold hover:cursor-pointer hover:opacity-90 transition-all">
            Visitar
          </button>
        </div>
      </div>
    </div>,
    container,
  );
};

export default Marker;
