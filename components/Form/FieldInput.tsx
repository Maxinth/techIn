import { IRole } from "../../common/interfaces";
// import { ISignData } from "../../pages/signup";
import { FieldBox, InputBox, Label, Option, SelectBox } from "./styled";

export interface IFieldProps {
  type?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  options?: IRole[];
  id?: string;
  name?: string;
  // ref?: <ISignData>;
}

const FieldInput = ({
  type = "input",
  value,
  label,
  placeholder,
  options = [],
  id,
  ...rest
}: IFieldProps) => {
  return (
    <FieldBox type={type}>
      <Label htmlFor={id}>{label}</Label>
      {(type === "input" || type === "password") && (
        <InputBox type={type} placeholder={placeholder} id={id} {...rest} />
      )}
      {type === "select" && (
        <SelectBox id={id} {...rest}>
          {options?.map((item: IRole) => (
            <Option key={item?.name}>{item?.name}</Option>
          ))}
        </SelectBox>
      )}
    </FieldBox>
  );
};

export default FieldInput;
