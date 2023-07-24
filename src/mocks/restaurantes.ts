const mediaPath = 'https://fake-api-tau.vercel.app/efood/'

const items = [
  {
    id: 1,
    titulo: "Bella Tavola Italiana",
    destacado: true,
    tipo: "italiana",
    avaliacao: 4.7,
    descricao:
      "A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.",
    capa: mediaPath + 'bella_tavola_italiana/' + '/capa.jpeg',
    cardapio: [
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/1.webp',
        preco: 69.9,
        id: 1,
        nome: "Ravioli al Tartufo Nero",
        descricao:
          "O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/2.jpg',
        preco: 56.9,
        id: 2,
        nome: "Spaghetti alla Carbonara",
        descricao:
          "O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/3.jpg',
        preco: 74.9,
        id: 3,
        nome: "Risotto ai Funghi Porcini",
        descricao:
          "O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz Arborio de alta qualidade e cogumelos porcini secos, que são reidratados para liberar seu sabor intenso e terroso. O arroz é cozido lentamente em um caldo de legumes, com vinho branco e queijo parmesão, resultando em um risoto cremoso e delicioso.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/4.jpg',
        preco: 89.9,
        id: 4,
        nome: "Ossobuco alla Milanese",
        descricao:
          "O Ossobuco alla Milanese é um tradicional prato italiano, originário de Milão, que consiste em um suculento pedaço de vitela cozido lentamente em um molho à base de tomate, vinho branco e legumes. O prato é acompanhado por uma porção de polenta cremosa ou risoto alla Milanese, feito com açafrão.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/5.jpg',
        preco: 62.9,
        id: 5,
        nome: "Melanzane alla Parmigiana",
        descricao:
          "Melanzane alla Parmigiana é um delicioso prato à base de berinjelas, em camadas com molho de tomate caseiro, queijo muçarela e parmesão, assado até ficar dourado e borbulhante. Uma opção saborosa e reconfortante, perfeita para os amantes de legumes e queijo.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/6.jpg',
        preco: 84.9,
        id: 6,
        nome: "Frutti di Mare Linguine",
        descricao:
          "O Frutti di Mare Linguine é uma verdadeira celebração dos sabores do mar, apresentando uma generosa mistura de frutos do mar frescos, como camarões, lulas, mariscos e vieiras, combinados com massa linguine al dente e um saboroso molho de tomate e vinho branco. Uma opção deliciosa para os amantes de frutos do mar.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/7.jpg',
        preco: 49.9,
        id: 7,
        nome: "Insalata Caprese",
        descricao:
          "A Insalata Caprese é uma refrescante e deliciosa salada italiana, feita com tomates maduros e suculentos, fatias frescas de mozzarella di bufala, folhas de manjericão e um fio de azeite extra virgem de oliva. Uma opção leve e saborosa, perfeita como entrada ou acompanhamento.",
        porcao: "1 a 2 pessoas",
      },
    ],
  },

  {
    id: 2,
    titulo: "Casa das Delícias Árabes",
    destacado: false,
    tipo: "árabe",
    avaliacao: 4.8,
    descricao:
      "A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera convidativa e confortável.",
    capa: mediaPath + 'casa_delicias_arabes/' + '/capa.jpeg',
    cardapio: [
      {
        foto: mediaPath + 'casa_delicias_arabes/' + '/1.jpg',
        preco: 49.9,
        id: 8,
        nome: "Mezze Platter",
        descricao:
          "O Mezze Platter é uma seleção de aperitivos tradicionais árabes, incluindo homus, babaganush, tabule, falafel, azeitonas e pão pita fresco. Uma combinação deliciosa de sabores e texturas que proporciona uma experiência gastronômica única e diversificada.",
        porcao: "2 a 4 pessoas",
      },
      {
        foto: mediaPath + 'casa_delicias_arabes/' + '/2.jpg',
        preco: 54.9,
        id: 9,
        nome: "Kebab de Cordeiro",
        descricao:
          "O Kebab de Cordeiro é feito com pedaços de cordeiro marinados em especiarias e ervas, grelhados à perfeição e servidos com arroz basmati perfumado, salada e molho de iogurte. Uma opção saborosa e suculenta para quem aprecia a autêntica cozinha árabe.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'casa_delicias_arabes/' + '/3.webp',
        preco: 45.9,
        id: 10,
        nome: "Shawarma de Frango",
        descricao:
          "O Shawarma de Frango é preparado com finas fatias de frango marinadas em uma mistura de especiarias e grelhadas lentamente. Servido com pão pita, salada e molho tahine, este prato é uma opção saborosa e satisfatória para quem deseja saborear a autêntica comida de rua árabe.",
        porcao: "1 pessoa",
      },
    ],
  },

  {
    titulo: "Sakura Sushi House",
    destacado: false,
    tipo: "japonês",
    avaliacao: 4.9,
    id: 3,
    descricao:
      "A Sakura Sushi House é um sofisticado e autêntico restaurante japonês que oferece uma experiência culinária imersiva, transportando os visitantes diretamente para a Terra do Sol Nascente. O ambiente elegante é complementado por um belo jardim japonês, criando uma atmosfera tranquila e serena.",
    capa: mediaPath + 'sakura_sushi_house/' + '/capa.jpeg',
    cardapio: [
      {
        foto: mediaPath + 'sakura_sushi_house/' + '/1.jpg',
        preco: 89.9,
        id: 11,
        nome: "Sushi e Sashimi Combinado",
        descricao:
          "O Sushi e Sashimi Combinado é uma seleção de peças cuidadosamente elaboradas por nossos sushimen, incluindo atum, salmão, peixe branco, camarão e outros frutos do mar frescos. Acompanha uma porção de wasabi, gengibre em conserva e molho shoyu, para realçar os sabores naturais dos ingredientes.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'sakura_sushi_house/' + '/2.jpg',
        preco: 79.9,
        id: 12,
        nome: "Tempura de Legumes e Camarão",
        descricao:
          "O Tempura de Legumes e Camarão é uma opção deliciosa e crocante, composta por uma variedade de legumes e camarões frescos empanados em uma massa leve e frita até a perfeição. Acompanha um molho tentsuyu, à base de dashi, shoyu e mirin, para dar um toque especial ao prato.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'sakura_sushi_house/' + '/3.jpg',
        preco: 69.9,
        id: 13,
        nome: "Teishoku de Tonkatsu",
        descricao:
          "O Teishoku de Tonkatsu é um prato tradicional japonês composto por uma fatia de lombo de porco empanado e frito, servido com arroz japonês, misoshiru (sopa de pasta de soja) e tsukemono (legumes em conserva). O molho tonkatsu, à base de frutas e legumes, adiciona um sabor agridoce irresistível.",
        porcao: "1 pessoa",
      },
    ],
  },

  {
    titulo: "Cantinho Lusitano",
    destacado: false,
    tipo: "português",
    avaliacao: 4.8,
    id: 4,
    descricao:
      "O Cantinho Lusitano é um charmoso e tradicional restaurante português, que celebra a rica herança culinária de Portugal. Neste aconchegante espaço, os visitantes podem desfrutar dos autênticos sabores portugueses, preparados com ingredientes frescos e de alta qualidade, respeitando as receitas clássicas.",
    capa: mediaPath + 'cantinho_lusitano/' + '/capa.jpeg',
    cardapio: [
      {
        foto: mediaPath + 'cantinho_lusitano/' + '/1.jpeg',
        preco: 74.9,
        id: 14,
        nome: "Bacalhau à Gomes de Sá",
        descricao:
          "O Bacalhau à Gomes de Sá é um prato tradicional português, que consiste em lascas de bacalhau cozido, batatas, cebola, alho, azeite e azeitonas pretas. Finalizado com salsa picada e ovos cozidos, este prato é um clássico da culinária portuguesa, que agrada a todos os paladares.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'cantinho_lusitano/' + '/2.jpg',
        preco: 64.9,
        id: 15,
        nome: "Arroz de Pato",
        descricao:
          "O Arroz de Pato é um delicioso prato português, feito com arroz, carne de pato desfiada, chouriço e cenoura. Cozido lentamente no forno para absorver todos os sabores e aromas, o resultado é um prato saboroso e reconfortante que conquista os corações dos apaixonados pela gastronomia lusitana.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'cantinho_lusitano/' + '/3.png',
        preco: 54.9,
        id: 16,
        nome: "Alheira de Mirandela",
        descricao:
          "A Alheira de Mirandela é um emblemático prato português, que consiste em uma deliciosa alheira grelhada, acompanhada de batatas fritas, arroz e uma salada fresca. A alheira é uma saborosa e suculenta mistura de carnes e pão, com um toque de alho e especiarias, que agrada a todos os gostos.",
        porcao: "1 pessoa",
      },
    ],
  },

  {
    titulo: "Piazza del Forno",
    destacado: false,
    tipo: "pizzaria",
    avaliacao: 4.7,
    id: 5,
    descricao:
      "A Piazza del Forno é uma pizzaria acolhedora e autêntica que se orgulha de suas raízes italianas. Aqui, você encontrará pizzas artesanais preparadas com ingredientes frescos e assadas em forno a lenha, proporcionando sabores inigualáveis e uma crosta crocante e deliciosa.",
    capa: mediaPath + 'piazza/' + '/capa.png',
    cardapio: [
      {
        foto: mediaPath + 'piazza/' + '/1.jpg',
        preco: 49.9,
        id: 17,
        nome: "Pizza Margherita",
        descricao:
          "A Pizza Margherita é um clássico italiano, preparada com molho de tomate caseiro, muçarela fresca, folhas de manjericão e um fio de azeite. Simples e deliciosa, esta pizza é a perfeita representação da culinária italiana em sua forma mais pura.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'piazza/' + '/2.webp',
        preco: 59.9,
        id: 18,
        nome: "Pizza Quatro Queijos",
        descricao:
          "A Pizza Quatro Queijos é uma combinação irresistível de muçarela, gorgonzola, parmesão e provolone, derretidos harmoniosamente sobre uma massa fina e crocante. Perfeita para os amantes de queijo que desejam uma experiência gastronômica rica e saborosa.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'piazza/' + '/3.jpg',
        preco: 64.9,
        id: 19,
        nome: "Pizza Calabresa",
        descricao:
          "A Pizza Calabresa é uma opção saborosa e suculenta, feita com rodelas de calabresa, cebola roxa fatiada, azeitonas pretas e muçarela derretida. Assada em forno a lenha, esta pizza é a escolha perfeita para quem deseja saborear uma pizza tradicional e deliciosa.",
        porcao: "1 a 2 pessoas",
      },
    ],
  },

  {
    titulo: "Jardim da Terra",
    destacado: true,
    tipo: "vegano",
    avaliacao: 4.8,
    id: 6,
    descricao:
      "O Jardim da Terra é um restaurante vegano que se dedica a oferecer pratos deliciosos e criativos, utilizando apenas ingredientes frescos, orgânicos e sazonais. Nosso cardápio é cuidadosamente elaborado para proporcionar uma experiência culinária única, que celebra a diversidade e a riqueza dos alimentos à base de plantas.",
    capa: mediaPath + 'jardim_terra/' + '/capa.png',
    cardapio: [
      {
        foto: mediaPath + 'jardim_terra/' + '/1.webp',
        preco: 38.9,
        id: 20,
        nome: "Hambúrguer de Grão-de-Bico",
        descricao:
          "Nosso Hambúrguer de Grão-de-Bico é feito com grão-de-bico, cenoura, cebola e especiarias, servido em um pão vegano fresco com alface, tomate e nosso delicioso molho caseiro. Acompanha batatas rústicas assadas e uma salada fresca e colorida.",
        porcao: "1 pessoa",
      },
      {
        foto: mediaPath + 'jardim_terra/' + '/2.jpeg',
        preco: 42.9,
        id: 21,
        nome: "Lasanha de Berinjela",
        descricao:
          "A Lasanha de Berinjela é uma opção saborosa e reconfortante, preparada com camadas de berinjela grelhada, molho de tomate caseiro e um creme de castanha-de-caju. Assada até ficar dourada, esta lasanha vegana é a escolha perfeita para quem busca uma refeição saudável e deliciosa.",
        porcao: "1 a 2 pessoas",
      },
      {
        foto: mediaPath + 'jardim_terra/' + '/3.jpg',
        preco: 35.9,
        id: 22,
        nome: "Bowl de Cogumelos e Quinoa",
        descricao:
          "O Bowl de Cogumelos e Quinoa é uma combinação nutritiva e saborosa de quinoa cozida, cogumelos salteados, espinafre, abacate e tomates-cereja. Servido com um molho de ervas frescas e limão, este prato é ideal para quem busca uma refeição leve e saudável.",
        porcao: "1 pessoa",
      },
    ],
  },
];

export default items
