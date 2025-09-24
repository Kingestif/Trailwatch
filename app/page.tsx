import CTA from "./ui/CTA";
import Herosection from "./ui/Herosection";
import Navbar from "./ui/Navbar"
import ServicePage from "./ui/ServicePage";
import Streamers from "./ui/Streamers";
import Testimonial from "./ui/Testimonial";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="Landing h-screen px-50 flex flex-col">
        <Navbar/>
        <Herosection/>
        <Streamers/>
      </div>
      <ServicePage/>
      <Testimonial/>
      <CTA/>
    </div>
  );
}