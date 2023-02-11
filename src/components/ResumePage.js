import React from "react";
import styled from "styled-components";
import arrow from "../images/arrow.png";
import { useState } from "react";
import smallLogo from "../images/logo-3.png";
import App from "../App";
import close from "../images/close.png";
import email from "../images/email.png";
import phone from "../images/phone.png";

export default function ResumePage(props) {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [isPopUpClicked, setIsPopUpClicked] = useState(false);
  return isArrowClicked ? (
    <App />
  ) : (
    <ResumePageContainer>
      <ArrowDiv>
        <img src={arrow} alt="" onClick={() => setIsArrowClicked(true)} />
      </ArrowDiv>

      <ResumeBox>
        <PersonalInfo>
          <TextSide>
            <Name>
              {props.inputName}&nbsp;
              {props.inputSurname}
            </Name>
            <Box>
              {props.email ? " " : <img src={email} alt="" />}
              <EmailAndPhone>{props.inputEmail}</EmailAndPhone>
            </Box>
            <Box>
              {" "}
              {props.phoneNumber ? "" : <img src={phone} />}
              <EmailAndPhone>{props.inputPhoneNumber}</EmailAndPhone>
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
        </PersonalInfo>

        <ExperienceInfo>
          <ExperienceTitle>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</ExperienceTitle>
          <ExperienceBox>
            <PositionText>
              {props.position}
              {props.employer}
            </PositionText>
            <StartAndEndDate>
              {props.startDate}
              {props.dueDate}
            </StartAndEndDate>
            <p>{props.description}</p>
          </ExperienceBox>

          {/* <ExperienceBox>
            <PositionText>
              {props.position2}
              {props.employer2}
            </PositionText>
            <StartAndEndDate>
              {props.startDate2}
              {props.dueDate2}
            </StartAndEndDate>
            <p>{props.description2}</p>
          </ExperienceBox> */}
        </ExperienceInfo>
        <EducationInfo>
          <EducationTitle>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</EducationTitle>
          <EducationBox>
            <UniversityText>
              {props.institute}
              {props.degree}
            </UniversityText>
            <Graduate>{props.graduateDate}</Graduate>
            <p>{props.educationDesctiption}</p>
          </EducationBox>
        </EducationInfo>
        <img src={smallLogo} alt="" />
      </ResumeBox>

      <PopUpBox style={{ opacity: isPopUpClicked ? 0 : 1 }}>
        <img
          src={close}
          alt=""
          style={{ float: "right" }}
          onClick={() => setIsPopUpClicked(true)}
        />
        <PopUp>რეზიუმე წარმატებით გაიგზავნა 🎉</PopUp>
      </PopUpBox>
    </ResumePageContainer>
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
const EducationTitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
  color: #f93b1d;
`;
const EducationBox = styled.div`
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #c8c8c8;
  margin-bottom: 20px;
`;
const ExperienceTitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
  color: #f93b1d;
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
const ExperienceBox = styled.div`
  width: 100%;
  height: 50%;
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

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Box = styled.div`
  display: flex;
`;
const Name = styled.h1`
  font-weight: 700;
  font-size: 34px;
  color: #f93b1d;
  display: inline-block;
`;
const PersonalInfo = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  border-bottom: 1px solid #c8c8c8;
`;
const ExperienceInfo = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #c8c8c8;
`;
const EducationInfo = styled.div`
  width: 100%;
  height: 20%;
`;
const PopUp = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 43px;
  color: #1a1a1a;
`;
const PopUpBox = styled.div`
  width: 427px;
  height: 167px;
  padding: 28px 30px 30px;
  border: 1px solid #e4e4e4;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
const ResumeBox = styled.div`
  width: 50%;
  height: 90%;
  border: 0.8px solid #000000;
  padding: 48px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: flex-start;
`;
const ArrowDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f9f9f9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ResumePageContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
  border: 1px solid red;
  padding: 45px;
`;
