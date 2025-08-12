import { useState } from "react";
import Label from "./Label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: keyof typeof variants;
  boxSize?: keyof typeof boxSizes;
}

export const variants = {
  primary: `text-text__light-secondary__b 
    border border-other__outline-border/23 rounded-xl lg:rounded-3xl outline-none 
    focus:border-other__outline-border/50`,
} as const;

export const boxSizes = {
  sm: "h-6 lg:h-[44px] py-1 px-2 box-border",
  md: "h-7 lg:h-[48px] py-2 px-3 box-border",
  lg: "h-[30px] lg:h-[50px] py-2 px-3 box-border",
} as const;

function renderPasswordIcon(
  showPassword: boolean,
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
) {
  const icon = showPassword
    ? { src: "/images/eye-on.svg", alt: "Visible" }
    : { src: "/images/eye-off.svg", alt: "Invisible" };

  return (
    <div
      onClick={() => setShowPassword(prev => !prev)}
      className="absolute right-2.5 lg:right-5 top-6.5 lg:top-10.5 cursor-pointer">
      <img src={icon.src} alt={icon.alt} className="h-3 lg:h-5 w-auto" />
    </div>
  );
}

export default function Input({
  boxSize = "sm",
  className = "",
  id,
  label,
  type = "text",
  variant = "primary",
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const labelHtml = label ? <Label htmlFor={id}>{label}</Label> : null;
  const isPassword = type === "password";

  return (
    <fieldset className="relative">
      {labelHtml}
      <input
        id={id}
        type={isPassword ? (showPassword ? "text" : "password") : type}
        className={`
          w-full px-3 lg:px-5 leading-0
          ${variants[variant]}
          ${boxSizes[boxSize]}
          ${className}
        `.trim()}
        {...rest}
      />
      {isPassword && renderPasswordIcon(showPassword, setShowPassword)}
    </fieldset>
  );
}