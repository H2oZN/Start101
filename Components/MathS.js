import React from "react";
import classes from "@/Components/Maths.modules.css";

export default function MathS() {
  const Name = "H2o";
  const Mid = 20;
  const Final = 30;
  return (
    <div className="classes.container">
      <h1>Student Score</h1>
      <h3>{Name}</h3>
      <p>total Score = {Mid + Final}</p>
    </div>
  );
}
