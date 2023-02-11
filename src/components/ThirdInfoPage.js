import React from "react";
import styled from "styled-components";
import arrow from "../images/arrow.png";
import { useState } from "react";
import App from "../App";
import EducationForm from "./EducationForm";
import { useForm, SubmitHandler } from "react-hook-form";
import email from "../images/email.png";
import phone from "../images/phone.png";
import SecondInfoPage from "./SecondInfoPage";
import ResumePage from "./ResumePage";

export default function ThirdInfoPage(props) {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [isBackClicked, setIsBackClicked] = useState(false);
  const [thirdPageInfo, setThirdPageInfo] = useState();
  const [isThirdPageSubmit, setIsThirdPageSubmit] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setThirdPageInfo(data);
    setIsThirdPageSubmit(true);
  };

  return isArrowClicked ? (
    <App />
  ) : isBackClicked ? (
    <SecondInfoPage />
  ) : isThirdPageSubmit ? (
    <ResumePage
      inputName={props.inputName}
      inputLastName={props.inputLastName}
      email={props.email}
      inputEmail={props.inputEmail}
      number={props.number}
      inputNumber={props.inputNumber}
      inputAboutMe={props.inputAboutMe}
      image={props.image}
      position={props.position}
      employer={props.employer}
      startDate={props.startDate}
      endDate={props.endDate}
      description={props.description}
      position2={props.position2}
      employer2={props.employer2}
      startDate2={props.startDate2}
      endDate2={props.endDate2}
      description2={props.description2}
      university={thirdPageInfo.university}
      degree={thirdPageInfo.degree}
      graduateDate={thirdPageInfo.graduateDate}
      educationDesctiption={thirdPageInfo.educationDesctiption}
    />
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
          backClicked={() => setIsBackClicked(true)}
        />
      </FillInfoEducationSide>

      <ShowInfoSide>
        <FirstPageResult>
          <TextSide>
            <Name>
              {props.inputName}&nbsp;
              {props.inputLastName}
            </Name>
            <Box>
              {props.email ? " " : <img src={email} alt="" />}
              <EmailAndPhone>{props.inputEmail}</EmailAndPhone>
            </Box>
            <Box>
              {" "}
              {props.number ? "" : <img src={phone} />}
              <EmailAndPhone>{props.inputNumber}</EmailAndPhone>
            </Box>
            <AboutMeBox>
              {props.inputAboutMe === "" ? (
                " "
              ) : (
                <AboutMeTitle>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</AboutMeTitle>
              )}
              {props.inputAboutMe}
            </AboutMeBox>
          </TextSide>
          {props.image && (
            <img
              style={{ width: 246, height: 246, borderRadius: "50%" }}
              src={URL.createObjectURL(props.image)}
            />
          )}
        </FirstPageResult>

        <SecondPageResult>
          <ExperienceTitle>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</ExperienceTitle>
          <ExperienceBox>
            <PositionText>
              {props.position}
              {props.employer}
            </PositionText>
            <StartAndEndDate>
              {props.startDate}
              {props.endDate}
            </StartAndEndDate>
            <p>{props.description}</p>
          </ExperienceBox>

          <ExperienceBox>
            <PositionText>
              {props.position2}
              {props.employer2}
            </PositionText>
            <StartAndEndDate>
              {props.startDate2}
              {props.endDate2}
            </StartAndEndDate>
            <p>{props.description2}</p>
          </ExperienceBox>
        </SecondPageResult>

        <ThirdPageResult>
          <EducationTitle>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</EducationTitle>
          <EducationBox>
            <UniversityText>
              {errors.university ? " " : watch("university")},&nbsp;
              {errors.degree ? " " : watch("degree")}
            </UniversityText>
            <Graduate>
              {errors.graduateDate ? " " : watch("graduateDate")}
            </Graduate>
            <p>
              {errors.educationDesctiption ? "" : watch("educationDesctiption")}
            </p>
          </EducationBox>
        </ThirdPageResult>
      </ShowInfoSide>
    </ThirdPageContainer>
  );
}
const Graduate = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  color: #919191;
`;
const UniversityText = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #1a1a1a;
`;
const EducationBox = styled.div`
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #c8c8c8;
  margin-bottom: 20px;
`;
const EducationTitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
  color: #f93b1d;
`;
const ThirdPageResult = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const StartAndEndDate = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  color: #919191;
`;
const PositionText = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #1a1a1a;
`;
const ExperienceTitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
  color: #f93b1d;
`;
const SecondPageResult = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 1px solid #c8c8c8;
`;
const ExperienceBox = styled.div`
  width: 100%;
  height: 50%;
`;
const Name = styled.h1`
  font-weight: 700;
  font-size: 34px;
  color: #f93b1d;
  display: inline-block;
`;
const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const FirstPageResult = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c8c8c8;
`;
const Box = styled.div`
  display: flex;
`;
const EmailAndPhone = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #1a1a1a;
`;
const AboutMeBox = styled.div`
  width: 550px;
  height: 120px;
  overflow: auto;
`;
const AboutMeTitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
  color: #f93b1d;
  margin-bottom: 15px;
`;

const ShowInfoSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  padding: 48px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: flex-start;
`;
const ThirdPageContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  overflow-y: scroll;
  border: 1px solid red;
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
