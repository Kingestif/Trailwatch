export default function CTA() {
  return (
    <div className="flex px-50 items-center py-20">
      <div className="w-100 h-100  flex justify-center">
        <img src="/groot2crop.png" className="w-full h-full object-contain filter brightness-75" alt="" />
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <div className=" text-4xl font-bold">Join now to stream movies instantly on any device.</div>
          <div className="text-2xl text-gray-400">Thousands of Movies. One Click Away.</div>
        </div>
        <div className="text-lg bg-primary w-fit rounded-full px-4 py-2 font-semibold">Start watching</div>
      </div>
    </div>
  )
}