import React from "react";
import green from "../images/green-icon.png";
import red from "../images/red-icon.png";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export default function ThirdFormInsideBox(props) {
  const [options, setOptions] = useState();
  const [fetched, setFetched] = useState(false);
  const [isInputedInstitute, setIsInputedInstitute] = useState(false);
  const [isInputedDegree, setIsInputedDegree] = useState(false);
  const [isInputedGraduateDate, setIsInputedGraduateDate] = useState(false);
  const [isInputedEducationDescription, setIsInputedEducationDescription] =
    useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function fetchData() {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => response.json())
      .then((json) => {
        setFetched(true);
        setOptions(json);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FormInsideDiv>
      <InfoBox>
        <InputBox>
          <Label>სასწავლებელი</Label>
          <InputIconBox
            style={{
              border: props.institute
                ? "1px solid #EF5050"
                : !isInputedInstitute
                ? "1px solid #BCBCBC"
                : isInputedInstitute && props.institute === undefined
                ? "1px solid #98E37E"
                : null,
            }}
          >
            <Input
              type="text"
              placeholder="სასწავლებელი"
              {...props.registerInstitute}
              onInput={() => setIsInputedInstitute(true)}
            />
            <img
              style={{
                display:
                  !isInputedInstitute || props.institute
                    ? "none"
                    : props.institute === undefined
                    ? "block"
                    : null,
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-30px",
                display: props.institute ? "block" : "none",
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
              border: props.degree
                ? "1px solid #EF5050"
                : !isInputedDegree
                ? "1px solid #BCBCBC"
                : isInputedDegree && props.degree === undefined
                ? "1px solid #98E37E"
                : null,
            }}
          >
            <select
              style={{
                width: "100%",
                height: "48px",
                outline: "none",
                border: "none",
              }}
              name="option"
              {...props.registerDegree}
              onInput={() => setIsInputedDegree(true)}
            >
              {fetched &&
                options.map((option) => (
                  <option key={option.id} value={option.title}>
                    {option.title}
                  </option>
                ))}
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
                : !isInputedGraduateDate
                ? "1px solid #BCBCBC"
                : isInputedGraduateDate && props.graduateDate === undefined
                ? "1px solid #98E37E"
                : null,
            }}
            onInput={() => setIsInputedGraduateDate(true)}
          />
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
            placeholder="განათლების აღწერა"
            style={{
              border: props.educationDescription
                ? "1px solid #EF5050"
                : !isInputedEducationDescription
                ? "1px solid #BCBCBC"
                : isInputedEducationDescription &&
                  props.educationDescription === undefined
                ? "1px solid #98E37E"
                : null,
            }}
            {...props.registerEducationDescription}
            onInput={() => setIsInputedEducationDescription(true)}
          ></Textarea>
        </InputBox>
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
const FormInsideDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
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
const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;
