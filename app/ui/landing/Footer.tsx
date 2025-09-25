import { contactData, socialLinks } from "@/app/lib/Placeholder";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#3e3e3e] flex flex-col px-50 py-10 gap-10 max-sm:px-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5 max-sm:hidden">
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
        <div className="text-gray-300 flex flex-col gap-4 max-sm:gap-2">
          <div className="text-white text-2xl font-semibold max-sm:text-sm">About us</div>
          <div className="flex flex-col gap-3 text-lg max-sm:text-sm">
            <div>Learn</div>
            <div>Blog</div>
            <div>FAQ</div>
            <div>Help</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-semibold max-sm:text-sm">Contact me</div>
            <div className="flex flex-col gap-2">
              {contactData.map(item=>(
                <div key={item.icon} className="flex gap-3 max-sm:items-center">
                  <Image width={30} height={30} className="max-sm:w-5 max-sm:h-5" src={item.icon} alt="" />
                  <div className="text-gray-300 text-lg max-sm:text-sm">{item.detail}</div>
                </div>
              ))}
            </div>
        </div>
      </div>

      <hr className="text-gray-400" />
      <div className="flex justify-between items-center">
        <div className="max-sm:hidden">
          <div>Terms of service</div>
          <div>Made with 🤍 in Ethiopia</div>
        </div>
        <div className="max-sm:text-gray-300">© 2025 Trailwatch. All rights reserved.</div>
      </div>
    </div>
  )
}