interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { }

export default function Label({
  children,
  className = "",
  htmlFor,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-0.5 lg:mb-1 ${className}`.trim()}
    >
      {children}
    </label>
  )
}