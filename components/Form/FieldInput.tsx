import { FieldBox, InputBox, Label, Option, SelectBox } from "./styled";

export interface IFieldProps {
  type?: string;
  value?: string;
  placeholder?: string;
  label?: string;
}

const FieldInput = ({
  type = "input",
  value,
  label,
  placeholder,
}: IFieldProps) => {
  return (
    <FieldBox type={type}>
      <Label>{label}</Label>
      {(type === "input" || type === "password") && (
        <InputBox value={value} type={type} placeholder={placeholder} />
      )}
      {type === "select" && (
        <SelectBox value={value}>
          <Option>text</Option>
        </SelectBox>
      )}
    </FieldBox>
  );
};

export default FieldInput;
