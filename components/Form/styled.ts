import styled from "styled-components";

const InputBox = styled.input`
  /* max-width: 528px; */
  max-height: 52px;
  padding: 18px 20px 19px 20px;
  background-color: #ffffff;
  border: 1px solid #eaeced;
  border-radius: 7px;
  width: 100%;
`;
const Form = styled.form`
  margin: 0 auto;
  padding: 0rem 4rem;
  margin-top: 158px;
  max-width: 528px;
  width: 100%;
  /* overflow: hidden; */
`;

const Heading = styled.h1`
  font-size: 44px;
  line-height: 53.52px;
  letter-spacing: -5%;
  font-weight: 700;
  margin: 0 auto;
  margin-bottom: 48px;
  /* max-width: 528px; */
`;
const Label = styled.label`
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 12px;
  font-weight: 400;
`;
const FieldBox = styled.div`
  width: 100%;
  /* max-width: 528px; */
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export { InputBox, Form, Label, FieldBox, Heading };
