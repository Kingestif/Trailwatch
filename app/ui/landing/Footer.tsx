import { contactData, socialLinks } from "@/app/lib/Placeholder";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#3e3e3e] flex flex-col px-50 py-10 gap-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div className="text-3xl font-semibold">Trailwatch</div>
            <div className="text-bg text-gray-400">All in one cinematic experience</div>
          </div>
          <div className="flex gap-4">
            {socialLinks.map(item=>(
              <a key={item.imageUrl} href={item.url} target="_blank">
                <Image width={40} height={40}  src={item.imageUrl} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="text-gray-300 flex flex-col gap-4">
          <div className="text-white text-2xl font-semibold">About us</div>
          <div className="flex flex-col gap-3 text-lg">
            <div>Learn</div>
            <div>Blog</div>
            <div>FAQ</div>
            <div>Help</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-semibold">Contact me</div>
            <div className="flex flex-col gap-2">
              {contactData.map(item=>(
                <div key={item.icon} className="flex gap-3">
                  <Image width={30} height={30} src={item.icon} alt="" />
                  <div className="text-gray-300 text-lg">{item.detail}</div>
                </div>
              ))}
            </div>
        </div>
      </div>

      <hr className="text-gray-400" />
      <div className="flex justify-between items-center">
        <div>
          <div>Terms of service</div>
          <div>Made with 🤍 in Ethiopia</div>
        </div>
        <div>© 2025 Trailwatch. All rights reserved.</div>
      </div>
    </div>
  )
}