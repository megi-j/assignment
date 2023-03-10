import React from "react";
import ThirdFormInsideBox from "./ThirdFormInsideBox";
import styled from "styled-components";

export default function EducationForm(props) {
  return (
    <Form onSubmit={props.handleSubmit(props.onSubmit)}>
      <ThirdFormInsideBox
        registerInstitute={props.registerInstitute}
        registerDegree={props.registerDegree}
        registerGraduateDate={props.registerGraduateDate}
        registerEducationDescription={props.registerEducationDescription}
        educationDescription={props.educationDescription}
        institute={props.institute}
        degree={props.degree}
        graduateDate={props.graduateDate}
      />
      <MoreEducationButton type="submit" onClick={props.handleButtonClick}>
        სხვა სასწავლებლის დამატება
      </MoreEducationButton>
      <ButtonBox>
        <BackButton onClick={props.backClicked}>ᲣᲙᲐᲜ</BackButton>
        <SubmitButton type="submit">ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</SubmitButton>
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
  cursor: pointer;
`;
const BackButton = styled.button`
  width: 113px;
  height: 48px;
  background: #6b40e3;
  border-radius: 4px;
  color: #fff;
  border: none;
  cursor: pointer;
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const MoreEducationButton = styled.button`
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
  cursor: pointer;
`;
const Form = styled.form`
  width: 80%;
  height: 80%;
  margin: 77px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`;
