import LoginForm from "../components/Fragments/Form/LoginForm";
import AuthLayout from "../components/Layouts/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Masuk"
      description="Selamat datang kembali!"
    >
      <LoginForm />
    </AuthLayout>
  )
}