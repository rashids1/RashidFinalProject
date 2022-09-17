import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon, Icon } from "leaflet";
import "./css/map.css";
import { NavLink } from "react-router-dom";
const HomeMap = () => {
  const [allEvents, setAllEvents] = useState();
  // const [activeEvent, setActiveEvent] = useState();

  useEffect(() => {
    fetch("/allEvents")
      .then((response) => response.json())
      .then((data) => setAllEvents(data.data));
  }, []);

  if (allEvents) {
    return (
      <MapContainer
        center={[45.50169, -73.567253]}
        zoom={11}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {allEvents.map((thisEvent, index) => {
          console.log(thisEvent);
          return (
            <Marker
              key={`idOfEvent${thisEvent._id}`}
              position={thisEvent.coordinates}
            >
              <Popup className="popupHome">
                <h1>{thisEvent.title}</h1>
                <p>{thisEvent.date}</p>
                <h5>
                  {thisEvent.price == 0 ? "Free" : `Price:\$${thisEvent.price}`}
                </h5>
                <h5>Category: {thisEvent.category}</h5>
                <NavLink to={`/events/${thisEvent._id}`}>
                  <h4>See Details</h4>
                </NavLink>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    );
  }
};
export default HomeMap;
