import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Allproduct from "@/Components/Allproduct";

import Button from "@/Components/Button";
import ButtonSet from "@/Components/Buttonusestate";

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

            <Button/>
            <ButtonSet/>


            
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
}
