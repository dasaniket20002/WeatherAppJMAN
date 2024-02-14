import React, { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGl, { Marker } from "react-map-gl";
// import Room from "@mui/icons-material/Room";

interface ViewPort {
  latitude: number;
  longitude: number;
  zoom: number;
}

const Maps = (props: { longitude: number; latitude: number }) => {
  const [viewPort, setViewPort] = useState<ViewPort>({
    latitude: props.latitude,
    longitude: props.longitude,
    zoom: 11,
  });

  useEffect(() => {
    setViewPort({
      latitude: props.latitude,
      longitude: props.longitude,
      zoom: 11,
    });
  }, [props.latitude, props.longitude]);

  const markerLatitude = props.latitude || 0;
  const markerLongitude = props.longitude || 0;

  return (
    <ReactMapGl
      {...viewPort}
      mapboxAccessToken="pk.eyJ1IjoiZzMtZHYiLCJhIjoiY2xzanl5dHpoMnQ0MTJscmt1YmV2bWdzaCJ9.WQGyln4iFweQATg6tpn5Hg"
      style={{ width: "100%", height: "100vh", transitionDuration: "200" }}
      mapStyle="mapbox://styles/g3-dv/clsk02c3n01y601pe174pgr9p"
    >
      {markerLatitude !== 0 && markerLongitude !== 0 && (
        <Marker latitude={markerLatitude} longitude={markerLongitude} />
      )}
    </ReactMapGl>
  );
};

export default Maps;
