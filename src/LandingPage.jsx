import React from "react";
import Skateboard from "./assets/Skateboard.png";
import Shoes from "./assets/Shoes.png";
import { CgArrowLongRight } from "react-icons/cg";


function LandingPage() {

  const ScrollToTicket = ()=>{
    let TickPage = document.getElementById("TicketPage");
    if(TickPage){
      TickPage.scrollIntoView({ behavior: "smooth" });
    }
    
  }

  return (
    <div className="h-screen w-full flex flex-row">
      <div className=" hover:w-[80%] ease-in duration-700 w-1/2 h-full flex justify-center items-center bg-[#1293D3]  ">
        
        <div className="img absolute w-[40%] h-[40%] -translate-y-[50%] z-0">
          <img src={Skateboard} alt="" srcset="" />
        </div>
        <div className="texts z-10 gap-10 w-[30%] text-center text-white flex flex-col  h-[50%] absolute">
          <h1 className=" uppercase italic text-lg ">cruiser skateboard</h1>
          <h1 className=" uppercase italic font-extrabold text-[80px] leading-none ">
            mmm ahhh
            <br />
            ..push it!
          </h1>
          <h1 className=" font-semibold text-black">
          Interdum et malesuada fames ac ante ipsum primis faucibus. Integer id nisi nec nulla luctus lacinia non en turpis.
          </h1>
          
        </div>
        <div className="button absolute translate-y-[330px] text-white w-full flex justify-center">    
          <button onClick={ScrollToTicket} className=" w-56 h-12 flex gap-2 mt-3 items-center justify-center backdrop-blur-sm rounded-3xl border-slate-50 border-2 ">
            Discover More <CgArrowLongRight size={30} className="" />{" "}
          </button>
          </div>
      </div>
      <div className=" w-1/2 hover:w-[80%] ease-in duration-700 h-full flex justify-center items-center bg-[#F69C09] ">
        <div className="img absolute z-0">
          <img src={Shoes} alt="" srcset="" />
        </div>
        <div className="texts z-10 gap-10 w-[30%] text-white flex flex-col h-[50%] absolute">
          <h1 className=" uppercase italic text-xl ">
            adidas pharrell williams tennis hu
          </h1>
          <h1 className=" uppercase italic font-extrabold text-[60px] lg:text-[70px] leading-none ">
            because <br />
            i'm happy <br />
            again
          </h1>
          <h1 className=" font-semibold text-black">
            Vestibulum aliquaam hendrerit molesite. Mauris malesuada nisi sit
            amet augue accumasan tincidunt.
          </h1>
          
        </div>
        <div className="button translate-y-[330px] text-white w-full flex justify-center">    
          <button onClick={ScrollToTicket} className=" w-56 h-12 flex gap-2 mt-3 items-center justify-center backdrop-blur-sm rounded-3xl border-slate-50 border-2 ">
            Discover More <CgArrowLongRight size={30} className="" />{" "}
          </button>
          </div>
      </div>
    </div>
  );
}

export default LandingPage;
