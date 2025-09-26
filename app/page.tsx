import CTA from "./ui/landing/CTA";
import Footer from "./ui/landing/Footer";
import Herosection from "./ui/landing/Herosection";
import Navbar from "./ui/landing/Navbar"
import ServicePage from "./ui/landing/ServicePage";
import Streamers from "./ui/landing/Streamers";
import Testimonial from "./ui/landing/Testimonial";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="Landing h-screen px-50 max-sm:px-10 flex flex-col max-sm:h-fit max-sm:gap-5">
        {/* <Navbar/> */}
        <Herosection/>
        <Streamers/>
      </div>
      <ServicePage/>
      <Testimonial/>
      <CTA/>
      <Footer/>
    </div>
  );
}