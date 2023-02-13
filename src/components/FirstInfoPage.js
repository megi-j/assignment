import styled from "styled-components";
import email from "../images/email.png";
import phone from "../images/phone.png";
import { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SecondInfoPage from "./SecondInfoPage";
import FillInfoFirstPage from "./FillInfoFirstPage";
import smallLogo from "../images/logo-3.png";
import App from "../App";

export default function FirstInfoPage(props) {
  const [isArrowDivClicked, setIsArrowDivClicked] = useState(false);
  const [isSubmittedFirstPage, setIsSubmittedFirstPage] = useState(false);
  const [info, setInfo] = useState({});
  const [image, setImage] = useState(null);
  const [showEmailIcon, setShowEmailIcon] = useState(false);
  const [showTelIcon, setShowTelIcon] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [isBackClicked, setIsBackClicked] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setInfo(data);
    setIsSubmittedFirstPage(true);
  };
  console.log(errors);
  // useEffect(() => {
  //   localStorage.setItem("info", JSON.stringify(info));
  // }, [info]);
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("info"));
  //   if (items) {
  //     setInfo(items);
  //   }
  // }, []);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  const backClicked = () => {
    // e.preventDefault();
    setIsBackClicked(true);
  };

  return (
    <>
      {isArrowDivClicked ? (
        <App />
      ) : isSubmittedFirstPage ? (
        <SecondInfoPage
          image={image}
          inputName={info.name}
          inputSurname={info.surname}
          inputEmail={info.email}
          inputPhoneNumber={info.phone_number}
          inputAboutMe={info.about_me}
          arrowClicked={() => setIsArrowDivClicked(true)}
          handleSubmit={handleSubmit}
          name={errors.name}
          surname={errors.surname}
          email={errors.email}
          phoneNumber={errors.phone_number}
          onSubmit={onSubmit}
          handleChange={handleChange}
          arrowDivClicked={() => setIsArrowDivClicked(true)}
          registerName={register("name", { required: true, minLength: 2 })}
          registerSurname={register("surname", {
            required: true,
            minLength: 2,
          })}
          registerImage={register("image", { required: true })}
          registerAboutMe={register("about_me")}
          registerEmail={register("email", {
            required: true,
          })}
          registerPhoneNumber={register("phone_number", { required: true })}
          setInfo={setInfo}
          info={info}
          isBackClicked={isBackClicked}
          backClicked={backClicked}
        />
      ) : (
        <FirstPageContainer>
          <FillInfoFirstPage
            isSubmitted={props.isSubmitted}
            handleSubmit={handleSubmit}
            name={errors.name}
            surname={errors.surname}
            email={errors.email}
            phoneNumber={errors.phone_number}
            onSubmit={onSubmit}
            handleChange={handleChange}
            arrowDivClicked={() => setIsArrowDivClicked(true)}
            registerName={register("name", {
              required: true,
              pattern: /^[ა-ჰ]+$/,
            })}
            registerSurname={register("surname", {
              required: true,
              pattern: /^[ა-ჰ]+$/,
            })}
            registerImage={register("image", { required: true })}
            registerAboutMe={register("about_me")}
            registerEmail={register("email", {
              required: true,
              pattern: /^[^s@]+@redberry.ge$/,
            })}
            registerPhoneNumber={register("phone_number", {
              required: true,
              pattern: /^(\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2})$/,
            })}
            onFocusEmail={() => setShowEmailIcon(true)}
            onFocusTel={() => setShowTelIcon(true)}
            onInput={() => setShowAboutMe(true)}
            isSubmittedFirstPage={props.isSubmitted}
          />

          <ShowInfoSide>
            <FirstPageResult
              style={{
                borderBottom: isSubmittedFirstPage && "1px solid #c8c8c8",
              }}
            >
              <TextSide>
                {/* {isBackClicked ? (
                  <Name>lasha</Name>
                ) : ( */}
                <Name>
                  {errors.name ? " " : watch("name")}&nbsp;
                  {errors.surname ? " " : watch("surname")}
                </Name>
                {/* )} */}
                <Box>
                  {showEmailIcon && <img src={email} alt="" />}&nbsp;&nbsp;
                  <EmailAndPhone>
                    {errors.email ? " " : watch("email")}
                  </EmailAndPhone>
                </Box>
                <Box>
                  {showTelIcon && <img src={phone} />}&nbsp;&nbsp;
                  <EmailAndPhone>
                    {errors.phone_number ? "" : watch("phone_number")}
                  </EmailAndPhone>
                </Box>
                <AboutMeBox>
                  {showAboutMe && <AboutMeTitle>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</AboutMeTitle>}
                  {watch("about_me")}
                </AboutMeBox>
              </TextSide>
              {image && (
                <img
                  style={{ width: 246, height: 246, borderRadius: "50%" }}
                  src={URL.createObjectURL(image)}
                />
              )}
            </FirstPageResult>
            <img
              style={{
                padding: 42,
              }}
              src={smallLogo}
              alt=""
            />
          </ShowInfoSide>
        </FirstPageContainer>
      )}
    </>
  );
}

const FirstPageContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  overflow-y: scroll;
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

const Name = styled.h1`
  font-weight: 700;
  font-size: 34px;
  color: #f93b1d;
`;
const Box = styled.div`
  display: flex;
`;
const EmailAndPhone = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #1a1a1a;
`;
const FirstPageResult = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
