import { GlobalContext } from "../globalContext";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventsCreatedByUser from "./EventsCreatedByUser";
import EventsUserJoined from "./EventsUserJoined";
import styled from "styled-components";

const UserProfile = () => {
  const [userInformation, setUserInformation] = useState(false);
  const { currentUser } = useContext(GlobalContext);
  let { userId } = useParams();

  const fetchUserInfo = async () => {
    const fetchedInfo = await fetch(`/users/${userId}`);
    const userInformation = await fetchedInfo.json();
    setUserInformation(userInformation.data);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  if (userInformation._id === currentUser._id) {
    const { email, eventsJoined, _id, name } = userInformation;

    return (
      <>
        {userInformation && (
          <>
            <p>profile picutre</p>
            <h4>Your Profile Dashboard</h4>

            <EventsUserJoined userId={userId} eventsJoined={eventsJoined} />
            <EventsCreatedByUser />
          </>
        )}
      </>
    );
  } else if (userInformation) {
    const { email, eventsJoined, _id, name } = userInformation;

    return (
      <>
        {userInformation && (
          <>
            <p>profile picutre</p>
            <h4>{name}'s, Profile</h4>

            <EventsUserJoined userId={userId} eventsJoined={eventsJoined} />
            <EventsCreatedByUser />
          </>
        )}
      </>
    );
  }
};
export default UserProfile;

const AccountInformation = styled.div`
  border: 1px solid blue;
`;
