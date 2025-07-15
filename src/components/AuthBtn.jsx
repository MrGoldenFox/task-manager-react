import google from "../assets/google.svg";

export function AuthBtn({ styles }) {
  return (
    <button className={`${styles}`}>
      Log-in <img src={google} alt="" />
    </button>
  );
}
