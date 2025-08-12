export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  boxSize?: keyof typeof boxSizes;
  width?: keyof typeof widths;
}

export default function Button({
  children,
  variant = "primary",
  boxSize = "sm",
  width = "full",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`btn ${variants[variant]} ${boxSizes[boxSize]} ${widths[width]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}

const variants = {
  primary: "bg-main__primary-300",
  secondary: "bg-other__paper",
  tertiary: "bg-other__extra border border-other__outline-border/23",
  tertiaryTransparent: "bg-transparent border border-other__outline-border/23",
  transparent: "bg-transparent border border-text__light-secondary__b",
} as const;

const boxSizes = {
  sm: "h-6.5 lg:h-11.5 py-1.5 px-2.5",
  md: "h-7 lg:h-12 py-2 px-3",
  lg: "h-7.5 lg:h-12.5 py-2 px-3",
} as const;

const widths = {  
  full: "w-full",
  fit: "w-fit",
} as const;
