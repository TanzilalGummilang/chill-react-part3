import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";

interface AuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xs lg:max-w-lg bg-other__black/84 rounded-2xl p-6 lg:p-10 space-y-6 lg:space-y-8">
        <div className="w-full flex items-center justify-center">
          <img src="/images/logo.png" alt="Chill Movies Series" className="h-6 lg:h-11 w-auto" />
        </div>
        <div className="text-center">
          <Heading level="h3" className="lg:mb-2">{title}</Heading>
          <Paragraph>{description}</Paragraph>
        </div>
        {children}
      </div>
    </section>
  )
}
