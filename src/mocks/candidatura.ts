class Candidatura {
    public vagaId: number;
    public email: string;

    constructor(vagaId: number, email: string) {
        this.vagaId = vagaId;
        this.email = email;
    }
}

export default Candidatura