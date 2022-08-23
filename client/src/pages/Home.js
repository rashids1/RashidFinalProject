import styled from "styled-components";
import { device } from "../components/screenSizes";

const Home = () => {
  return (
    <HomeWrapper>
      <h2>All Upcoming Events</h2>
      <div className="Banner">Banner</div>
      <div className="allEvents">
        <div>box</div>
        <div>box</div>
        <div>box</div>
        <div>box</div>
      </div>
      <button>View All Upcoming Events</button>
      <h2>Events Near You</h2>
      <div className="eventsMap"></div>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .Banner {
    width: 100%;
    height: 300px;
    border: 1px solid blue;
  }
  .allEvents {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    margin: 0;
    div {
      border: 1px solid red;
      height: 30%;
      width: 100%;
    }
  }
  .eventsMap {
    width: 100%;
    height: 500px;
    border: 1px solid red;
  }
`;
