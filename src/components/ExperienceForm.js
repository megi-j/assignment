import { useState } from "react";
import styled from "styled-components";
import green from "../images/green-icon.png";
import red from "../images/red-icon.png";

export default function ExperienceForm(props) {
  return (
    <Form onSubmit={props.handleSubmit(props.onSubmit)}>
      <InfoBox>
        <InputBox>
          <Label>თანამდებობა</Label>
          <InputIconBox>
            <Input
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              {...props.registerPosition}
            />
            <img
              style={{
                display: props.name ? "none" : "block",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-30px",
                display: props.name ? "block" : "none",
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
          <InputIconBox>
            <Input
              type="text"
              placeholder="დამსაქმებელი"
              {...props.registerEmployer}
            />
            <img
              style={{
                display: props.name ? "none" : "block",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-30px",
                display: props.name ? "block" : "none",
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
          <InputIconBox>
            <Input type="date" {...props.registerStartDate} />
          </InputIconBox>
        </InputBox>
        <InputBox>
          <Label>დამთავრების რიცხვი</Label>
          <InputIconBox>
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
            }}
            {...props.registerDescription}
          ></textarea>
        </InputBox>
      </InfoBox>
      <hr style={{ width: "95%", margin: "0 auto" }} />
      <MoreExperienceButton>მეტი გამოცდილების დამატება</MoreExperienceButton>
      <ButtonBox>
        <BackButton onClick={props.backClicked}>ᲣᲙᲐᲜ</BackButton>
        <SubmitButton type="submit">ᲨᲔᲛᲓᲔᲒᲘ</SubmitButton>
      </ButtonBox>
    </Form>
  );
}
const SubmitButton = styled.button`
  width: 151px;
  height: 48px;
  background-color: #6b40e3;
  color: #fff;
  border-radius: 4px;
  border: none;
`;
const BackButton = styled.button`
  width: 113px;
  height: 48px;
  background: #6b40e3;
  border-radius: 4px;
  color: #fff;
  border: none;
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const MoreExperienceButton = styled.button`
  background: #62a1eb;
  border-radius: 4px;
  border: none;
  color: #fff;
  width: 289px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  margin-top: 45px;
  margin-bottom: 100px;
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
const Form = styled.form`
  width: 80%;
  margin: 0 auto;
`;
const InfoBox = styled.div`
  width: 100%;
  height: 122px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid red;
`;
const InputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px 24px;
`;
