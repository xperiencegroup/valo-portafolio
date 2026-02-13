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

const Marker = ({ map, feature, handleMarkerClick, isVisible }) => {
  const { geometry, properties } = feature;

  const markerRef = useRef(null);
  const [container] = useState(() => document.createElement("div"));

  const icon = LANDMARKS[properties.landmarkId];

  useEffect(() => {
    markerRef.current = new mapboxgl.Marker(container, { anchor: "bottom" })
      .setLngLat([geometry.coordinates[0], geometry.coordinates[1]])
      .addTo(map);

    return () => {
      markerRef.current.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
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
    />,
    container,
  );
};

export default Marker;
