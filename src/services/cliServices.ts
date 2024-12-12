import { Command } from "commander"
import { adm1 } from "../seeds/usuariosSeeds";

// Cadastrar Usuário

const program = new Command();

program
    .command("newuser")
    .description("Add a new user")
    .argument("<name>", "User name")
    .argument("<email>", "User email")
    .argument("<password>", "User password")
    .argument("<age>", "User age")
    .argument("<role>", "User role")
    .action((nome, email, senha, papel, status) => {
        adm1.cadastrarUsuario(nome, email, senha, papel, status);
    })

program.parse()

// Listar Usuários

// Deletar Usuário Por Id

// Alterar Usuário
