import { GlobalContext } from "../globalContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Event from "../components/Event";

const EventsUserJoined = ({ userId, eventsJoined }) => {
  return (
    <div>
      <h3>Events Joined</h3>
      {eventsJoined.map((_id, index) => {
        return <Event id={_id} />;
      })}
    </div>
  );
};
export default EventsUserJoined;
