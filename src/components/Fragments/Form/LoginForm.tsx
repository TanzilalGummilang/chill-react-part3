import { Link } from "react-router-dom";
import Button from "../../Elements/Button";
import InputLabel from "../../Elements/InputLabel";
import Paragraph from "../../Elements/Paragraph";
export default function LoginForm() {
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
      <Paragraph className="text-center text-text__light-secondary__b text-sm my-2">Atau</Paragraph>
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

const wrapperClassName = `mb-6 lg:mb-8`;