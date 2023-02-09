import React from "react";
import green from "../images/green-icon.png";
import red from "../images/red-icon.png";
import styled from "styled-components";

export default function ThirdFormInsideBox(props) {
  return (
    <FormInsideDiv>
      <InfoBox>
        <InputBox>
          <Label>სასწავლებელი</Label>
          <InputIconBox
            style={{
              border: props.university
                ? "1px solid #EF5050"
                : "1px solid #98E37E",
            }}
          >
            <Input
              type="text"
              placeholder="სასწავლებელი"
              {...props.registerUniversity}
            />
            <img
              style={{
                display: props.university ? "none" : "block",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-30px",
                display: props.university ? "block" : "none",
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
          <Label>ხარისხი</Label>
          <InputIconBox
            style={{
              border: props.degree ? "1px solid #EF5050" : "1px solid #98E37E",
            }}
          >
            <select
              style={{
                width: "100%",
                height: "48px",

                outline: "none",
              }}
              name=""
              id=""
              {...props.registerDegree}
            >
              <option>აირჩიეთ ხარისხი</option>
            </select>
          </InputIconBox>
        </InputBox>

        <InputBox>
          <Label>დამთავრების რიცხვი</Label>
          <Input
            type="date"
            {...props.registerGraduateDate}
            style={{
              border: props.graduateDate
                ? "1px solid #EF5050"
                : "1px solid #bcbcbc",
            }}
          />
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
            placeholder="განათლების აღწერა"
            style={{
              width: "100%",
              height: 123,
              resize: "none",
              outline: "none",
              border: props.educationDescription
                ? "1px solid #EF5050"
                : "1px solid #98E37E",
            }}
            {...props.registerEducationDescription}
          ></textarea>
        </InputBox>
      </InfoBox>
      <hr style={{ width: "95%", margin: "0 auto" }} />
    </FormInsideDiv>
  );
}
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
const FormInsideDiv = styled.div`
  width: 100%;
  border: 1px solid blue;
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
const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;
