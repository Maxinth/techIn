/* eslint-disable react/display-name */
import { IRole } from "../../common/interfaces";
import { ISignData } from "../../pages/signup";
import {
  FieldError,
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import {
  FieldBox,
  InputBox,
  Label,
  Option,
  SelectBox,
  ErrorBox,
} from "./styled";
// import {useRef} from 'react'
import React from "react";
type FormVal = "email" | "fullName" | "password" | "userType";

interface IMessage {
  message: string;
}
export interface IFieldProps {
  type?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  options?: IRole[];
  id?: FormVal;
  errorMessage?: string;
  register?: UseFormRegister<ISignData>;
}

const FieldInput = ({
  type = "input",
  label,
  placeholder,
  options = [],
  id,
  register,
  errorMessage,
}: IFieldProps) => {
  return (
    <FieldBox type={type}>
      <Label htmlFor={id}>{label}</Label>
      {(type === "text" || type === "password" || type === "email") && (
        <InputBox
          type={type}
          placeholder={placeholder}
          id={id}
          {...register?.(id as FormVal)}
        />
      )}
      {type === "select" && (
        <SelectBox id={id} {...register?.(id as FormVal)}>
          {options?.map((item: IRole) => (
            <Option key={item?.name}>{item?.name}</Option>
          ))}
        </SelectBox>
      )}

      {errorMessage && <ErrorBox>{errorMessage}</ErrorBox>}
    </FieldBox>
  );
};

export default FieldInput;
