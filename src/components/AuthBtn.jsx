import google from "../assets/google.svg";

export function AuthBtn() {
  return (
    <button className="border border-[var(--accent-hover)]/30 rounded-4xl py-1.5 px-5 flex justify-center items-center text-base hover:border-[var(--accent-hover)] hover:border-1 hover:shadow-sm shadow-fuchsia-700 gap-1">
      Log-in <img src={google} alt="" />
    </button>
  );
}
