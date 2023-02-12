import styled from "styled-components";
import green from "../images/green-icon.png";
import red from "../images/red-icon.png";

export default function FormBox(props) {
  return (
    <Form onSubmit={props.handleSubmit(props.onSubmit)}>
      <InfoBox>
        <InputBox>
          <Label htmlFor="">სახელი</Label>
          <InputIconBox
            style={{
              border: props.name
                ? "1px solid #EF5050"
                : props.name == undefined
                ? "1px solid #98E37E"
                : "1px solid #BCBCBC",
            }}
          >
            <Input type="text" {...props.registerName} />

            <img
              style={{
                display: props.name ? "none" : "block",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-50px",
                display: props.name ? "block" : "none",
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
              border: props.surname ? "1px solid #EF5050" : "1px solid #98E37E",
            }}
          >
            <Input type="text" {...props.registerSurname} />
            <img
              style={{
                display: props.surname ? "none" : "block",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-50px",
                display: props.surname ? "block" : "none",
              }}
              src={red}
              alt=""
            />
          </InputIconBox>
          <p>მინიმუმ 2 ასო, ქართული ასოები</p>
        </InputBox>
      </InfoBox>

      <InfoBox style={{ paddingLeft: 30 }}>
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
              {...props.registerImage}
              onChange={props.handleChange}
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
        <InputBox style={{ width: "100%" }}>
          <Label style={{ marginBottom: 10 }}>
            ჩემ შესახებ (არასავალდებულო)
          </Label>
          <Textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="ზოგადი ინფო შენ შესახებ"
            {...props.registerAboutMe}
            onInput={props.onInput}
          ></Textarea>
        </InputBox>
      </InfoBox>
      <InfoBox>
        <InputBox>
          <Label>ელ.ფოსტა</Label>
          <InputIconBox
            style={{
              border: props.email ? "1px solid #EF5050" : "1px solid #98E37E",
            }}
          >
            <Input
              type="email"
              {...props.registerEmail}
              onFocus={props.onFocusEmail}
            />
            <img
              style={{
                display: props.email ? "none" : "block",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-50px",
                display: props.email ? "block" : "none",
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
              border: props.phoneNumber
                ? "1px solid #EF5050"
                : "1px solid #98E37E",
            }}
          >
            <Input
              type="tel"
              {...props.registerPhoneNumber}
              onFocus={props.onFocusTel}
            />
            <img
              style={{
                display: props.phoneNumber ? "none" : "block",
              }}
              src={green}
              alt=""
            />
            <img
              style={{
                marginRight: "-50px",
                display: props.phoneNumber ? "block" : "none",
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

const Textarea = styled.textarea`
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  padding: 13px 16px;
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
const InfoBox = styled.div`
  width: 100%;
  height: 122px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  padding: 8px 24px;
`;
const InputIconBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #bcbcbc;
  padding: 0 16px;
`;
const Input = styled.input`
  width: 90%;
  height: 48px;
  background: rgba(255, 255, 255, 0);
  border: none;
  outline: none;
`;
const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  color: #000000;
  font-family: "HelveticaNeue", sans-serif;
`;
const SubmitButton = styled.button`
  width: 151px;
  height: 48px;
  background-color: #6b40e3;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
