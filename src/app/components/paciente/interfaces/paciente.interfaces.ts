export interface Paciente {
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

export interface UpdatePacient {
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

export interface PacientList{
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
