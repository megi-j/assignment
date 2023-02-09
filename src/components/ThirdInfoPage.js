import React from "react";
import styled from "styled-components";
import arrow from "../images/Vector.png";
import { useState } from "react";
import App from "../App";
import EducationForm from "./EducationForm";
import { useForm, SubmitHandler } from "react-hook-form";

export default function ThirdInfoPage() {
  const [isArrowClicked, setIsArrowClicked] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
  };

  return isArrowClicked ? (
    <App />
  ) : (
    <ThirdPageContainer>
      <FillInfoEducationSide>
        <HeaderBox>
          <ArrowDiv onClick={() => setIsArrowClicked(true)}>
            <img src={arrow} alt="arrow" />
          </ArrowDiv>
          <Title>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</Title>
          <PageNumber>3/3</PageNumber>
        </HeaderBox>

        <EducationForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          registerUniversity={register("university", {
            required: true,
            minLength: 2,
          })}
          registerDegree={register("degree", { required: true })}
          registerGraduateDate={register("graduateDate", { required: true })}
          registerEducationDescription={register("educationDesctiption", {
            required: true,
          })}
          educationDescription={errors.educationDescription}
          university={errors.university}
          degree={errors.degree}
          graduateDate={errors.graduateDate}
        />
      </FillInfoEducationSide>
    </ThirdPageContainer>
  );
}

const ThirdPageContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  overflow-y: scroll;
`;
const FillInfoEducationSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: #f9f9f9;
`;
const HeaderBox = styled.header`
  width: 80%;
  height: 88px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #1a1a1a;
`;
const ArrowDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #1a1a1a;
`;
const PageNumber = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #1a1a1a;
`;