export type Variant = keyof typeof variants;
export type BoxSize = keyof typeof boxSizes;

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  boxSize?: BoxSize;
  className?: string;
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