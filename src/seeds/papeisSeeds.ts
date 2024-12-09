import { ModeloPapel } from "../models/papeis"
import { Papel } from "../models/papeis"

const papeisSeeds: ModeloPapel[] = [
    { papel: Papel.CONVIDADO    , permissoes: ['Listar produtos', 'Listar produtos por id']},
    { papel: Papel.ADMINISTRADOR, permissoes: ['Listar produtos', 'Listar produtos por id', 'Cadastrar produtos', 'Alterar produtos', 'Deletar produtos'] },
    { papel: Papel.PROFESSOR    , permissoes: ['Listar produtos', 'Listar produtos por id'] }
]
