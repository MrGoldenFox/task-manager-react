import logo from "../assets/logo.svg";
import { AuthBtn } from "./AuthBtn";
import { ThemeBtn } from "./ThemeBtn";

export function Header() {
  const btnStyles =
    "border border-[var(--accent-hover)]/30 rounded-4xl py-1.5 px-5 flex justify-center items-center text-base hover:border-[var(--accent-hover)] hover:border-1 hover:shadow-sm shadow-fuchsia-700 gap-1";

  return (
    <header className="flex justify-between items-center my-5">
      <img src={logo} alt="" className="w-10 h-10" />
      {/* <div className="flex gap-2"> */}
      <ThemeBtn styles={btnStyles} />
      {/* <AuthBtn styles={btnStyles} /> */}
      {/* </div> */}
    </header>
  );
}
