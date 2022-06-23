import { FieldBox, InputBox, Label, Option, SelectBox } from "./styled";

export interface IFieldProps {
  type?: string;
}

const FieldInput = ({ type = "" }: IFieldProps) => {
  return (
    <FieldBox type={type}>
      <Label>Email Address</Label>
      {type === "input" && <InputBox />}
      {type === "select" && (
        <SelectBox>
          <Option>text</Option>
        </SelectBox>
      )}
    </FieldBox>
  );
};

export default FieldInput;
