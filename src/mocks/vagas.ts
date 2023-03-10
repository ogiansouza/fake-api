import Vaga from "@/models/Vaga";

const vagas = [
    new Vaga(1,
        'Desenvolvedor front-end',
        'Remoto',
        'Junior',
        'CLT/PJ',
        2000,
        4000,
        ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
    ),
    new Vaga(2,
        'Desenvolvedor front-end',
        'Remoto',
        'Pleno',
        'CLT/PJ',
        4000,
        6000,
        ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery', 'React', 'TypeScript'],
    ),
    new Vaga(1,
        'Desenvolvedor fullstack pleno',
        'Remoto',
        'Junior',
        'CLT/PJ',
        5000,
        7000,
        ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery', 'React', 'TypeScript', 'Python', 'NodeJS', 'SQL'],
    ),
    new Vaga(3,
        'UI/UX Designer',
        'Remoto',
        'pleno',
        'CLT/PJ',
        3000,
        4000,
        ['Figma', 'Usabilidade'],
    ),
]

export default vagas