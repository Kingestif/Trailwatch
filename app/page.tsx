import Herosection from "./ui/Herosection";
import Navbar from "./ui/Navbar"
import ServicePage from "./ui/ServicePage";
import Streamers from "./ui/Streamers";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="Landing h-screen px-50 flex flex-col">
        <Navbar/>
        <Herosection/>
        <Streamers/>
      </div>
      <ServicePage/>
    </div>
  );
}