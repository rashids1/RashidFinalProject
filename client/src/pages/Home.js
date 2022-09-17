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
        <h3 className="newEvents">New Events</h3>

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
                description,
              } = event;

              return (
                <EventBox
                  className="eventBox"
                  key={`key=${index}`}
                  price={price}
                >
                  <div className="textBox">
                    <NavLink to={`/events/${_id}`}>
                      <h3 style={{ width: "200px" }}>{title}</h3>
                      <p>{date}</p>
                      <p>{description}</p>
                      <p>{city}</p>
                      <h3 className="prices">
                        {price == 0 ? "Free" : `Price:\ $${price}`}
                      </h3>

                      <NavLink to={`/events/${_id}`}>
                        <button>Learn More</button>
                      </NavLink>
                    </NavLink>
                  </div>
                </EventBox>
              );
            })}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
        <NavLink to="/events/allEvents" style={{ color: "blue" }}>
          View All Upcoming Events
        </NavLink>
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
  hr {
    height: 1px;
    width: 100%;
    background-color: #f7f7f7;
    opacity: 0.25;
  }
  .newEvents {
    margin: 10px 0 0 0;
  }

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
  .prices {
    margin-bottom: 15px;
  }
`;

const EventBox = styled.div`
  border-bottom: 5px solid #eaeaea;
  width: 100%;
  background-color: white;
  margin-bottom: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .textBox {
    margin-left: 5px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h3 {
    margin-bottom: 5px;
  }
`;
