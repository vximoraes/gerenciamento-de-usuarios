import { Usuario } from "../models/usuario"
import { Papel } from "../models/papeis"
import * as validacoesUsuario from "../validations/validacoesUsuario"

// Função para cadastrar usuários.
export function cadastrarUsuario(id: string, nome: string, email: string, senha: string, papel: Papel, dataCadastro: Date, dataAlteracao: Date, status: boolean) {
    
    const newUser: Usuario = {
        id           : id,
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
    
}

export function listarUsuarios() {

}

export function listarUsuarioId() {

}

export function deletarUsuarioId() {

}

export function alterarUsuario() {

}