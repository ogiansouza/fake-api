class Vaga {
    public id: number;
    public titulo: string;
    public localizacao: string;
    public nivel: string;
    public modalidade: string;
    public salarioMin: number;
    public salarioMax: number;
    public requisitos: string[];

    constructor(
        id: number,
        titulo: string,
        localizacao: string,
        nivel: string,
        modalidade: string,
        salarioMin: number,
        salarioMax: number,
        requisitos: string[],
    ) {
        this.id = id;
        this.titulo = titulo;
        this.localizacao = localizacao;
        this.nivel = nivel;
        this.modalidade = modalidade;
        this.salarioMin = salarioMin;
        this.salarioMax = salarioMax;
        this.requisitos = requisitos;
    }
}

export default Vaga