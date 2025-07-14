import logo from "../assets/logo.svg";
import { AuthBtn } from "./AuthBtn";

export function Header() {
  return (
    <header className="flex justify-between items-center py-2">
      <img src={logo} alt="" className="h-10 w-10"/>
      <AuthBtn />
    </header>
  );
}
