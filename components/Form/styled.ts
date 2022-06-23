import styled, { css } from "styled-components";
import { IFieldProps } from "./FieldInput";

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
  padding: 0rem 1rem;
  margin-top: 158px;
  max-width: 528px;
  width: 100%;
  transition: padding 0.2s;

  @media (min-width: 900px) {
    padding: 0rem 4rem;
  }
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
const FieldBox = styled.div<IFieldProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 39px;

  ${({ type }) =>
    type === "select" &&
    css`
      margin-bottom: 52px;
    `}
`;

const SelectBox = styled.select`
  padding: 17px 20px;
  width: 100%;
  border: 1px solid #eaeced;
  background-color: #f9fbfc;
`;
const Option = styled.option``;

export { Option, InputBox, Form, Label, FieldBox, Heading, SelectBox };
