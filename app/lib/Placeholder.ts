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

type socials = {
  imageUrl:string,
  url:string

}

export const socialLinks:socials[] = [
  {
    imageUrl: "/github1.png",
    url:"https://github.com/Kingestif"
  },
  {
    imageUrl: "/telegram1.png",
    url:"https://t.me/estifo_z"
  },
  {
    imageUrl: "/linkedin1.png",
    url:"https://www.linkedin.com/in/estif/"
  },
  {
    imageUrl: "/medium.png",
    url:"https://medium.com/@estifanos"

  },
  {
    imageUrl: "/dribble.png",
    url: "https://dribbble.com/estif_z"
  }
]

type contacts = {
  icon:string,
  detail:string
}

export const contactData:contacts[] = [
  {
    icon: "/call.png",
    detail:"+251-942-143-127"
  },
  {
    icon: "/email.png",
    detail:"kingestiff@gmail.com"
  },
  {
    icon: "/location.png",
    detail:"Addis Ababa, Ethiopia"
  }
]

type MovieGallary = {
  name: string
  description: string
  rating: string
  year:string
}

export const MovieGallaryData: MovieGallary[] = [
  {
    name: "Galactic Odyssey",
    description: "A crew of astronauts embark on a perilous journey across the stars to save humanity from an impending cosmic threat.",
    rating: "8.7",
    year:"2015"
  },
  {
    name: "Nebula Nights",
    description: "In a distant galaxy, a young explorer discovers secrets of a forgotten civilization hidden among the stars.",
    rating: "7.9",
    year:"2017"
  },
  {
    name: "Stellar Horizons",
    description: "An interstellar adventure filled with action, romance, and the challenges of space travel.",
    rating: "8.3",
    year:"2021"
  },
  {
    name: "Cosmic Drift",
    description: "A lone pilot must navigate through uncharted galaxies to prevent a catastrophic intergalactic war.",
    rating: "8.0",
    year:"2024"
  },
  {
    name: "Orbit Rebels",
    description: "A band of space outlaws takes on a corrupt galactic empire, facing danger and betrayal at every turn.",
    rating: "7.5",
    year:"1994"
  },
  {
    name: "Astro Legends",
    description: "Legends of the cosmos unfold as heroes rise to battle interstellar threats beyond imagination.",
    rating: "8.2",
    year:"2000"
  },
  {
    name: "Meteor Strike",
    description: "When a massive meteor threatens Earth, a team of scientists and astronauts must stop it before it’s too late.",
    rating: "7.8",
    year:"2015"
  },
  {
    name: "Quantum Leap",
    description: "A daring experiment in space-time travel goes wrong, sending a scientist across multiple dimensions.",
    rating: "8.1",
    year:"2025"
  },
  {
    name: "Supernova Rising",
    description: "A young pilot must confront her past and save her crew as a supernova threatens their sector of the galaxy.",
    rating: "8.4",
    year:"1999"
  },
  {
    name: "Eclipse of Infinity",
    description: "A mysterious signal from a distant star leads an expedition to uncover the secrets of an ancient alien race.",
    rating: "7.9",
    year:"2019"
  }
]