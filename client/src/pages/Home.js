import styled from "styled-components";
import { device } from "../components/screenSizes";
import tempBanner from "../pictures/outdoor.jpeg";
import banner2 from "../pictures/mat-exercise-outsite.jpeg";
import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import map from "../pictures/map.png";
import { useAuth0 } from "@auth0/auth0-react";
import { GlobalContext } from "../globalContext";
import HomeMap from "../components/HomeMap";

const Home = () => {
  const [allEvents, setAllEvents] = useState();

  useEffect(() => {
    fetch("/allEventsLimitOf3")
      .then((response) => response.json())
      .then((data) => setAllEvents(data.data));
  }, []);

  return (
    <HomeWrapper>
      <div className="Banner"></div>
      <div className="eventsWrapper">
        <h3>New Events</h3>
        {allEvents ? (
          <div className="allEvents">
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
              } = event;

              return (
                <EventBox
                  className="eventBox"
                  key={`key=${index}`}
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
          </div>
        ) : (
          <h1>Loading</h1>
        )}
        <NavLink to="/events/allEvents">View All Upcoming Events</NavLink>
      </div>

      <h2>Events Near You</h2>
      <HomeMap />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .eventsWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-top: -60px;
    background-color: white;
  }
  .Banner {
    width: 100%;
    height: 250px;
    border: 1px solid blue;
    background-image: url(${banner2});
    background-position: bottom;
    background-size: cover;
  }
  .allEvents {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
  .eventsMap {
    height: 180px;
    border: 1px solid red;
  }
`;

const EventBox = styled.div`
  border: 1px solid grey;
  width: 100%;
  /* background-color: ${(props) =>
    props.price > 0 ? "#ffd6dd" : "#d6d6ff"}; */
  background-color: var(--4th-color);
  margin: 10px 0 10px 0;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
