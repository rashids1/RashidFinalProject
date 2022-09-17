import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { GlobalContext } from "../globalContext";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";
const CreateYourOwnEvent2 = () => {
  const { currentUser, setCurrentUser } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formSubmited, setFormSubmited] = useState(false);

  const getGeoCoordinates = async (data) => {};

  const onSubmit = async (datafromform) => {
    const adressOfEvent = `${datafromform.Adress} , ${datafromform.City} , ${
      datafromform.Province
    } , ${datafromform.PostalCode.toUpperCase()}`;
    try {
      const options = {
        method: "GET",
        url: "http://localhost:8000/getGeocodes",
        params: {
          adressOfEvent: adressOfEvent,
          dataFromTheForm: datafromform,
          UserInfo: currentUser,
        },
      };
      axios.request(options).then((response) => {
        console.log("RESPONSE", response);
        alert(response.data.Message);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledWrapper>
      <div className="exteriorBox">
        <h2>Create your own workout event</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("TitleOfEvent", { required: true, min: 2 })}
            placeholder="Title of the event"
          />
          <textarea
            {...register("Description", { required: true, min: 2 })}
            placeholder="Description"
          />
          <input
            type="datetime-local"
            placeholder="Date"
            {...register("Date", { required: true })}
          />
          <input
            type="text"
            placeholder="Adress"
            {...register("Adress", { required: true })}
          />
          <input
            type="text"
            placeholder="City"
            {...register("City", { required: true })}
          />
          <input
            type="text"
            placeholder="Postal Code"
            {...register("PostalCode", { required: true })}
          />
          <select {...register("Province", { required: true })}>
            <option value="NL">NL</option>
            <option value="PE">PE</option>
            <option value="NS">NS</option>
            <option value="NB">NB</option>
            <option value="QC">QC</option>
            <option value="ON">ON</option>
            <option value="MB">MB</option>
            <option value="SK">SK</option>
            <option value="AB">AB</option>
            <option value="BC">BC</option>
            <option value="YT">YT</option>
            <option value="NT">NT</option>
            <option value="NU">NU</option>
          </select>

          <select {...register("Category", { required: true })}>
            <option value="Cardio">Cardio</option>
            <option value="Boxing">Boxing</option>
            <option value="Pilates">Pilates</option>
            <option value="Yoga">Yoga</option>
          </select>
          <input
            type="number"
            placeholder="Price ,0 if Free "
            {...register("Price", {})}
          />

          <input className="submitButton" type="submit" />
        </form>
        <h4 className={formSubmited ? "visibleSubmited" : "notVisibleSubmited"}>
          Event Submited
        </h4>
      </div>
    </StyledWrapper>
  );
};

export default CreateYourOwnEvent2;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .exteriorBox {
    width: 95%;
    display: flex;
    flex-direction: column;
    background-color: var(--4th-color);
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: var(--4th-color);
    /* border: 1px solid gray; */

    input,
    select,
    textarea {
      margin: 10px;
      padding: 10px;
      background-color: white;
      border: 1px solid #545454;
    }
    .submitButton {
      background-color: #2d2dff;
      border-radius: 10px;
      color: white;
      font-weight: bold;
    }
  }
  .visibleSubmited {
    display: block;
    color: green;
  }

  .notVisibleSubmited {
    display: none;
  }
`;
