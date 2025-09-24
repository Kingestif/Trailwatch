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

type testimonial = {
  name:string
  role:string
  imageUrl:string
  text:string
}

export const testimonialData:testimonial[] = [
  {
    name: "Selam Abreha",
    role: "HR",
    imageUrl:"/pf.png",
    text: "Finally, a streaming site that feels fresh and intuitive. The recommendations are spot-on, and the trailers play instantly",
  },

  {
    name:"Bisrat Zinabu",
    role:"Student",
    imageUrl:"/pf2.png",
    text:"The dark, cinematic design makes it feel like I’m already at the theater. It’s my go-to place to watch new releases."
  },
  
  {
    name: "Daniel T.",
    role: "Movie Enthusiast",
    imageUrl: "/pf1.png",
    text: "I love how clean and fast the interface is. I discovered so many hidden gems I’d never seen on other platforms."
  }
]
