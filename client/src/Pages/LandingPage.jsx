import AboutUs from "../Components/AboutUs"
import Footer from "../Components/Helpers/Footer"
import Navbar from "../Components/Helpers/Navbar"
import Hero from "../Components/Hero"
import Products from "../Components/Products"
import Purpose from "../Components/Purpose"
import { heroImg } from "../data/hero"


function LandingPage() {
  return (
    <div className="">
        <Navbar />

        <div className="mt-[70px]">
          <Hero data={heroImg} info={false} banner={true} />
        </div>
        
        <div className="page flex flex-col items-center">

          <div className="w-[50%] small-pc:w-[70%] tablet:w-[70%] phone:w-[95%] mt-[6rem]">
            <AboutUs />
          </div>

          <div className="w-[50%] small-pc:w-[70%] tablet:w-[70%] phone:w-[95%] mt-[6rem]">
            <Purpose />
          </div>

          <div className="w-[50%] small-pc:w-[70%] tablet:w-[70%] phone:w-[95%] mt-[6rem] mb-[5em]">
            <Products />
          </div>

        </div>

        <Footer />
    </div>
  )
}

export default LandingPage