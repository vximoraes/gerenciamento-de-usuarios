import { EnumPapel } from "../models/papeis";
import { ModeloPapel } from "../models/papeis";

export class Papel implements ModeloPapel {
    papel        : EnumPapel
    permListar   : boolean
    permListarId : boolean
    permCadastrar: boolean
    permAlterar  : boolean
    permDeletar  : boolean

    constructor(papel: EnumPapel, permListar: boolean, permListarId: boolean, permCadastrar: boolean, permAlterar: boolean, permDeletar: boolean) {
        this.papel         = papel
        this.permListar    = permListar
        this.permListarId  = permListarId
        this.permCadastrar = permCadastrar
        this.permAlterar   = permAlterar
        this.permDeletar   = permDeletar
    }
}