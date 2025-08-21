import { Link, useNavigate } from "react-router";
import Button from "../../Elements/Button";
import Input from "../../Elements/Input";
import Paragraph from "../../Elements/Paragraph";
import { useState } from "react";
import { register } from "../../../services/auth";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const inputStyle = "mb-3 lg:mb-6";
  
  async function handleRegister(event?: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    if (await register({ username, password, confirmPassword })) {
      alert("Register berhasil! Silakan login.");
      navigate("/login");
    } else {
      alert("Gagal mendaftar.");
    }
  };
  
  return (
    <form onSubmit={handleRegister}>
      <Input
        id="username"
        label="Username"
        name="username"
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Masukan username"
        boxSize="lg"
        autoComplete="username"
        className={inputStyle}
      />
      <Input
        id="password"
        label="Kata Sandi"
        name="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Masukan kata sandi"
        boxSize="lg"
        autoComplete="current-password"
        className={inputStyle}
      />
      <Input
        id="confirm-password"
        label="Konfirmasi Kata Sandi"
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder="Masukan kata sandi"
        boxSize="lg"
        autoComplete="new-password"
      />
      <Paragraph className="text-start mt-1 lg:mt-2 mb-6 lg:mb-8">
        <span className="text-text__light-secondary__b">Sudah punya akun? </span>
        <Link to={"/login"}>Masuk</Link>
      </Paragraph>
      <Button type="submit" variant="tertiary" boxSize="lg">Daftar</Button>
      <Paragraph className="text-center text-text__light-secondary__b my-2">Atau</Paragraph>
      <Button
        type="submit"
        variant="tertiaryTransparent"
        boxSize="md"
        className="flex items-center justify-center gap-2 lg:gap-4 w-full"
      >
        <img src="/images/google.png" alt="google" className="h-2.5 lg:h-5 w-auto" />
        Daftar dengan Google
      </Button>
    </form>
  )
}
