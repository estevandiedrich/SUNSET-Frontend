export class Prospect {
    id?: Number;
    nome: String = "";
    numeroDocumento: String = "";
    dataNascimento?: Date;
    cidadeResidencia: String = "";
    excluido: boolean = false;
    cliente: boolean = false;
    dataConversao?: Date;
}