import { Link, useNavigate } from "react-router";
import Button from "../../Elements/Button";
import Input from "../../Elements/Input";
import Paragraph from "../../Elements/Paragraph";
import { useState } from "react";
import { login } from "../../../services/auth";
import { useAuth } from "../../../contexts/AuthContext";
export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleLogin = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (login({ username, password })) {
      alert("Login berhasil!");
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Username atau password salah.");
    }
  };
  
  return (
    <form onSubmit={handleLogin}>
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
        className="mb-3 lg:mb-6"
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
      />
      <div className="mt-1 lg:mt-2 mb-6 lg:mb-8 flex justify-between">
        <Paragraph className="text-start">
          <span className="text-text__light-secondary__b">Belum punya akun? </span>
          <Link to={"/register"}>Daftar</Link>
        </Paragraph>
        <Paragraph className="">Lupa kata sandi?</Paragraph>
      </div>
      <Button 
        type="submit" 
        variant="tertiary" 
        boxSize="lg"
      >
        Masuk
      </Button>
      <Paragraph className="text-center text-text__light-secondary__b lg:text-sm my-2">Atau</Paragraph>
      <Button 
        type="submit" 
        variant="tertiaryTransparent" 
        boxSize="md" 
        className="flex items-center justify-center gap-2 lg:gap-4 w-full"
      >
        <img src="/images/google.png" alt="google" className="h-2.5 lg:h-5 w-auto" />
        Masuk dengan Google
      </Button>
    </form>
  )
}
