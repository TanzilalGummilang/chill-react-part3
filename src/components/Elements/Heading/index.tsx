import type React from "react";
import type { JSX } from "react";

interface HeadingProps {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export default function Heading({
  children,
  level = 'h1',
  className
}: HeadingProps) {
  const Tag = `${level}` as keyof JSX.IntrinsicElements;
  const style = `${className ?? ""}`.trim();
  return (
    <Tag className={style}>
      {children}
    </Tag>
  );
}
