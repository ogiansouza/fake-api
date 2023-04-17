const mediaPath = 'https://fake-api-tau.vercel.app/eplay/'

export const jogos = [
  {
    id: 1,
    name: "FIFA 23",
    description:
      "O FIFA 23 é o mais recente lançamento da renomada série de jogos de futebol da EA Sports. Com gráficos impressionantes e realismo aprimorado, este título leva a experiência do futebol virtual a novos patamares. Desfrute de uma jogabilidade refinada e controles mais precisos enquanto controla suas equipes favoritas em competições emocionantes em todo o mundo.        ",
    release_date: null,
    prices: {
      discount: null,
      old: null,
      current: 199.9,
    },
    details: {
      category: "Esporte",
      system: "PS5",
      developer: "Electronic Arts",
      publisher: "EA Sports",
      languages: [
        "Inglês",
        "Espanhol",
        "Francês",
        "Holandês",
        "Italiano",
        "Português brasileiro",
        "Português",
        "Russo",
        "Árabe",
      ],
    },
    media: {
      thumbnail: mediaPath + "/fifa_23/thumb.jpeg",
      cover: mediaPath + "/fifa_23/capa.jpg",
      gallery: [
        {
          type: "image",
          url: mediaPath + "/fifa_23/imagem1.jpg",
        },
        {
          type: "image",
          url: mediaPath + "/fifa_23/imagem2.jpeg",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/0tIW1X2dv0c",
        },
      ],
    },
  },
  {
    id: 2,
    name: "NBA 2K23",
    description:
      "NBA 2K23 é a mais recente edição da popular série de basquete da 2K Sports. Com gráficos incríveis e jogabilidade aprimorada, experimente a emoção de jogar com as melhores equipes da NBA e torne-se uma lenda das quadras.",
    release_date: null,
    prices: {
      discount: 40,
      old: 199.8,
      current: 119.9,
    },
    details: {
      category: "Esporte",
      system: "PS5",
      developer: "Visual Concepts",
      publisher: "2K Sports",
      languages: [
        "Inglês",
        "Espanhol",
        "Francês",
        "Holandês",
        "Italiano",
        "Português brasileiro",
        "Português",
        "Russo",
        "Árabe",
      ],
    },
    media: {
      thumbnail: mediaPath + "/nba/thumb.jpeg",
      cover: mediaPath + "/nba/capa.webp",
      gallery: [
        {
          type: "image",
          url: mediaPath + "/nba/imagem1.webp",
        },
        {
          type: "image",
          url: mediaPath + "/nba/imagem2.webp",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/RxLS5Tgo9YM",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Call of Duty: Vanguard",
    description:
      "Call of Duty: Vanguard traz a ação intensa da franquia de volta à Segunda Guerra Mundial. Experimente uma campanha envolvente e lute em batalhas icônicas enquanto descobre uma conspiração global.",
    release_date: null,
    prices: {
      discount: null,
      old: null,
      current: 229.9,
    },
    details: {
      category: "Ação",
      system: "PS5",
      developer: "Sledgehammer Games",
      publisher: "Activision",
      languages: [
        "Inglês",
        "Espanhol",
        "Francês",
        "Holandês",
        "Italiano",
        "Português brasileiro",
        "Português",
      ],
    },
    media: {
      thumbnail: mediaPath + "/cod/thumb.jpeg",
      cover: mediaPath + "/cod/capa.jpg",
      gallery: [
        {
          type: "image",
          url: mediaPath + "/cod/imagem1.jpg",
        },
        {
          type: "image",
          url: mediaPath + "/cod/imagem2.jpg",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/OQ1CwPhE8KQ",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Elden Ring",
    description:
      "Elden Ring é um RPG de ação desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment. Com um mundo aberto vasto e rica narrativa, os jogadores devem enfrentar inimigos desafiadores e explorar um ambiente repleto de segredos e mistérios.",
    release_date: null,
    prices: {
      discount: null,
      old: null,
      current: 249.9,
    },
    details: {
      category: "RPG",
      system: "PS5",
      developer: "FromSoftware",
      publisher: "Bandai Namco Entertainment",
      languages: [
        "Inglês",
        "Espanhol",
        "Francês",
        "Holandês",
        "Italiano",
        "Português brasileiro",
        "Português",
      ],
    },
    media: {
      thumbnail: mediaPath + "/elden_ring/thumb.jpg",
      cover: mediaPath + "/elden_ring/capa.webp",
      gallery: [
        {
          type: "image",
          url: mediaPath + "/elden_ring/imagem1.png",
        },
        {
          type: "image",
          url: mediaPath + "/elden_ring/imagem2.webp",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/e5wwSxl0atc",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Overwatch 2",
    description:
      "Overwatch 2 é a sequência do popular jogo de tiro em primeira pessoa da Blizzard Entertainment. Com novos heróis, mapas e modos de jogo, além de uma campanha cooperativa, Overwatch 2 oferece uma experiência ainda mais rica e envolvente.",
    release_date: null,
    prices: {
      discount: 15,
      old: 199.9,
      current: 169.9,
    },
    details: {
      category: "Ação",
      system: "PS5",
      developer: "Blizzard Entertainment",
      publisher: "Blizzard Entertainment",
      languages: [
        "Inglês",
        "Espanhol",
        "Francês",
        "Holandês",
        "Italiano",
      ],
    },
    media: {
      thumbnail: mediaPath + "/overwatch/thumb.jpeg",
      cover: mediaPath + "/overwatch/capa.jpg",
      gallery: [
        {
          type: "image",
          url: mediaPath + "/overwatch/imagem1.webp",
        },
        {
          type: "image",
          url: mediaPath + "/overwatch/imagem2.webp",
        },
      ],
    },
  },
  {
    id: 6,
    name: "Doom Eternal",
    description:
      "Doom Eternal é um jogo de tiro em primeira pessoa desenvolvido pela id Software. Enfrente hordas de demônios em uma campanha intensa e brutal, utilizando um arsenal de armas poderosas e habilidades incríveis para salvar a humanidade.",
    release_date: null,
    prices: {
      discount: null,
      old: null,
      current: 119.9,
    },
    details: {
      category: "Ação",
      system: "PS4",
      developer: "id Software",
      publisher: "Bethesda Softworks",
      languages: [
        "Inglês",
        "Espanhol",
        "Francês",
        "Holandês",
        "Italiano",
        "Português brasileiro",
        "Português",
      ],
    },
    media: {
      thumbnail: mediaPath + "/doom/thumb.jpg",
      cover: mediaPath + "/doom/capa.png",
      gallery: [
        {
          type: "image",
          url: mediaPath + "/doom/imagem1.webp",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/FkklG9MA0vM",
        },
      ],
    },
  },
  {
    id: 7,
    name: "Titanfall 2",
    description:
      "Titanfall 2 é um jogo de tiro em primeira pessoa desenvolvido pela Respawn Entertainment. Com uma campanha envolvente e um modo multiplayer inovador, os jogadores assumem o controle de Pilotos ágeis e Titans poderosos em um combate futurista emocionante.",
    release_date: null,
    prices: {
      discount: null,
      old: null,
      current: 59.9,
    },
    details: {
      category: "Ação",
      system: "Steam",
      developer: "Respawn Entertainment",
      publisher: "Electronic Arts",
      languages: [
        "Inglês",
        "Espanhol",
        "Francês",
        "Holandês",
        "Italiano",
      ],
    },
    media: {
      thumbnail: mediaPath + "/titanfall/thumb.jpeg",
      cover: mediaPath + "/titanfall/capa.jpeg",
      gallery: [
        {
          type: "image",
          url: mediaPath + "/titanfall/imagem1.jpg",
        },
        {
          type: "image",
          url: mediaPath + "/titanfall/imagem2.png",
        },
      ],
    },
  },
  {
    id: 8,
    name: 'Tekken 7',
    description: 'Tekken 7 é um jogo de luta desenvolvido e publicado pela Bandai Namco Entertainment. Experimente a conclusão épica da história do clã Mishima e desfrute de um elenco diversificado de personagens em combates intensos e técnicos.',
    release_date: null,
    prices: {
      discount: null,
      old: null,
      current: 99.9,
    },
    details: {
      category: 'Luta',
      system: 'PS4',
      developer: 'Bandai Namco Studios',
      publisher: 'Bandai Namco Entertainment',
      languages: ['Inglês', 'Espanhol', 'Francês', 'Holandês', 'Italiano', 'Português brasileiro', 'Português', 'Russo', 'Árabe']
    },
    media: {
      thumbnail: mediaPath + '/tekken/thumb.webp',
      cover: mediaPath + '/tekken/capa.webp',
      gallery: [
        {
          type: 'image',
          url: mediaPath + '/tekken/imagem1.jpg',
        },
        {
          type: 'image',
          url: mediaPath + '/tekken/imagem2.jpg',
        },
      ]
    },
  },
  {
    id: 9,
    name: 'Mortal Kombat 11',
    description: 'Mortal Kombat 11 é o mais recente título da série de jogos de luta icônica da NetherRealm Studios. Com um elenco diversificado de personagens clássicos e novos, os jogadores podem desfrutar de combates brutais e cinematográficos em um modo história emocionante e modos multijogador competitivos.',
    release_date: null,
    prices: {
      discount: null,
      old: null,
      current: 89.9,
    },
    details: {
      category: 'Luta',
      system: 'PS4',
      developer: 'NetherRealm Studios',
      publisher: 'Warner Bros. Interactive Entertainment',
      languages: ['Inglês', 'Espanhol', 'Francês', 'Holandês', 'Italiano', 'Português brasileiro', 'Português', 'Russo', 'Árabe']
    },
    media: {
      thumbnail: mediaPath + '/mortal_kombat/thumb.webp',
      cover: mediaPath + '/mortal_kombat/capa.jpg',
      gallery: [
        {
          type: 'image',
          url: mediaPath + '/mortal_kombat/imagem1.jpg',
        },
        {
          type: 'image',
          url: mediaPath + '/mortal_kombat/imagem2.webp',
        },
      ]
    },
  },
  {
    id: 10,
    name: 'Street Fighter V: Champion Edition',
    description: 'Street Fighter V: Champion Edition é a versão definitiva do aclamado jogo de luta da Capcom. Com todos os personagens, trajes e estágios lançados até agora, esta edição oferece a experiência mais completa e emocionante para fãs e novos jogadores.',
    release_date: null,
    prices: {
      discount: null,
      old: null,
      current: 119.9,
    },
    details: {
      category: 'Luta',
      system: 'PS4',
      developer: 'Capcom',
      publisher: 'Capcom',
      languages: ['Inglês', 'Espanhol', 'Francês', 'Holandês', 'Italiano', 'Português brasileiro', 'Português', 'Russo', 'Árabe']
    },
    media: {
      thumbnail: mediaPath + '/street_fighter/thumb.jpeg',
      cover: mediaPath + '/street_fighter/capa.jpg',
      gallery: [
        {
          type: 'image',
          url: mediaPath + '/street_fighter/imagem1.webp',
        },
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/0nFd7Iylj5A',
        },
      ]
    },
  },
  {
    id: 11,
    name: 'Guilty Gear -Strive-',
    description: 'Guilty Gear -Strive- é a mais recente entrada na série de jogos de luta Guilty Gear, conhecida por sua mecânica de combate complexa e estilo visual deslumbrante. Com uma seleção de personagens distintos e um enredo envolvente, Guilty Gear -Strive- oferece uma experiência de luta emocionante.',
    release_date: null,
    prices: {
      discount: null,
      old: null,
      current: 167.9,
    },
    details: {
      category: 'Luta',
      system: 'Xbox One',
      developer: 'Arc System Works',
      publisher: 'Arc System Works',
      languages: ['Inglês', 'Espanhol', 'Francês', 'Holandês', 'Italiano', 'Português brasileiro', 'Português', 'Russo', 'Árabe']
    },
    media: {
      thumbnail: mediaPath + '/guilty/thumb.webp',
      cover: mediaPath + '/guilty/capa.jpg',
      gallery: [
        {
          type: 'image',
          url: mediaPath + '/guilty/imagem1.jpg',
        },
        {
          type: 'image',
          url: mediaPath + '/guilty/imagem2.jpg',
        },
      ]
    },
  },
  {
    "id": 12,
    "name": "F1 2021",
    "description": "F1 2021 é o jogo oficial da Fórmula 1, desenvolvido pela Codemasters e publicado pela Electronic Arts. Com todas as equipes, pilotos e circuitos oficiais da temporada 2021, o jogo oferece uma experiência autêntica e imersiva de corrida, incluindo modos de carreira, multiplayer e novas adições emocionantes.",
    "release_date": null,
    "prices": {
      "discount": 20,
      "old": 249.9,
      "current": 199.9
    },
    "details": {
      "category": "Esporte",
      "system": "Steam",
      "developer": "Codemasters",
      "publisher": "Electronic Arts",
      "languages": ["Inglês", "Espanhol", "Francês", "Holandês", "Italiano", "Português brasileiro", "Português", "Russo", "Árabe"]
    },
    "media": {
      "thumbnail": mediaPath + "/f1/thumb.jpeg",
      "cover": mediaPath + "/f1/capa.webp",
      "gallery": [
        {
          "type": "image",
          "url": mediaPath + "/f1/imagem1.webp"
        },
        {
          "type": "image",
          "url": mediaPath + "/f1/imagem2.webp"
        },
      ]
    }
  },
  {
    "id": 13,
    "name": "EA Sports UFC 4",
    "description": "EA Sports UFC 4 é o mais recente título da popular série de jogos de MMA da EA Sports. Com gráficos aprimorados, mecânicas de luta mais realistas e um modo carreira aprofundado, os jogadores podem criar seu próprio lutador e escalar o ranking para se tornarem campeões do UFC.",
    "release_date": null,
    "prices": {
      "discount": null,
      "old": null,
      "current": 149.9
    },
    "details": {
      "category": "Esporte",
      "system": "Xbox Series S/X",
      "developer": "EA Sports",
      "publisher": "Electronic Arts",
      "languages": ["Inglês", "Espanhol", "Francês", "Holandês", "Italiano", "Português brasileiro", "Português", "Russo", "Árabe"]
    },
    "media": {
      "thumbnail": mediaPath + "/ufc/thumb.jpg",
      "cover": mediaPath + "/ufc/capa.jpg",
      "gallery": [
        {
          "type": "image",
          "url": mediaPath + "/ufc/imagem1.jpg"
        },
        {
          "type": "image",
          "url": mediaPath + "/ufc/imagem2.webp"
        },
      ]
    }
  },
  {
    "id": 14,
    "name": "The Sims 4",
    "description": "The Sims 4 é o quarto título principal da série de simulação de vida da Maxis e Electronic Arts. Neste jogo, os jogadores podem criar e controlar personagens chamados Sims, construindo suas casas, desenvolvendo carreiras e vivenciando relacionamentos. Com expansões e pacotes de conteúdo adicionais, os jogadores podem personalizar ainda mais a experiência de seus Sims.",
    "release_date": null,
    "prices": {
      "discount": 60,
      "old": 159.9,
      "current": 63.9
    },
    "details": {
      "category": "Simulação",
      "system": "Steam",
      "developer": "Maxis",
      "publisher": "Electronic Arts",
      "languages": ["Inglês", "Espanhol", "Francês", "Holandês", "Italiano", "Português brasileiro", "Português", "Russo", "Árabe"]
    },
    "media": {
      "thumbnail": mediaPath + "/sims/thumb.jpeg",
      "cover": mediaPath + "/sims/capa.webp",
      "gallery": [
        {
          "type": "image",
          "url": mediaPath + "/sims/imagem1.jpg"
        },
        {
          "type": "image",
          "url": mediaPath + "/sims/imagem2.webp"
        },
      ]
    }
  },
  {
    "id": 15,
    "name": "Cities: Skylines",
    "description": "Cities: Skylines é um jogo de construção e gerenciamento de cidades desenvolvido pela Colossal Order e publicado pela Paradox Interactive. Com um alto nível de detalhes e complexidade, os jogadores podem planejar, construir e gerenciar sua própria cidade, tomando decisões sobre zoneamento, transporte, políticas públicas e muito mais.",
    "release_date": null,
    "prices": {
      "discount": null,
      "old": null,
      "current": 119.9
    },
    "details": {
      "category": "Simulação",
      "system": "Steam",
      "developer": "Colossal Order",
      "publisher": "Paradox Interactive",
      "languages": ["Inglês", "Espanhol", "Francês", "Holandês", "Italiano", "Português brasileiro", "Português", "Russo", "Árabe"]
    },
    "media": {
      "thumbnail": mediaPath + "/cities/thumb.jpeg",
      "cover": mediaPath + "/cities/capa.jpg",
      "gallery": [
        {
          "type": "image",
          "url": mediaPath + "/cities/imagem1.webp"
        },
        {
          "type": "image",
          "url": mediaPath + "/cities/imagem2.jpg"
        },
        {
          "type": "image",
          "url": mediaPath + "/cities/imagem3.jpg"
        },
      ]
    }
  },
  {
    "id": 16,
    "name": "The Legend of Zelda: Tears of the Kingdom",
    "description": "The Legend of Zelda: Tears of the Kingdom é o mais novo título da aclamada série de ação e aventura da Nintendo. Junte-se a Link em sua jornada épica para salvar o reino de Hyrule, explorando um vasto mundo aberto e desvendando segredos antigos. Enfrente inimigos desafiadores, resolva quebra-cabeças complexos e descubra novas habilidades para restaurar a paz e a harmonia em Hyrule.",
    "release_date": "05/2023",
    "prices": {
      "discount": null,
      "old": null,
      "current": 359.9
    },
    "details": {
      "category": "RPG",
      "system": "Nintendo Switch",
      "developer": "Nintendo",
      "publisher": "Nintendo",
      "languages": ["Inglês", "Espanhol", "Francês", "Holandês", "Italiano", "Português brasileiro", "Português", "Russo", "Árabe"]
    },
    "media": {
      "thumbnail": mediaPath + "/zelda/thumb.jpg",
      "cover": mediaPath + "/zelda/capa.webp",
      "gallery": [
        {
          "type": "image",
          "url": mediaPath + "/zelda/imagem1.jpg"
        },
        {
          "type": "image",
          "url": mediaPath + "/zelda/imagem2.jpeg"
        },
        {
          "type": "video",
          "url": "https://www.youtube.com/embed/uHGShqcAHlQ"
        }
      ]
    }
  },
  {
    "id": 17,
    "name": "Suicide Squad: Kill the Justice League",
    "description": "Suicide Squad: Kill the Justice League é um jogo de ação e aventura desenvolvido pela Rocksteady Studios e publicado pela Warner Bros. Interactive Entertainment. Assuma o controle dos membros do Esquadrão Suicida, incluindo Harley Quinn, Deadshot, Captain Boomerang e King Shark, enquanto eles enfrentam uma missão impossível: eliminar a Liga da Justiça. Experimente uma jogabilidade emocionante e um enredo envolvente neste mundo aberto repleto de ação.",
    "release_date": "2024",
    "prices": {
      "discount": null,
      "old": null,
      "current": null
    },
    "details": {
      "category": "Ação",
      "system": "PS5",
      "developer": "Rocksteady Studios",
      "publisher": "Warner Bros. Interactive Entertainment",
      "languages": ["Inglês", "Espanhol", "Francês", "Holandês", "Italiano", "Português brasileiro", "Português", "Russo", "Árabe"]
    },
    "media": {
      "thumbnail": mediaPath + "/esquadrao/thumb.jpg",
      "cover": mediaPath + "/esquadrao/capa.webp",
      "gallery": [
        {
          "type": "image",
          "url": mediaPath + "/esquadrao/imagem1.jpg"
        },
        {
          "type": "image",
          "url": mediaPath + "/esquadrao/imagem2.webp"
        },
      ]
    }
  },
  {
    "id": 18,
    "name": "Spider-Man 2",
    "description": "Spider-Man 2 é a sequência do aclamado jogo do Homem-Aranha desenvolvido pela Insomniac Games. Acompanhe Peter Parker e Miles Morales enquanto eles enfrentam novos desafios e vilões em uma Nova York mais expansiva e interativa. Com uma jogabilidade refinada, mecânicas de balanceamento aprimoradas e uma história envolvente, este título promete ser uma experiência emocionante para os fãs do Homem-Aranha.",
    "release_date": "2023",
    "prices": {
      "discount": null,
      "old": null,
      "current": null
    },
    "details": {
      "category": "Ação",
      "system": "PS5",
      "developer": "Insomniac Games",
      "publisher": "Sony Interactive Entertainment",
      "languages": ["Inglês", "Espanhol", "Francês", "Holandês", "Italiano", "Português brasileiro", "Português", "Russo", "Árabe"]
    },
    "media": {
      "thumbnail": mediaPath + "/spiderman/thumb.webp",
      "cover": mediaPath + "/spiderman/capa.webp",
      "gallery": [
        {
          "type": "image",
          "url": mediaPath + "/spiderman/imagem1.jpg"
        },
        {
          "type": "image",
          "url": mediaPath + "/spiderman/imagem2.webp"
        },
      ]
    }
  },
  {
    "id": 19,
    "name": "Star Wars Jedi: Survivor",
    "description": "Star Wars Jedi: Survivor é o mais recente título na franquia Star Wars, desenvolvido pela Lucasfilm Games. Neste jogo de ação e aventura, os jogadores assumem o papel de um Jedi sobrevivente que deve enfrentar os desafios de um mundo desconhecido e desvendar segredos ocultos. Com jogabilidade envolvente, uma história rica e personagens memoráveis, Star Wars Jedi: Survivor promete ser uma experiência emocionante para os fãs da saga.",
    "release_date": "04/2023",
    "prices": {
      "discount": null,
      "old": null,
      "current": null
    },
    "details": {
      "category": "RPG",
      "system": "Xbox Series S/X",
      "developer": "Lucasfilm Games",
      "publisher": "Electronic Arts",
      "languages": ["Inglês", "Espanhol", "Francês", "Holandês", "Italiano", "Português brasileiro", "Português", "Russo", "Árabe"]
    },
    "media": {
      "thumbnail": mediaPath + "/star_wars/thumb.jpeg",
      "cover": mediaPath + "/star_wars/capa.png",
      "gallery": [
        {
          "type": "image",
          "url": mediaPath + "/star_wars/imagem1.jpg"
        },
        {
          "type": "image",
          "url": mediaPath + "/star_wars/imagem2.jpg"
        },
        {
          "type": "image",
          "url": mediaPath + "/star_wars/imagem3.webp"
        },
      ]
    }
  }
]

export const embreve = jogos.filter(x => x.release_date)
export const promocoes = jogos.filter(x => x.prices.discount)
export const esportes = jogos.filter(x => x.details.category === 'Esporte')
export const acao = jogos.filter(x => x.details.category === 'Ação')
export const luta = jogos.filter(x => x.details.category === 'Luta')
export const rpg = jogos.filter(x => x.details.category === 'RPG')
export const simulacao = jogos.filter(x => x.details.category === 'Simulação')

export const destaque = () => {
  const random = Math.floor(Math.random() * promocoes.length);
  return promocoes[random]
}