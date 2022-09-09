import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const AllEvents = () => {
  const [allEvents, setAllEvents] = useState();

  useEffect(() => {
    fetch("/allEventsLimitOf3")
      .then((response) => response.json())
      .then((data) => setAllEvents(data.data));
  }, []);

  if (allEvents) {
    return (
      <StyledWrapper>
        <div className="head-Filter-div">
          <h3>All Events</h3>
          <h3>Filter</h3>
        </div>

        {allEvents.map((event, index) => {
          const {
            adress,
            city,
            country,
            date,
            title,
            trainer,
            _id,
            price,
            requiresPayment,
            userIdsJoined,
          } = event;

          return (
            <EventBox
              className="eventBox"
              key={`key=${index + 1}`}
              price={price}
            >
              <NavLink to={`/events/${_id}`}>
                <h1>{title}</h1>
                <p>{date}</p>
                <p>{city}</p>
                <h5>{price == 0 ? "Free" : `Price:\$${price}`}</h5>
                <h2>See Details</h2>
              </NavLink>
            </EventBox>
          );
        })}
      </StyledWrapper>
    );
  }
};
export default AllEvents;

const StyledWrapper = styled.div`
  width: 100%;
  .head-Filter-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const EventBox = styled.div`
  border: 1px solid red;
  width: 100%;
  background-color: ${(props) => (props.price > 0 ? "#ffd6dd" : "#d6d6ff")};
  a {
    text-decoration: none;
    color: inherit;
  }
`;
