// Enum para os papéis dos usuários.
export enum EnumPapel {
    ADMINISTRADOR = 'Administrador',
    CONVIDADO     = 'Convidado',
    PROFESSOR     = 'Professor'
}

// Interface do modelo de papéis dos usuários.
export interface ModeloPapel {
    papel        : EnumPapel
    permListar   : boolean
    permListarId : boolean
    permCadastrar: boolean
    permAlterar  : boolean
    permDeletar  : boolean
}