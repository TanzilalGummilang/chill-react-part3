import type { LabelProps } from "./types";

export default function Label({
  htmlFor,
  children,
  className
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${className ?? ""}`.trim()}
    >
      {children}
    </label>
  )
}