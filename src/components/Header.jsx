import logo from "../assets/logo.svg";
import AuthBtn from "./AuthBtn";

export default function Header() {
  return (
    <header className="flex justify-between py-4 items-center">
      <img src={logo} alt="" className="w-10 h-10" />
      <AuthBtn />
    </header>
  );
}
