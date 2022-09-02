import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../globalContext";
const EventDetails = () => {
  const [eventInformation, setEventInformation] = useState(false);
  const { currentUser } = useContext(GlobalContext);
  let { eventId } = useParams();

  const fetchEventDetails = async () => {
    const fetchedInfo = await fetch(`/events/${eventId}`);
    const eventInformation = await fetchedInfo.json();
    setEventInformation(eventInformation.data);
  };

  const joinEvent = async () => {
    if (currentUser) {
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, []);

  if (eventInformation) {
    console.log("eventInformation", eventInformation);
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
    } = eventInformation;

    return (
      <EventDetailsWrapper>
        <h1>{title}</h1>
        <h4>Host: {trainer}</h4>
        <p>When? {date}</p>

        <div>
          <span>{adress} </span>
          <span>{city} </span> <span>{province} </span>
          <span>{country} </span>{" "}
        </div>

        <p>Price: ${price}</p>
        <p>{description}</p>
        <div>
          Participants
          {userIdsJoined?.map((id) => (
            <p>{id}</p>
          ))}
        </div>
        <p>{}</p>
        <p>{}</p>
      </EventDetailsWrapper>
    );
  }
};
export default EventDetails;

const EventDetailsWrapper = styled.div`
  border: solid 1px blue;
`;
