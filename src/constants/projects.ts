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
import EmbalaImage from "/public/assets/embala-img.png";

import { v4 as uuid } from "uuid";

export const projectsJS = [
  {
    id: uuid(),
    title: "Pearson Hardman",
    image: PearsonHardmanImage,
    description:
      "Bem-vindo ao universo jurídico intrigante e cheio de reviravoltas da série 'Suits'. Na Pearson Hardman, mergulhe nas complexidades do direito corporativo e das relações interpessoais em um dos escritórios de advocacia mais prestigiados de Nova York. Nossa landing page é dedicada a todos os fãs da série e a todos aqueles que desejam explorar os bastidores da vida de advogados de elite.",
    technologies: ["HTML", "JavaScript", "CSS"],
    repo: "https://github.com/sergiowinkelstroter/FrontWeek-PearsonHardman",
    demo: "https://pearson-hardman-winkelstrotersergio.vercel.app/",
  },
];

export const projectsReact = [
  {
    id: uuid(),
    title: "Coffee Delivery",
    image: CoffeeDeliveryImage,
    description:
      "Bem-vindo ao Coffe Delivery, o seu destino online para o melhor café fresco e delicioso, entregue diretamente à sua porta. Nossa paixão pelo café nos impulsiona a trazer a você uma experiência aromática única, combinando grãos selecionados e um serviço de entrega eficiente para transformar cada momento em um verdadeiro prazer do café.",
    technologies: ["ReactJS", "TypeScript", "Styled-Components"],
    repo: "https://github.com/sergiowinkelstroter/coffee-delivery",
    demo: "https://coffee-delivery-rho-ten.vercel.app/",
  },
  {
    id: uuid(),
    title: "ToDo List",
    image: TaskListImage,
    description:
      "Bem-vindo ao TaDo List, a ferramenta definitiva para organizar sua vida e aumentar sua produtividade. Com nosso aplicativo de lista de tarefas intuitivo, você pode gerenciar suas atividades diárias, definir metas e acompanhar seu progresso, tudo em um só lugar.",
    technologies: ["ReactJS", "CSS", "TypeScript"],
    repo: "https://github.com/sergiowinkelstroter/ToDo-List",
    demo: "https://todo-list-ignitee.vercel.app/",
  },
  {
    id: uuid(),
    title: "GitHub Blog",
    image: GitHubBlogImage,
    description:
      "Bem-vindo ao GitHub Blog, o seu destino para aprender, inspirar-se e conectar-se com a comunidade de desenvolvedores no GitHub. Neste espaço, mergulhamos profundamente no vasto universo do desenvolvimento de software, compartilhando tutoriais, insights, dicas e histórias cativantes diretamente da comunidade GitHub.",
    technologies: ["ReactJS", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/sergiowinkelstroter/github-blog",
    demo: "https://github-blog-roan.vercel.app/",
  },
  {
    id: uuid(),
    title: "Ignite Timer",
    image: IgniteTimerImage,
    description:
      "Bem-vindo ao Ignite Timer, a ferramenta definitiva para maximizar sua produtividade e foco por meio de uma combinação estratégica de períodos de trabalho intenso e intervalos revigorantes. Com nosso aplicativo, você pode otimizar sua rotina de trabalho, alcançar mais tarefas importantes e manter um equilíbrio saudável entre eficiência e bem-estar.",
    technologies: ["ReactJS", "TypeScript", "Styled-Components"],
    repo: "https://github.com/sergiowinkelstroter/ignite-timer",
    demo: "https://ignite-timer-gray.vercel.app/",
  },
  {
    id: uuid(),
    title: "Ignite Feed",
    image: IgniteFeedImage,
    description:
      "Bem-vindo ao Ignite Feed, o seu espaço dedicado a explorar e compartilhar o universo da criatividade. Aqui, você encontrará uma infinidade de ideias, projetos e histórias inspiradoras de criativos de todo o mundo. Conecte-se com uma comunidade vibrante e descubra novas perspectivas que incendiarão sua própria imaginação.",
    technologies: ["ReactJS", "TypeScript", "CSS"],
    repo: "https://github.com/sergiowinkelstroter/ignitee-feed",

    demo: "https://ignitee-feed.vercel.app/",
  },
  {
    id: uuid(),
    title: "Galeria de fotos",
    image: GaleriaImage,
    description:
      "Bem-vindo à Galeria de Fotos, o espaço perfeito para compartilhar e explorar momentos preciosos através de uma galeria de fotos. Com a integração do Firebase, nossa aplicação oferece uma maneira fácil e segura de armazenar, gerenciar e compartilhar suas lembranças fotográficas com amigos e familiares.",
    technologies: ["ReactJS", "TypeScript", "Firebase", "Styled-Components"],
    repo: "https://github.com/sergiowinkelstroter/gallery",
    demo: "https://gallery-tan-nu.vercel.app/",
  },
  {
    id: uuid(),
    title: "ClimaNow",
    image: PrevTempoImage,
    description:
      "Bem-vindo ao ClimaNow, sua fonte confiável para obter informações precisas e atualizadas sobre o clima em qualquer lugar do mundo. Com nossa aplicação, você pode planejar seu dia com antecedência, fazer escolhas informadas e estar preparado para quaisquer condições climáticas.",
    technologies: ["ReactJS", "TailwindCSS", "Vite"],
    repo: "https://github.com/sergiowinkelstroter/prev-tempo",
    demo: "https://prev-tempo-sage.vercel.app/",
  },
];

export const projectsNext = [
  {
    id: uuid(),
    title: "Embala Brasil",
    image: EmbalaImage,
    description:
      "Na Embala Brasil, você encontrará uma ampla gama de opções para embalar seus produtos com eficiência e estilo. Desde sacos e sacolas resistentes, ideais para lojas e estabelecimentos comerciais, até marmitex práticos e produtos específicos para sorvete e geladinho, nossa seleção foi cuidadosamente escolhida para atender às suas necessidades.",
    technologies: ["NextJS", "TypeScript", "TailwindCSS"],
    repo: "https://embalabrasil.online",
    demo: "https://embalabrasil.online",
  },
  {
    id: uuid(),
    title: "Ignite Call",
    image: IgniteCallImage,
    description:
      "Bem-vindo ao Ignite Call, a sua solução eficiente para marcar compromissos e reuniões de forma inteligente e simplificada. Com nossa aplicação, você pode compartilhar seu Google Calendar com outras pessoas para que elas possam agendar compromissos diretamente, eliminando a confusão de troca de e-mails e mensagens.",
    technologies: ["NextJS", "TypeScript", "Prisma"],
    repo: "https://github.com/sergiowinkelstroter/ignite-call",
    demo: "https://ignite-call-wink.vercel.app/",
  },
  {
    id: uuid(),
    title: "Ignite Shop",
    image: IgniteShopImage,
    description:
      "Bem-vindo à Ignite Shop, sua loja online para camisas exclusivas e de alta qualidade que refletem suas paixões e interesses. Cada peça é cuidadosamente projetada para capturar o espírito do que você ama e proporcionar um estilo único que você pode usar com orgulho.",
    technologies: ["NextJS", "TypeScript", "Stitches-React"],
    repo: "https://github.com/sergiowinkelstroter/ignite-shop",
    demo: "https://ignite-shop-sw.vercel.app/",
  },
  {
    id: uuid(),
    title: "Spotify Tailwindcss",
    image: SpotifyTailwindcssImage,
    description:
      "Dê uma olhada no meu mais recente projeto, onde mergulhei na recriação da interface inicial do Spotify usando o poderoso framework de CSS, o Tailwind CSS. Inspirado pelo design icônico e minimalista do Spotify, este projeto é uma celebração da música e do desenvolvimento web moderno.",
    technologies: ["NextJS", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/sergiowinkelstroter/spotify-tailwindcss",
    demo: "https://spotify-tailwindcss.vercel.app/",
  },
];

export const projectsVue = [
  {
    id: uuid(),
    title: "ToDo List",
    image: TaskListImage,
    description:
      "Bem-vindo ao TaDo List, a ferramenta definitiva para organizar sua vida e aumentar sua produtividade. Com nosso aplicativo de lista de tarefas intuitivo, você pode gerenciar suas atividades diárias, definir metas e acompanhar seu progresso, tudo em um só lugar.",

    technologies: ["VueJS", "CSS"],
    repo: "https://github.com/sergiowinkelstroter/redux-player",
    demo: "https://todo-list-ignitee.vercel.app/",
  },
];
