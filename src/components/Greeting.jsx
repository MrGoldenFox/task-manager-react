export function Greeting() {
  let name = "Boss";

  return (
    <div className="my-5">
      <h1 className="font-semibold text-3xl">
        Hi! <span className="bg-linear-90 from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent font-extrabold">{name}</span>
      </h1>
      <p>
        Plan your day easily 😼
      </p>
    </div>
  );
}
