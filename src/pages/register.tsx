import RegisterForm from "../components/Fragments/Form/RegisterForm";
import AuthLayout from "../components/Layouts/AuthLayout";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Daftar"
      description="Selamat datang!"
    >
      <RegisterForm />
    </AuthLayout>
  )
}