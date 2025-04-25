import Dmode from "@/Components/dark-mode";
export default function Page() {
  return (
    <div>
      <div className="flex m-3 justify-between font-extrabold">
        <div>H2o</div>
        <div></div>
        <div>
          <Dmode />
        </div>
      </div>
      <div className="flex justify-evenly m-3 font-medium underline-offset-3">
        <button className="hover:underline ">555</button>
        <button className="hover:underline ">666</button>
        <button className="hover:underline ">222</button>
        <button className="hover:underline ">this button</button>
      </div>
    </div>
  );
}
