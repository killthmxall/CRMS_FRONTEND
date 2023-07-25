export interface Medico {
  name: string,
  lastname: string,
  cedula: string,
  gender: string,
  especiality: number,
  email: string,
  phone: number,
  address: string,
  schedule_start: Date,
  schedule_end: Date
}

export interface UpdateMedico {
  id: number,
  name: string,
  lastname: string,
  cedula: string,
  gender: string,
  especiality: number,
  email: string,
  phone: number,
  address: string,
  schedule_start: Date,
  schedule_end: Date
}

export interface MedicoList{
  id_medico: number,
  name: string,
  lastname: string,
  cedula: string,
  gender: string,
  especiality: number,
  email: string,
  phone: number,
  address: string,
  schedule_start: Date,
  schedule_end: Date
}
