import { Papel } from "../services/permissoesServices"
import { EnumPapel } from "../models/papeis"

export const papelAdm       = new Papel(EnumPapel.ADMINISTRADOR, true , true , true , true , true)
export const papelConvidado = new Papel(EnumPapel.CONVIDADO    , true , true , false, false, false)
export const papelProfessor = new Papel(EnumPapel.PROFESSOR    , false, false, false, true , false)
