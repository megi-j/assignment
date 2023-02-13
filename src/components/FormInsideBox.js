import { useState } from "react";
import styled from "styled-components";
import green from "../images/green-icon.png";
import red from "../images/red-icon.png";

export default function FormInsideBox(props) {
  const [isInputedPosition, setIsInputedPosition] = useState(false);
  const [isInputedEmpoyer, setIsInputedEmployer] = useState(false);
  const [isInputedStartDate, setIsInputedStartDate] = useState(false);
  const [isInputedDueDate, setIsInputedDueDate] = useState(false);
  const [isInputedDescription, setIsInputedDescription] = useState(false);
  return (
    <FormInsideDiv>
      <InfoBox>
        <InputBox>
          <Label>თანამდებობა</Label>
          <InputIconBox
            style={{
              border: props.position
                ? "1px solid #EF5050"
                : !isInputedPosition
                ? "1px solid #BCBCBC"
                : isInputedPosition && props.position === undefined
                ? "1px solid #98E37E"
                : null,
            }}
          >
            <Input
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              {...props.registerPosition}
              onInput={() => {
                props.showExperience();
                setIsInputedPosition(true);
              }}
              onFocus={props.showSecondPageResult}
            />
            <img
              style={{
                display:
                  !isInputedPosition || props.position
                    ? "none"
                    : props.position === undefined
                    ? "block"
                    : null,
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-50px",
                display: props.position ? "block" : "none",
              }}
              src={red}
              alt=""
            />
          </InputIconBox>
          <p>მინიმუმ 2 სიმბოლო</p>
        </InputBox>
      </InfoBox>

      <InfoBox>
        <InputBox>
          <Label>დამსაქმებელი</Label>
          <InputIconBox
            style={{
              border: props.employer
                ? "1px solid #EF5050"
                : !isInputedEmpoyer
                ? "1px solid #BCBCBC"
                : isInputedEmpoyer && props.employer === undefined
                ? "1px solid #98E37E"
                : null,
            }}
          >
            <Input
              type="text"
              placeholder="დამსაქმებელი"
              {...props.registerEmployer}
              onInput={() => setIsInputedEmployer(true)}
            />
            <img
              style={{
                display:
                  !isInputedEmpoyer || props.employer
                    ? "none"
                    : props.employer === undefined
                    ? "block"
                    : null,
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-50px",
                display: props.employer ? "block" : "none",
              }}
              src={red}
              alt=""
            />
          </InputIconBox>
          <p>მინიმუმ 2 სიმბოლო</p>
        </InputBox>
      </InfoBox>

      <InfoBox style={{}}>
        <InputBox>
          <Label>დაწყების რიცხვი</Label>
          <InputIconBox
            style={{
              border: props.startDate
                ? "1px solid #EF5050"
                : !isInputedStartDate
                ? "1px solid #BCBCBC"
                : isInputedStartDate && props.startDate === undefined
                ? "1px solid #98E37E"
                : null,
            }}
          >
            <Input
              type="date"
              {...props.registerStartDate}
              onInput={() => setIsInputedStartDate(true)}
            />
          </InputIconBox>
        </InputBox>
        <InputBox>
          <Label>დამთავრების რიცხვი</Label>
          <InputIconBox
            style={{
              border: props.dueDate
                ? "1px solid #EF5050"
                : !isInputedDueDate
                ? "1px solid #BCBCBC"
                : isInputedDueDate && props.dueDate === undefined
                ? "1px solid #98E37E"
                : null,
            }}
          >
            <Input
              type="date"
              {...props.registerDueDate}
              onInput={() => setIsInputedDueDate(true)}
            />
          </InputIconBox>
        </InputBox>
      </InfoBox>

      <InfoBox>
        <InputBox style={{ marginBottom: 58 }}>
          <Label style={{ marginBottom: 10 }}>აღწერა</Label>
          <Textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            style={{
              border: props.description
                ? "1px solid #EF5050"
                : !isInputedDescription
                ? "1px solid #BCBCBC"
                : isInputedDescription && props.description === undefined
                ? "1px solid #98E37E"
                : null,
            }}
            {...props.registerDescription}
            onInput={() => setIsInputedDescription(true)}
          ></Textarea>
        </InputBox>
        <img
          style={{
            marginRight: 0,
            marginTop: "-35px",
            display: props.description ? "block" : "none",
          }}
          src={red}
          alt=""
        />
      </InfoBox>
      <hr style={{ width: "95%", margin: "0 auto" }} />
    </FormInsideDiv>
  );
}
const Textarea = styled.textarea`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  padding: 13px 16px;
`;
const FormInsideDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`;
const Input = styled.input`
  width: 90%;
  height: 48px;
  background: rgba(255, 255, 255, 0);
  border: none;
  outline: none;
`;
const InputIconBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #bcbcbc;
  padding: 0 16px;
`;
const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  color: #000000;
`;
const InfoBox = styled.div`
  width: 100%;
  height: 122px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  padding: 8px 24px;
`;
