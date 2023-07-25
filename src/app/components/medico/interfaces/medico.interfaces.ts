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
  schedule_end: Date,
}

export interface UpdateMedico {
  id: number,
  name: string,
  lastname: string,
  gender: string,
  weight: number,
  height: number,
  ethnicity: string,
  allergies: string,
  HTA: number,
  cie_code:number,
  birthday: Date,
  blood_type: string,
  address: string,
  phone: number
}

export interface MedicoList{
  id_pacient: number,
  name: string,
  lastname: string,
  gender: string,
  weight: number,
  height: number,
  ethnicity: string,
  allergies: string,
  HTA: number,
  cie_code:number,
  birthday: Date,
  blood_type: string,
  address: string,
  phone: number
}
