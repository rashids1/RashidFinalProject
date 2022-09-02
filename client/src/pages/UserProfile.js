import { GlobalContext } from "../globalContext";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventsCreatedByUser from "./EventsCreatedByUser";
import EventsUserJoined from "./EventsUserJoined";
import styled from "styled-components";

const UserProfile = () => {
  const [userInformation, setUserInformation] = useState(false);
  let { userId } = useParams();

  const fetchUsers = async () => {
    const fetchedInfo = await fetch(`/users/${userId}`);
    const userInformation = await fetchedInfo.json();
    setUserInformation(userInformation);
    console.log("userInformation", userInformation);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { given_name, family_name, email, eventsJoined, _id, name } =
    userInformation?.data;

  return (
    <>
      {userInformation && (
        <>
          {given_name ? (
            <h1>
              Welcome,
              <span>{given_name}!</span>
            </h1>
          ) : (
            <h1>Your Account Dashboard</h1>
          )}

          <EventsUserJoined userId={userId} eventsJoined={eventsJoined} />
          <EventsCreatedByUser />
        </>
      )}
    </>
  );
};
export default UserProfile;

const AccountInformation = styled.div`
  border: 1px solid blue;
`;
