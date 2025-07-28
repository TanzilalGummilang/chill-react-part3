import type { InputProps } from "./types";
import { variants, boxSizes } from "./types";

export default function Input({
  type = "text",
  variant = "primary",
  boxSize = "sm",
  className,
  ...rest
}: InputProps) {  
  const isPassword = type === "password";
  return (
    <div className="relative">
      <input
        className={`w-full px-3 lg:px-5 leading-0 ${variants[variant]} ${boxSizes[boxSize]} ${className ?? ""}`.trim()}
        {...rest}
      />
      {isPassword && renderPasswordIcon()}
    </div>
  );
}

function renderPasswordIcon() {
  return (
    <div className="absolute right-3 lg:right-5 top-2 lg:top-4 cursor-pointer">
      <img src="/images/eye-off.svg" alt="Invisible" className="h-3 lg:h-5 w-auto" />
    </div>
  );
}
