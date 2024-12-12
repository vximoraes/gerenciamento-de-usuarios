import * as Papeis from './papeisSeeds'
import { Usuarios } from '../services/usuarioServices'

export const adm1 = new Usuarios('Administrador', 'administrador@gmail.com', '#Admin123', Papeis.papelAdm, true)