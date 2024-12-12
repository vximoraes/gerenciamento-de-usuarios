import { Usuario } from './../models/usuario'
import { v4 as uuid } from 'uuid'
import * as Papeis from './papeisSeeds'

export const usuariosSeeds: Usuario[] = [
    { id: uuid(), nome: 'Vinícius Almeida Moraes', email: 'viniciusmoraesvha@gmail.com', senha: 'Senha@123', papel: Papeis.papelAdm, dataCadastro: new Date('2025-01-01'), dataAlteracao:  new Date('2025-01-01'), status: true}
]