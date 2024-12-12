import { Papel } from "../services/permissoesServices"

export interface Usuario {
    id           : string
    nome         : string
    email        : string
    senha        : string
    papel        : Papel
    dataCadastro : Date
    dataAlteracao: Date
    status       : boolean
}