import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import email from "../images/email.png";
import phone from "../images/phone.png";
import { useState } from "react";
import App from "../App";
import SecondInfoPage from "./SecondInfoPage";
import FillInfoFirstPage from "./FillInfoFirstPage";

export default function FirstInfoPage() {
  const [image, setImage] = useState(null);
  const [isArrowDivClicked, setIsArrowDivClicked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [info, setInfo] = useState();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setInfo(data);
    setIsSubmitted(true);
  };
  const validateEmail = (value) => {
    return value.endsWith("@redberry.ge");
  };
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <>
      {isArrowDivClicked ? ( //თუ ზედა მარცხენა კუთხეში ისარს დაკლიკული აქვს გაიხსნას ისევ პირველი შესავალი გვერდი, თუ არადა ზოგადი ინფომაციის გვერდი
        <App />
      ) : (
        <FirstPageContainer>
          {isSubmitted ? ( //თუ შემდეგ ღილაკს დაკლიკული აქვს და დასაბმითდა გვერდი(ანუ ყველაფერი თუ სწორად არის შევსებული მაშინ გაიხსნას მეორე ანუ გამოცდილების გვერდი)
            <SecondInfoPage
              arrowClicked={() => setIsArrowDivClicked(true)}
              handleSubmit={handleSubmit}
              name={errors.name}
              lastName={errors.lastName}
              email={errors.email}
              number={errors.number}
              onSubmit={onSubmit}
              handleChange={handleChange}
              arrowDivClicked={() => setIsArrowDivClicked(true)}
              registerName={register("name", { required: true, minLength: 2 })}
              registerLastName={register("lastName", {
                required: true,
                minLength: 2,
              })}
              registerImage={register("image", { required: true })}
              registerAboutMe={register("aboutMe")}
              registerEmail={register("email", {
                required: true,
                validate: validateEmail,
              })}
              registerNumber={register("number", { required: true })}
              image={image}
              inputName={info.name}
              inputLastName={info.lastName}
              inputEmail={info.email}
              inputNumber={info.number}
              inputAboutMe={info.aboutMe}
            />
          ) : (
            <>
              <FillInfoFirstPage
                isSubmitted={isSubmitted}
                handleSubmit={handleSubmit}
                name={errors.name}
                lastName={errors.lastName}
                email={errors.email}
                number={errors.number}
                onSubmit={onSubmit}
                handleChange={handleChange}
                arrowDivClicked={() => setIsArrowDivClicked(true)}
                registerName={register("name", {
                  required: true,
                  pattern: /^[ა-ჰ]+$/,
                })}
                registerLastName={register("lastName", {
                  required: true,
                  pattern: /^[ა-ჰ]+$/,
                })}
                registerImage={register("image", { required: true })}
                registerAboutMe={register("aboutMe")}
                registerEmail={register("email", {
                  required: true,
                  pattern: /^[^s@]+@redberry.ge$/,
                })}
                registerNumber={register("number", {
                  required: true,
                  pattern: /^(\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2})$/,
                })}
              />

              <ShowInfoSide>
                <FirstPageResult>
                  <TextSide>
                    <Name>
                      {errors.name ? " " : watch("name")}&nbsp;
                      {errors.lastName ? " " : watch("lastName")}
                    </Name>

                    <Box>
                      {errors.email ? " " : <img src={email} alt="" />}
                      <EmailAndPhone>
                        {errors.email ? " " : watch("email")}
                      </EmailAndPhone>
                    </Box>
                    <Box>
                      {errors.number ? "" : <img src={phone} />}
                      <EmailAndPhone>
                        {errors.phone ? "" : watch("number")}
                      </EmailAndPhone>
                    </Box>
                    <AboutMeBox>
                      <AboutMeTitle>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</AboutMeTitle>
                      {watch("aboutMe")}
                    </AboutMeBox>
                  </TextSide>
                  {image && (
                    <img
                      style={{ width: 246, height: 246, borderRadius: "50%" }}
                      src={URL.createObjectURL(image)}
                    />
                  )}
                </FirstPageResult>
              </ShowInfoSide>
            </>
          )}
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
  border-bottom: 1px solid #c8c8c8;
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
