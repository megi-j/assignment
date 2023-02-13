import styled from "styled-components";
import arrow from "../images/arrow.png";
import { useEffect, useState } from "react";
import App from "../App";
import email from "../images/email.png";
import phone from "../images/phone.png";
import { useForm, SubmitHandler } from "react-hook-form";
import ExperienceForm from "./ExperienceForm";
import FirstInfoPage from "./FirstInfoPage";
import smallLogo from "../images/logo-3.png";
import ThirdInfoPage from "./ThirdInfoPage";

export default function SecondInfoPage(props) {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [isMoreExperienceButtonClicked, setIsMoreExperienceButtonClicked] =
    useState(false);
  const [isSecondPageSubmit, setIsSecondPageSubmit] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [showExperience, setShowExperience] = useState(false);
  const [showSecondPageResult, setSecondPageResult] = useState(false);
  const [isFirstExperienceSubmit, setIsFirstExperienceSubmit] = useState(false);
  const [isNextButtonClicked, setIsNextButtonClicked] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setExperiences(experiences.push(data));
    props.setInfo({ ...props.info, experiences });
    setIsSecondPageSubmit(true);
  };
  console.log(errors);
  // const onSubmit2 = (info) => {
  //   console.log(info);
  //   setExperiences(experiences.push(info));
  //   props.setInfo({ ...props.info, experiences });
  //   setIsSecondPageSubmit(true);
  //   // setIsFirstExperienceSubmit(true);
  // };
  // console.log(props.info);
  // const handleButtonClick = (event) => {
  //   event.preventDefault();
  //   setIsMoreExperienceButtonClicked(true);
  // };
  // useEffect(() => {
  //   localStorage.setItem("info", JSON.stringify(props.info));
  // }, [props.info]);
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("info"));
  //   if (items) {
  //     props.setInfo(items);
  //   }
  // }, []);
  return (
    <>
      {isArrowClicked ? (
        <App />
      ) : props.isBackClicked ? (
        <FirstInfoPage />
      ) : isSecondPageSubmit ? (
        <ThirdInfoPage
          inputName={props.inputName}
          inputSurname={props.inputSurname}
          email={props.email}
          inputEmail={props.inputEmail}
          phoneNumber={props.phoneNumber}
          inputPhoneNumber={props.inputPhoneNumber}
          inputAboutMe={props.inputAboutMe}
          image={props.image}
          position={props.info.experiences[0].position}
          employer={props.info.experiences[0].employer}
          startDate={props.info.experiences[0].start_date}
          dueDate={props.info.experiences[0].due_date}
          description={props.info.experiences[0].description}
          // position2={props.info.experiences[0].position2}
          // employer2={props.info.experiences[0].employer2}
          // startDate2={props.info.experiences[0].start_date2}
          // dueDate2={props.info.experiences[0].due_date2}
          // description2={props.info.experiences[0].description2}
          info={props.info}
          setInfo={props.setInfo}
        />
      ) : (
        <SecondPageContainer>
          <FillInfoExperienceSide>
            <HeaderBox>
              <ArrowDiv onClick={() => setIsArrowClicked(true)}>
                <img src={arrow} alt="arrow" />
              </ArrowDiv>
              <Title>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</Title>
              <PageNumber>2/3</PageNumber>
            </HeaderBox>

            <ExperienceForm
              registerPosition={register("position", {
                required: true,
                minLength: 2,
              })}
              registerEmployer={register("employer", {
                required: true,
                minLength: 2,
              })}
              registerStartDate={register("start_date", { required: true })}
              registerDueDate={register("due_date", { required: true })}
              registerDescription={register("description", { required: true })}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              backClicked={props.backClicked}
              position={errors.position}
              employer={errors.employer}
              startDate={errors.start_date}
              dueDate={errors.due_date}
              description={errors.description}
              // position2={errors.position2}
              // registerPosition2={register("position2", {
              //   required: true,
              //   minLength: 2,
              // })}
              // employer2={errors.employer2}
              // registerEmployer2={register("employer2", {
              //   required: true,
              //   minLength: 2,
              // })}
              // startDate2={errors.start_date2}
              // registerStartDate2={register("start_date2", { required: true })}
              // dueDate2={errors.dueDate2}
              // registerDueDate2={register("due_date2", { required: true })}
              // description2={errors.description2}
              // registerDescription2={register("description2", {
              //   required: true,
              // })}
              isMoreExperienceButtonClicked={isMoreExperienceButtonClicked}
              handleButtonClick={() => setIsMoreExperienceButtonClicked(true)}
              showExperience={() => setShowExperience(true)}
              showSecondPageResult={() => setSecondPageResult(true)}
              // onSubmit2={onSubmit2}
              more={() => setIsMoreExperienceButtonClicked(true)}
              // data={props.info.experiences}
              isSecondPageSubmit={isSecondPageSubmit}
              nextButtonClicked={() => setIsNextButtonClicked(true)}
            />
            {/* {isSecondPageSubmit &&
              props.info.experiences.map((item) => {
                return (
                  <ExperienceForm
                    onSubmit={onSubmit2}
                    handleSubmit={handleSubmit}
                    registerPosition={register("position2", {
                      required: true,
                      minLength: 2,
                    })}
                    registerEmployer={register("employer2", {
                      required: true,
                      minLength: 2,
                    })}
                    registerStartDate={register("start_date2", {
                      required: true,
                    })}
                    registerDueDate={register("due_date2", { required: true })}
                    registerDescription={register("description2", {
                      required: true,
                    })}
                    position={errors.position2}
                    employer={errors.employer2}
                    startDate={errors.start_date2}
                    dueDate={errors.due_date2}
                    description={errors.description2}
                  />
                );
              })} */}
          </FillInfoExperienceSide>

          <ShowInfoSide>
            <div style={{ height: "100%" }}>
              <FirstPageResult>
                <TextSide>
                  <Name>
                    {props.inputName}&nbsp;
                    {props.inputSurname}
                  </Name>

                  <Box>
                    {props.email ? " " : <img src={email} alt="" />}&nbsp;&nbsp;
                    <EmailAndPhone>{props.inputEmail}</EmailAndPhone>
                  </Box>
                  <Box>
                    {" "}
                    {props.phoneNumber ? "" : <img src={phone} />}&nbsp;&nbsp;
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
              </FirstPageResult>

              <SecondPageResult
                style={{ display: showSecondPageResult ? "block" : "none" }}
              >
                <ExperienceTitle
                  style={{ display: showExperience ? "block" : "none" }}
                >
                  ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ
                </ExperienceTitle>
                <ExperienceBox>
                  <PositionText>
                    {errors.position ? " " : watch("position")}
                    {errors.employer ? " " : watch("employer")}
                  </PositionText>
                  <StartAndEndDate>
                    {errors.start_date ? " " : watch("start_date")}&nbsp;-
                    &nbsp;
                    {errors.due_date ? " " : watch("due_date")}
                  </StartAndEndDate>
                  <p>{errors.description ? " " : watch("description")}</p>
                </ExperienceBox>

                {/* {isFirstExperienceSubmit && (
                <ExperienceBox>
                  <PositionText>
                    {errors.position2 ? " " : watch("position2")}{" "}
                    {errors.employer2 ? " " : watch("employer2")}
                  </PositionText>
                  <StartAndEndDate>
                    {errors.start_date2 ? " " : watch("start_date2")}&nbsp;-
                    &nbsp;
                    {errors.due_date2 ? " " : watch("due_date2")}
                  </StartAndEndDate>
                  <p>{errors.description2 ? " " : watch("description2")}</p>
                </ExperienceBox>
              )} */}
              </SecondPageResult>
            </div>

            <img
              style={{
                padding: 42,
              }}
              src={smallLogo}
              alt=""
            />
          </ShowInfoSide>
        </SecondPageContainer>
      )}
    </>
  );
}

const ExperienceBox = styled.div`
  width: 100%;
  height: 70%;
  border-bottom: 1px solid #c8c8c8;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const SecondPageContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  overflow-y: scroll;
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

const Box = styled.div`
  display: flex;
`;
const EmailAndPhone = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #1a1a1a;
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
  height: 30%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c8c8c8;
`;
const SecondPageResult = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
const FillInfoExperienceSide = styled.div`
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
