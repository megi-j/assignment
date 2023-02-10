import styled from "styled-components";
import green from "../images/green-icon.png";
import red from "../images/red-icon.png";

export default function FormInsideBox(props) {
  return (
    <FormInsideDiv>
      <InfoBox>
        <InputBox>
          <Label>თანამდებობა</Label>
          <InputIconBox
            style={{
              border: props.position
                ? "1px solid #EF5050"
                : "1px solid #98E37E",
            }}
          >
            <Input
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              {...props.registerPosition}
              onInput={props.showExperience}
              onFocus={props.showSecondPageResult}
            />
            <img
              style={{
                display: props.position ? "none" : "block",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-30px",
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
                : "1px solid #98E37E",
            }}
          >
            <Input
              type="text"
              placeholder="დამსაქმებელი"
              {...props.registerEmployer}
            />
            <img
              style={{
                display: props.employer ? "none" : "block",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-30px",
                display: props.employer ? "block" : "none",
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
          <Label>დაწყების რიცხვი</Label>
          <InputIconBox
            style={{
              border: props.startDate
                ? "1px solid #EF5050"
                : "1px solid #98E37E",
            }}
          >
            <Input type="date" {...props.registerStartDate} />
          </InputIconBox>
        </InputBox>
        <InputBox>
          <Label>დამთავრების რიცხვი</Label>
          <InputIconBox
            style={{
              border: props.endDate ? "1px solid #EF5050" : "1px solid #98E37E",
            }}
          >
            <Input type="date" {...props.registerEndDate} />
          </InputIconBox>
          <Input />
        </InputBox>
      </InfoBox>

      <InfoBox>
        <InputBox style={{ marginBottom: 58 }}>
          <Label>აღწერა</Label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            style={{
              width: "100%",
              height: 123,
              resize: "none",
              outline: "none",
              border: props.description
                ? "1px solid #EF5050"
                : "1px solid #98E37E",
            }}
            {...props.registerDescription}
          ></textarea>
        </InputBox>
      </InfoBox>
      <hr style={{ width: "95%", margin: "0 auto" }} />
    </FormInsideDiv>
  );
}

const FormInsideDiv = styled.div`
  width: 100%;
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
`;
const Label = styled.label`
  font-weight: 500;
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
  padding: 8px 24px;
`;
