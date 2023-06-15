import GaleriaImage from "/public/assets/galeria.png";
import PearsonHardmanImage from "/public/assets/pearsonHardam.png";
import CoffeeDeliveryImage from "/public/assets/CapaCoffeeDelivery.png";
import GitHubBlogImage from "/public/assets/GitHubCapa.png";
import TaskListImage from "/public/assets/tasklistcapa.png";
import IgniteTimerImage from "/public/assets/Ignite-timer.png";
import IgniteShopImage from "/public/assets/Ignite-Shop.png";
import IgniteCallImage from "/public/assets/ignite-call.png";
import IgniteFeedImage from "/public/assets/ignite-feed.png";
import SpotifyTailwindcssImage from "/public/assets/spotify-tailwindcss.png";
import PrevTempoImage from "/public/assets/prev-tempo.png";

import { v4 as uuid } from "uuid";

export const projectsData = [
  {
    id: uuid(),
    title: "Ignite Call",
    image: IgniteCallImage,
    technologies: ["NextJS", "TypeScript", "Prisma"],
    repo: "https://github.com/sergiowinkelstroter/ignite-call",
    demo: "https://ignite-call-wink.vercel.app/",
  },
  {
    id: uuid(),
    title: "Coffee Delivery",
    image: CoffeeDeliveryImage,
    technologies: ["ReactJS", "TypeScript", "Styled-Components"],
    repo: "https://github.com/sergiowinkelstroter/coffee-delivery",
    demo: "https://coffee-delivery-rho-ten.vercel.app/",
  },
  {
    id: uuid(),
    title: "ToDo List",
    image: TaskListImage,
    technologies: ["ReactJS", "CSS", "TypeScript"],
    repo: "https://github.com/sergiowinkelstroter/ToDo-List",
    demo: "https://todo-list-ignitee.vercel.app/",
  },
  {
    id: uuid(),
    title: "Ignite Shop",
    image: IgniteShopImage,
    technologies: ["NextJS", "TypeScript", "Stitches-React"],
    repo: "https://github.com/sergiowinkelstroter/ignite-shop",
    demo: "https://ignite-shop-sw.vercel.app/",
  },
  {
    id: uuid(),
    title: "GitHub Blog",
    image: GitHubBlogImage,
    technologies: ["ReactJS", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/sergiowinkelstroter/github-blog",
    demo: "https://github-blog-roan.vercel.app/",
  },
  {
    id: uuid(),
    title: "Ignite Timer",
    image: IgniteTimerImage,
    technologies: ["ReactJS", "TypeScript", "Styled-Components"],
    repo: "https://github.com/sergiowinkelstroter/ignite-timer",

    demo: "https://ignite-timer-gray.vercel.app/",
  },
  {
    id: uuid(),
    title: "Ignite Feed",
    image: IgniteFeedImage,
    technologies: ["ReactJS", "TypeScript", "CSS"],
    repo: "https://github.com/sergiowinkelstroter/ignitee-feed",

    demo: "https://ignitee-feed.vercel.app/",
  },
  {
    id: uuid(),
    title: "Pearson Hardman",
    image: PearsonHardmanImage,
    technologies: ["HTML", "JavaScript", "CSS"],
    repo: "https://github.com/sergiowinkelstroter/FrontWeek-PearsonHardman",
    demo: "https://pearson-hardman-winkelstrotersergio.vercel.app/",
  },
  {
    id: uuid(),
    title: "Galeria de fotos",
    image: GaleriaImage,
    technologies: ["ReactJS", "TypeScript", "Firebase", "Styled-Components"],
    repo: "https://github.com/sergiowinkelstroter/gallery",
    demo: "https://gallery-tan-nu.vercel.app/",
  },
  {
    id: uuid(),
    title: "Spotify Tailwindcss",
    image: SpotifyTailwindcssImage,
    technologies: ["NextJS", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/sergiowinkelstroter/spotify-tailwindcss",
    demo: "https://spotify-tailwindcss.vercel.app/",
  },
  {
    id: uuid(),
    title: "Previsão do tempo",
    image: PrevTempoImage,
    technologies: ["ReactJS", "TailwindCSS", "Vite"],
    repo: "https://github.com/sergiowinkelstroter/prev-tempo",
    demo: "https://prev-tempo-sage.vercel.app/",
  },
];
