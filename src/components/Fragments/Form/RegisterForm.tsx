import { Link } from "react-router-dom";
import Button from "../../Elements/Button";
import InputLabel from "../../Elements/InputLabel";
import Paragraph from "../../Elements/Paragraph";

export default function RegisterForm() {
  return (
    <form>
      <InputLabel
        label="Username"
        name="username"
        type="text"
        placeholder="Masukan username"
        boxSize="lg"
        wrapperClassName={wrapperClassName}
      />
      <InputLabel
        label="Kata Sandi"
        name="password"
        type="password"
        placeholder="Masukan kata sandi"
        boxSize="lg"
        wrapperClassName={wrapperClassName}
      />
      <InputLabel
        label="Konfirmasi Kata Sandi"
        name="confirm-password"
        type="password"
        placeholder="Masukan kata sandi"
        boxSize="lg"
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

const wrapperClassName = `mb-6 lg:mb-8`;
