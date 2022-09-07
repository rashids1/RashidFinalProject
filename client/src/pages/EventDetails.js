import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../globalContext";
const EventDetails = () => {
  const [eventInformation, setEventInformation] = useState(false);
  const [visiblePtag, setVisiblePtag] = useState(false);
  const [postResponse, setPostResponse] = useState(false);
  const { currentUser, setCurrentUser } = useContext(GlobalContext);
  let { eventId } = useParams();

  const fetchEventDetails = async () => {
    const fetchedInfo = await fetch(`/events/${eventId}`);
    const eventInformation = await fetchedInfo.json();
    setEventInformation(eventInformation.data);
  };

  const fetchUpdatedUserInfoAfterJoiningEvent = async (userId) => {
    const fetchedInfo = await fetch(`/users/${userId}`);
    const userInformation = await fetchedInfo.json();
    setCurrentUser(userInformation.data);
    fetchEventDetails();
  };

  const hidePtagOnClick = () => {
    setVisiblePtag(true);

    const timer = setTimeout(() => {
      setVisiblePtag(false);
    }, 3500);
    return () => clearTimeout(timer);
  };
  const hidePtag2OnClick = (response) => {
    setPostResponse(response.Message);

    const timer2 = setTimeout(() => {
      setPostResponse(false);
    }, 3500);
    return () => clearTimeout(timer2);
  };

  const joinEvent = async (event) => {
    if (currentUser) {
      event.preventDefault();
      let relevantInformation = {
        eventId: eventId,
        userId: currentUser._id,
      };
      const addUserIdToEvent = await fetch("/joinEvent", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(relevantInformation),
      });
      const response = await addUserIdToEvent.json();
      hidePtag2OnClick(response);
      fetchUpdatedUserInfoAfterJoiningEvent(relevantInformation.userId);
    } else if (!currentUser) {
      hidePtagOnClick();
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, []);

  if (eventInformation) {
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

        <p>Price: {price > 0 ? `$${price}` : "Free"}</p>
        <p>{description}</p>
        <div>
          Participants
          {userIdsJoined?.map((id, index) => (
            <p key={`key ${index + 1}`}>{id}</p>
          ))}
        </div>
        <p>{}</p>
        <p>{}</p>
        <HiddenPTag visible={visiblePtag}>You must sign in first!</HiddenPTag>
        <HiddenPtag2 postResponse={postResponse} existsorNot={postResponse}>
          {postResponse}
        </HiddenPtag2>
        <button onClick={(event) => joinEvent(event)}>Join this Event!</button>
      </EventDetailsWrapper>
    );
  }
};
export default EventDetails;

const EventDetailsWrapper = styled.div`
  border: solid 1px blue;
`;
const HiddenPTag = styled.p`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  color: red;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const HiddenPtag2 = styled.p`
  display: ${(props) => (props.postResponse ? "block" : "none")};
  color: ${(props) =>
    props.existsorNot === "User Already Joined" ? "red" : "green"};
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
