import { Command } from "commander"
import { adm1 } from "./seeds/usuariosSeeds";

// Cadastrar Usuário
const program = new Command();

program
    .command("newuser")
    .description("Add a new user")
    .argument("<nome>", "User name")
    .argument("<email>", "User email")
    .argument("<senha>", "User password")
    .argument("<papel>", "User age")
    .argument("<status>", "User role")
    .action((nome, email, senha, papel, status) => adm1.cadastrarUsuario(nome, email, senha, papel, status))

program.parse()

// Listar Usuários

// Deletar Usuário Por Id

// Alterar Usuário
