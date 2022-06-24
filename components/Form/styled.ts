import styled, { css } from "styled-components";
import { IFieldProps } from "./FieldInput";
import Link from "next/link";

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
  margin-bottom: 100px;
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
  text-align: center;
  transition: all 0.2s;
  @media (min-width: 900px) {
    text-align: left;
  }
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

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 20px;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  /* purple */
  font-size: 17px;
  line-height: 21px;
  font-weight: 400;
  color: #ffffff;
  background: #7d5fff;
  border-radius: 6px;
  transition: all 0.2s;
  font-weight: 700;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #7d5fff;
    color: #7d5fff;
    background-color: #fff;
  }
`;
const Option = styled.option``;

const ErrorBox = styled.div`
  font-family: "Inter";
  color: red;
  font-style: italic;
  font-weight: 400;
  width: 100%;
  padding: 9px;
  font-size: 14px;
`;

export {
  Button,
  Option,
  InputBox,
  Form,
  Label,
  FieldBox,
  Heading,
  SelectBox,
  ErrorBox,
};
