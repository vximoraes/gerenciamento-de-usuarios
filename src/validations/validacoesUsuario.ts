// Padrão do e-mail.
const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Padrão da senha.
const padraoSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

// Validação nome.
export function validarNome(nome: string): boolean {
    return nome.length >= 3 && nome.length <= 25
}

// Validação e-mail.
export function validarEmail(email: string): boolean {
    return padraoEmail.test(email)
}

// Validação senha.
export function validarSenha(senha: string): boolean {
    return padraoSenha.test(senha)
}