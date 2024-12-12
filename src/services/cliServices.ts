import { Command } from "commander"
import * as Papeis from '../seeds/papeisSeeds'

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
    .action((name, email, password, age, role) => {
        Papeis.cadastrarUsuario(name, email, password, age, role);
    })


program.parse()

// Listar Usuários

// Deletar Usuário Por Id

// Alterar Usuário
