import React, { useState } from 'react';
import { Container, Segment } from "semantic-ui-react";
import { useSpeechSynthesis } from "react-speech-kit";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGl, { Marker } from "react-map-gl";
import Room from "@mui/icons-material/Room";

const api = {
  key: "195887370f9dafce79b410c97c2925f5",
  base: "https://api.openweathermap.org/data/2.5/",
};

interface ViewPort {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface NewPlace {
  lat: number;
  long: number;
}

function Maps() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({
    name: "",
    coord:{
      lon:"",
      lat:""
    },
    main: {
      temp: ""
    },
    weather: [{ main: "", description: "" }]
  });

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setViewPort({
          latitude: result.coord.lat,
          longitude: result.coord.lon,
          zoom: 11,
        });
      });
  };

  const { speak } = useSpeechSynthesis();

  const handleOnClick = () => {
    speak({ text: weather.name });
    speak({ text: weather.main.temp });
    speak({ text: weather.weather[0].description });
  };

  const [newPlace, setNewPlace] = useState<NewPlace | null>(null);
  const [viewPort, setViewPort] = useState<ViewPort>({
    latitude: 28.6448,
    longitude: 77.216,
    zoom: 11,
  });

  function handleClick(e: { lngLat: [number, number] }) {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  }


  const markerLatitude = parseFloat(weather.coord?.lat || '0');
  const markerLongitude = parseFloat(weather.coord?.lon || '0');
  
  return (
    <div style={{ width: "100vw", height: "100vh", zIndex: 999 }}>

      <ReactMapGl
        {...viewPort}
        mapboxAccessToken="pk.eyJ1IjoiZzMtZHYiLCJhIjoiY2xzanl5dHpoMnQ0MTJscmt1YmV2bWdzaCJ9.WQGyln4iFweQATg6tpn5Hg"
        style={{ width: "500px", height: "500px", transitionDuration: "200" }}
        mapStyle="mapbox://styles/g3-dv/clsk02c3n01y601pe174pgr9p"
      // onDblClick={handleClick}
      >
        
        {markerLatitude !== 0 && markerLongitude !== 0 && (
          <Marker latitude={markerLatitude} longitude={markerLongitude}>
            <Room style={{ fontSize: 50, color: 'red', left: '-200px', top: '-50px' }} />
            {/* <div style={{ color: 'red', fontSize: '24px' }}>📍</div> */}
          </Marker>
        )}
      </ReactMapGl>


      <div>
        {/* {search bar} */}
        <input type="text" placeholder='search location...'
          onChange={(e) => setSearch(e.target.value)} />

        <button onClick={searchPressed}> search</button>
      </div>
      {typeof weather.main !== "undefined" ? (
        <div>
          {/* Location */}
          <p>{weather.name}</p>

          {/* Temperature */}
          <p>{weather.main.temp} °C</p>

          {/* Weather condition */}
          <p>{weather.weather[0].main}</p>
          <p>({weather.weather[0].description})</p>
        </div>
      ) : (
        ""
      )}

      <Container>
        <Segment>
          <button className="buttonStyle" onClick={() => handleOnClick()}>
            Listen Voiceover
          </button>
        </Segment>
      </Container>
    </div>
  );
}

export default Maps;
