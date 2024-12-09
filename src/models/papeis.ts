// Enum para os papéis dos usuários.
export enum Papel {
    ADMINISTRADOR = 'Administrador',
    CONVIDADO     = 'Convidado',
    PROFESSOR     = 'Professor'
}

// Interface do modelo de papéis dos usuários.
export interface ModeloPapel {
    papel: Papel;
    permissoes: string[]
}