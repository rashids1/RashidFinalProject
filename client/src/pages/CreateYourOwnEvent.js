import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../globalContext";

const CreateYourOwnEvent = () => {
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  return (
    <StyledWrapper>
      <div className="Exteriorbox">
        <div className="CreateYourOwnEvent">
          <form autoComplete="on">
            <h2>Create Your Own Event</h2>
            <label>Title:</label>
            <input required type="text" id="title" />

            <label>Decription:</label>
            <textarea required id="Decription" rows="5" maxLength={2000} />

            <label>adress:</label>
            <input required type="text" id="adress" />

            <label>city:</label>
            <input required type="text" id="city" />

            <label>province:</label>
            <select id="province" name="province">
              <option disabled>Choose a province</option>
              <option value="Nl">NL</option>
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

            <label>category:</label>
            <select id="category" name="category">
              <option disabled>Category</option>
              <option value="Boxing">Boxing</option>
              <option value="Pilates">Pilates</option>
              <option value="Yoga">Yoga</option>
              <option value="Cardio">Cardio</option>
            </select>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};
export default CreateYourOwnEvent;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .Exteriorbox {
    width: 95%;
    height: 700px;
    display: flex;
    flex-direction: column;
    background-color: var(--4th-color);
    margin: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  /* @media only screen and (max-width: 560px), (max-width: 1024px) {
    /* ... */
    select {
      width: 150px;
    }
  } */
`;
