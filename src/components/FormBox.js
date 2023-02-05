import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

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
          <Input
            style={{
              border:
                isSubmitClicked && errors.name
                  ? "1px solid #EF5050"
                  : isSubmitClicked && !errors.name
                  ? "1px solid #98E37E"
                  : "1px solid #BCBCBC",
            }}
            type="text"
            {...register("name", { required: true })}
          />
          <p>მინიმუმ 2 ასო, ქართული ასოები</p>
        </InputBox>

        <InputBox>
          <Label htmlFor="">გვარი</Label>
          <Input
            style={{
              border:
                isSubmitClicked && errors.lastName
                  ? "1px solid #EF5050"
                  : isSubmitClicked && !errors.lastName
                  ? "1px solid #98E37E"
                  : "1px solid #BCBCBC",
            }}
            type="text"
            {...register("lastName", { required: true })}
          />
          <p>მინიმუმ 2 ასო, ქართული ასოები</p>
        </InputBox>
      </InfoBox>

      <InfoBox>
        <p>პირადი ფოტოს ატვირთვა</p>
        <div style={{ position: "relative" }}>
          <Input
            type="file"
            name="ფოტო"
            style={{
              zIndex: 2,
              position: "relative",
              opacity: 0,
            }}
            {...register("image", { required: true })}
          />
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
          <Input
            style={{
              border:
                isSubmitClicked && errors.email
                  ? "1px solid #EF5050"
                  : isSubmitClicked && !errors.email
                  ? "1px solid #98E37E"
                  : "1px solid #BCBCBC",
            }}
            type="email"
            {...register("email", { required: true })}
          />
          <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
        </InputBox>
      </InfoBox>

      <InfoBox>
        <InputBox>
          <Label>მობილურის ნომერი</Label>
          <Input
            style={{
              border:
                isSubmitClicked && errors.number
                  ? "1px solid #EF5050"
                  : isSubmitClicked && !errors.number
                  ? "1px solid #98E37E"
                  : "1px solid #BCBCBC",
            }}
            type="tel"
            {...register("number", { required: true })}
          />
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
const Input = styled.input`
  height: 48px;
  background: #ffffff;

  border-radius: 4px;
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
