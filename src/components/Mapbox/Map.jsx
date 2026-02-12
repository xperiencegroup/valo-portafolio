import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import Marker from "./Marker";
import LOCATIONS from "@/data/Valo/geojsonData.json";
import { FILTERS_ID } from "@/const/FiltersId";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const ACCESS_TOKEN = import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN;
const INITIAL_POSITION = {
  center: [-100.32693, 25.68785],
  zoom: 10.9,
  pitch: 0,
  bearing: 0,
};

const CATEGORIES = {
  [FILTERS_ID.INDUSTRIAL]: ["valo-santa-catarina", "valo-apodaca", "torreluna"],
  [FILTERS_ID.RESIDENCIAL_VERTICAL]: ["montevo"],
  [FILTERS_ID.RESIDENCIAL_HORIZONTAL]: [],
  [FILTERS_ID.USOS_MIXTOS]: [],
};

export default function Map() {
  const mapContainerRef = useRef();
  const [map, setMap] = useState(null);
  const [locationsData] = useState(LOCATIONS);
  const { mapFilter } = useContext(AppContext);
  const filteredLocations = mapFilter ? CATEGORIES[mapFilter] : null;

  const [_, setActiveFeature] = useState();

  // For Debugging
  const [center, setCenter] = useState(INITIAL_POSITION.center);
  const [zoom, setZoom] = useState(INITIAL_POSITION.zoom);

  useEffect(() => {
    if (!ACCESS_TOKEN) return;

    mapboxgl.accessToken = ACCESS_TOKEN;

    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: INITIAL_POSITION.center,
      zoom: INITIAL_POSITION.zoom,
      minZoom: INITIAL_POSITION.zoom,
    });

    mapInstance.on("load", () => {
      setMap(mapInstance);
    });

    // For Debugging
    mapInstance.on("move", () => {
      // get the current center coordinates and zoom level from the map
      const mapCenter = mapInstance.getCenter();
      const mapZoom = mapInstance.getZoom();

      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    });

    return () => {
      mapInstance.remove();
      setMap(null);
    };
  }, []);

  const handleMarkerClick = (feature) => {
    setActiveFeature(feature.properties.id);

    const { zoom, pitch, bearing, duration } = feature.properties.camera;
    map?.flyTo({
      center: feature.geometry.coordinates,
      zoom,
      pitch,
      bearing,
      duration,
    });
  };

  const goToInitialPosition = () => {
    map?.flyTo({
      center: INITIAL_POSITION.center,
      zoom: INITIAL_POSITION.zoom,
      pitch: INITIAL_POSITION.pitch,
      bearing: INITIAL_POSITION.bearing,
    });
  };

  return (
    <>
      {/* Debugging */}
      <div className="absolute bottom-0 right-0 w-fit flex gap-4 p-4 z-50">
        <button
          className="w-fit rounded-md p-3 bg-blue-600 hover:cursor-pointer"
          onClick={goToInitialPosition}
        >
          Posición Inicial
        </button>
        <p className="bg-gray-800/80 text-white font-semibold text-xl p-4 rounded-2xl">
          Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} |
          Zoom: {zoom.toFixed(2)}
        </p>
      </div>

      <div
        id="map-container"
        ref={mapContainerRef}
        className="relative w-full h-full"
      >
        {map &&
          locationsData.features?.map((feature) => {
            // if filteredLocations = null (cause map filter is null) => show all markers
            const isVisible = filteredLocations
              ? filteredLocations.includes(feature.properties.landmarkId)
              : true;

            if (isVisible)
              return (
                <Marker
                  key={feature.properties.id}
                  map={map}
                  feature={feature}
                  handleMarkerClick={handleMarkerClick}
                />
              );
          })}
      </div>
    </>
  );
}
