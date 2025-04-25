import Custom from "@/Components/Custom";
import MathS from "@/Components/MathS";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Student from "@/Components/Student";
import Darkmode from "@/Components/dark-mode";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen min-w-full mx-auto">
      <div className=" mt-5 text-base font-medium tracking-tight ">
        Student Lists
      </div>
      <Student id="1001" name="Neymar" age="34" />
      <Student id="1002" name="Ronaldo" age="50" />
      <Student id="1003" name="Messi" age="20" />
      <Darkmode />
    </div>
  );
}
