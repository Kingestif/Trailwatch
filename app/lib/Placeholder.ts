type Service = {
  image:string,
  title: string,
  description: string
}

export const ServiceData: Service[] = [
  {
    image: "/service1.webp",
    title:"Trailers",
    description: "Get a sneak peek of what’s hitting the screens next.",
  },

  {
    image: "/service3.webp",
    title: "Recommendations",
    description: "Get personalized movie recommendations tailored to your taste.",
  },

  {
    image: "/service2.webp",
    title: "Ratings",
    description: "Search for any movie and get ratings, cast, trailers, and more all in one place.",
  },
]


type Streamers = {
  icon:string
}

export const StreamData: Streamers[] = [
  {
    icon:"/hbo.png"
  },
  {
    icon:"/social3.webp"
  },
  {
    icon:"/socials4.webp"
  },
  {
    icon:"/social5.webp"
  },
  {
    icon:"/starwars.png"
  }
]
