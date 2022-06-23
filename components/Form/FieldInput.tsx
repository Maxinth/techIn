import { IRole } from "../../common/interfaces";
import { FieldBox, InputBox, Label, Option, SelectBox } from "./styled";

export interface IFieldProps {
  type?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  options?: IRole[];
}

const FieldInput = ({
  type = "input",
  value,
  label,
  placeholder,
  options = [],
}: IFieldProps) => {
  return (
    <FieldBox type={type}>
      <Label>{label}</Label>
      {(type === "input" || type === "password") && (
        <InputBox value={value} type={type} placeholder={placeholder} />
      )}
      {type === "select" && (
        <SelectBox value={value}>
          {options?.map((item: IRole) => (
            <Option key={item?.name}>{item?.name}</Option>
          ))}
        </SelectBox>
      )}
    </FieldBox>
  );
};

export default FieldInput;
