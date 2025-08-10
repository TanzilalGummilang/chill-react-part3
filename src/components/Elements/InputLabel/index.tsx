import Input from "./Input";
import Label from "./Label";
import type { BoxSize } from "./types";

interface InputLabelProps {
  label: string;
  name: string;
  type?: string;
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  boxSize?: BoxSize;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export default function InputLabel({
  label,
  name,
  type,
  value = "",
  onChange,
  placeholder,
  boxSize = "sm",
  wrapperClassName,
  labelClassName,
  inputClassName
}: InputLabelProps) {
  return (
    <div className={`${wrapperClassName ?? ""}`.trim()}>
      <Label
        htmlFor={name}
        className={`mb-0.5 lg:mb-1 ${labelClassName ?? ""}`.trim()}
      >
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        boxSize={boxSize}
        className={inputClassName ?? ""}
      />
    </div>
  )
}