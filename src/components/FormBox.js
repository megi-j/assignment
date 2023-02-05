import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import green from "../images/green-icon.png";
import red from "../images/red-icon.png";
export default function FormBox() {
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitClicked(true);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InfoBox>
        <InputBox>
          <Label htmlFor="">სახელი</Label>
          <InputIconBox
            style={{
              border:
                isSubmitClicked && errors.name
                  ? "1px solid #EF5050"
                  : isSubmitClicked && !errors.name
                  ? "1px solid #98E37E"
                  : "1px solid #BCBCBC",
            }}
          >
            <Input type="text" {...register("name", { required: true })} />
            <img
              style={{
                display: !errors.name ? "block" : "none",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-30px",
                display: errors.name ? "block" : "none",
              }}
              src={red}
              alt=""
            />
          </InputIconBox>

          <p>მინიმუმ 2 ასო, ქართული ასოები</p>
        </InputBox>

        <InputBox>
          <Label htmlFor="">გვარი</Label>
          <InputIconBox
            style={{
              border:
                isSubmitClicked && errors.lastName
                  ? "1px solid #EF5050"
                  : isSubmitClicked && !errors.lastName
                  ? "1px solid #98E37E"
                  : "1px solid #BCBCBC",
            }}
          >
            <Input type="text" {...register("lastName", { required: true })} />
            <img
              style={{
                display: !errors.lastName ? "block" : "none",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-30px",
                display: errors.lastName ? "block" : "none",
              }}
              src={red}
              alt=""
            />
          </InputIconBox>
          <p>მინიმუმ 2 ასო, ქართული ასოები</p>
        </InputBox>
      </InfoBox>

      <InfoBox>
        <p>პირადი ფოტოს ატვირთვა</p>
        <div style={{ position: "relative" }}>
          <InputIconBox
            style={{
              zIndex: 2,
              position: "relative",
              opacity: 0,
            }}
          >
            <Input
              type="file"
              name="ფოტო"
              {...register("image", { required: true })}
            />
          </InputIconBox>

          <p
            style={{
              position: "absolute",
              top: 0,
              left: 50,
              backgroundColor: "pink",
              zIndex: 1,
              textAlign: "center",
              width: 107,
              height: 27,
              background: "#0E80BF",
              borderRadius: 4,
              color: "#fff",
            }}
          >
            ატვირთვა
          </p>
        </div>
      </InfoBox>

      <InfoBox>
        <InputBox>
          <Label>ჩემ შესახებ (არასავალდებულო)</Label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            style={{
              border: "1px solid #BCBCBC",
              borderRadius: " 4px",
              width: "100%",
              height: "100%",
            }}
            value="ზოგადი ინფო შენ შესახებ"
            {...register("aboutMe")}
          ></textarea>
        </InputBox>
      </InfoBox>
      <InfoBox>
        <InputBox>
          <Label>ელ.ფოსტა</Label>
          <InputIconBox
            style={{
              border:
                isSubmitClicked && errors.email
                  ? "1px solid #EF5050"
                  : isSubmitClicked && !errors.email
                  ? "1px solid #98E37E"
                  : "1px solid #BCBCBC",
            }}
          >
            <Input type="email" {...register("email", { required: true })} />
            <img
              style={{
                display: !errors.email ? "block" : "none",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-30px",
                display: errors.email ? "block" : "none",
              }}
              src={red}
              alt=""
            />
          </InputIconBox>

          <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
        </InputBox>
      </InfoBox>

      <InfoBox>
        <InputBox>
          <Label>მობილურის ნომერი</Label>
          <InputIconBox
            style={{
              border:
                isSubmitClicked && errors.number
                  ? "1px solid #EF5050"
                  : isSubmitClicked && !errors.number
                  ? "1px solid #98E37E"
                  : "1px solid #BCBCBC",
            }}
          >
            <Input type="tel" {...register("number", { required: true })} />
            <img
              style={{
                display: !errors.number ? "block" : "none",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-30px",
                display: errors.number ? "block" : "none",
              }}
              src={red}
              alt=""
            />
          </InputIconBox>

          <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
        </InputBox>
      </InfoBox>

      <InfoBox>
        <SubmitButton type="submit">ᲨᲔᲛᲓᲔᲒᲘ</SubmitButton>
      </InfoBox>
    </Form>
  );
}
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
  border: 1px solid red;
`;
const InputBox = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px 24px;
`;
const InputIconBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background: #ffffff;
`;
const Input = styled.input`
  width: 90%;
  height: 48px;
  background: rgba(255, 255, 255, 0);
  border: none;
  outline: none;
`;
const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;
const SubmitButton = styled.button`
  width: 151px;
  height: 48px;
  background-color: #6b40e3;
  color: #fff;
  border-radius: 4px;
  border: none;
`;
