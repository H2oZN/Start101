export default function MathS() {
  const Name = "H2o";
  const Mid = 20;
  const Final = 30;
  return (
    <div className="text-3xl text-amber-200 non-italic text-center underline font-mono leading uppercase w-200 m-10">
      <h1>Student Score</h1>
      <h3>{Name}</h3>
      <p>total Score = {Mid + Final}</p>
    </div>
  );
}
