import Herosection from "./ui/Herosection";
import Navbar from "./ui/Navbar"

export default function Home() {
  return (
    <div>
      <div className="Landing h-screen px-50">
        <Navbar/>
        <Herosection/>
      </div>
    </div>
  );
}