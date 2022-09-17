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
        <h4>
          <b>Host:</b> {trainer}
        </h4>
        <p>
          <b>When?:</b> {date}
        </p>

        <div>
          <span>
            <b>Adress:</b> {adress}{" "}
          </span>
          <span>{city} </span> <span>{province} </span>
          <span>{country} </span>{" "}
        </div>

        <p>
          <b>Price:</b> {price > 0 ? `$${price}` : "Free"}
        </p>
        <p>
          <b>Description:</b> {description}
        </p>
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
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  width: 100%;
`;
