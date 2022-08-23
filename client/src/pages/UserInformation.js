import EventsCreatedByUser from "./EventsCreatedByUser";
import EventsUserJoined from "./EventsUserJoined";

const UserInformation = () => {
  return (
    <>
      <EventsUserJoined />
      <EventsCreatedByUser />
    </>
  );
};
export default UserInformation;
