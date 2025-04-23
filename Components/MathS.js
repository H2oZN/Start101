import React from "react";

export default function MathS() {
  const Name = "H2o";
  const Mid = 20;
  const Final = 30;
  return (
    <div className="container">
      <h1>Student Score</h1>
      <h3>{Name}</h3>
      <p>total Score = {Mid + Final}</p>
    </div>
  );
}
