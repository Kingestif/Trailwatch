export default function MovieDetail() {
  return (
    <div className="DETAIL bg-gray-500 h-150 pt-20 flex flex-col justify-around">
        <div className="flex flex-col gap-5">
          <div className="text-5xl font-semibold">Movie Name</div>
          <div className="flex gap-2 font-semibold items-center">
            <div className="Details">Drama</div>•
            <div className="Details">2025</div>•
            <div className="Details">1h 47m</div>
          </div>
          <div className="w-130 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui tempora odit expedita assumenda consequatur, corporis hic incidunt error itaque et natus officiis neque? Pariatur delectus qui reiciendis ipsa fugit?</div>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center bg-white text-black px-5 py-2 rounded-full gap-1 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 640 640"><path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"/></svg>
            <div>Play</div>
          </div>
          <div className="flex items-center bg-gray-500 text-white px-5 py-2 rounded-full gap-1 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width={30} fill="white" viewBox="0 0 640 640"><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
            <div>Watchlist</div>
          </div>
        </div>
    </div>
  )
}