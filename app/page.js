import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HomePage from "@/Components/HPCC";

// import MyParent from "@/Components/MyParent";
// import Dice from "@/Components/Dice";
// import Plist from "@/Components/Plist";
// import Allproduct from "@/Components/Allproduct";
// import ChangeLa from "@/Components/ChangeLA";
// import Button from "@/Components/Button";
// import ButtonSet from "@/Components/Buttonusestate";

export default function Home() {
  return (
    <div>
      <Header />
      <body>
        <div>
          <div className="flex flex-col justify-center items-center min-h-screen ">
            {/* <Allproduct /> */}
            {/* <MyWrap>Hello</MyWrap>
            <MyWrap>This is my world</MyWrap> */}
            {/* <Button/>
            <ButtonSet/> */}
            {/* <ChangeLa/> */}
            {/* <Dice/> */}
            {/* <Plist/> */}
            {/* <MyParent/> */}
            <HomePage/>
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
}
