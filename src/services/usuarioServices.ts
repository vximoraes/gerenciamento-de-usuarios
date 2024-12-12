import { Usuario } from "../models/usuario"
import * as validacoesUsuario from "../validations/validacoesUsuario"
import { v4 as uuid } from 'uuid'
import { Papel } from './permissoesServices';

let usuarios: Usuario[] = []

export class Usuarios implements Usuario {
    id           : string
    nome         : string
    email        : string
    senha        : string
    papel        : Papel
    dataCadastro : Date
    dataAlteracao: Date
    status       : boolean

    constructor(nome: string, email: string, senha: string, papel: Papel, dataCadastro: Date, dataAlteracao: Date, status: boolean) {
        this.id = uuid()
        this.nome = nome
        this.email = email
        this.senha = senha
        this.papel = papel
        this.dataCadastro = dataCadastro
        this.dataAlteracao = dataAlteracao
        this.status = status
    }

// Função para cadastrar usuários.
cadastrarUsuario(nome: string, email: string, senha: string, papel: Papel, dataCadastro: Date, dataAlteracao: Date, status: boolean) {
    if(this.papel.permCadastrar) {
        const newUser: Usuario = {
            id           : this.id,
            nome         : nome,
            email        : email,
            senha        : senha,
            papel        : papel,
            dataCadastro : dataCadastro,
            dataAlteracao: dataAlteracao,
            status       : status
        }    

        // Validando os dados antes de cadastrar
        if (!validacoesUsuario.validarNome(newUser.nome)) {
            return 'Nome inválido. Deve ter entre 3 e 25 caracteres.'
        }

        if (!validacoesUsuario.validarEmail(newUser.email)) {
            return 'E-mail inválido.'
        }

        if (!validacoesUsuario.validarSenha(newUser.senha)) {
            return 'A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.'
        }

        usuarios.push(newUser)
    } else {
        console.clear()
        console.log('Você não possui permissão para cadastrar usuários. Aperte qualquer tecla para continuar...')
    }
}

// Função para listar usuários.
listarUsuarios() {

}

// Função para listar usuários por Id.
listarUsuarioId() {

}

// Função para deletar usuários.
deletarUsuarioId() {

}

// Função para alterar usuários.
alterarUsuario() {

}
    
}
