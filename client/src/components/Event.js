import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Event = ({ id }) => {
  const [thisEvent, setThisEvent] = useState(false);

  const fetchEventDetails = async () => {
    const fetched = await fetch(`/event/${id}`);
    const response = await fetched.json();
    setThisEvent(response.data);
  };

  useEffect(() => {
    fetchEventDetails();
  }, []);

  console.log("thisEvent", thisEvent);
  if (thisEvent) {
    const {
      adress,
      city,
      country,
      date,
      dateCreated,
      description,
      price,
      province,
      requiresPayment,
      title,
      trainer,
      userIdsJoined,
      _id,
    } = thisEvent;
    return (
      <EventWrapper>
        <h1>{title}</h1>
        <h4>Host: {trainer}</h4>
        <p>When? {date}</p>

        <div>
          <span>{adress} </span>
          <span>{city} </span> <span>{province} </span>
          <span>{country} </span>{" "}
        </div>

        <p>Price: {price > 0 ? `$${price}` : "Free"}</p>
        <p>{description}</p>
        {/* <div>
          Participants
          {userIdsJoined?.map((id, index) => (
            <p key={`key ${index + 1}`}>{id}</p>
          ))}
        </div> */}
        <NavLink to={`/events/${_id}`}>
          <button>Learn More</button>
        </NavLink>
      </EventWrapper>
    );
  }
};

export default Event;

const EventWrapper = styled.div`
  border: 1px solid black;

  width: 100%;
`;
