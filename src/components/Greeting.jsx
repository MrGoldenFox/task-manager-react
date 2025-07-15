export function Greeting() {
  let name = "Boss";

  return (
    <div className="my-5">
      <h1 className="text-5xl">
        Hi! <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-extrabold">{name}</span>
      </h1>
      <p className="font-medium">Plan your day easily 😼</p>
    </div>
  );
}
