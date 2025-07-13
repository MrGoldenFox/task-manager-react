import { useAuth } from "../context/AuthContext";
import { supabase } from "../supabaseClient";
import google from "../assets/google.svg";

export default function AuthBtn() {
  const { user } = useAuth();

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.error("Ошибка входа:", error.message);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  if (!user) {
    return (
      <button
        onClick={signInWithGoogle}
        className="flex items-center gap-2 px-4 py-1 font-normal text-base bg-[var(--accent)] text-[var(--white)] rounded-3xl hover:bg-[var(--accent-2)]"
      >
        Sign In
        <div className="w-8 h-8">
          <img
            src={google}
            alt="Google Icon"
            className="w-full h-full saturate-200"
          />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={signOut}
      className="flex items-center gap-2 px-4 py-1 font-normal text-base bg-[var(--accent)] text-[var(--white)] rounded-3xl hover:bg-[var(--accent-2)]"
    >
      Sign Out
      <div className="w-8 h-8">
        <img
          src={google}
          alt="Google Icon"
          className="w-full h-full saturate-200"
        />
      </div>
    </button>
  );
}