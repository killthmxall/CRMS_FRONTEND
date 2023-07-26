import { Time } from "@angular/common"

export interface Medico {
  name: string,
  lastname: string,
  cedula: string,
  gender: string,
  especiality: number,
  email: string,
  phone: number,
  address: string,
  schedule_start: Time,
  schedule_end: Time,
  experience: number,
  certifications: number
}

export interface UpdateMedico {
  id_medic: number,
  name: string,
  lastname: string,
  cedula: string,
  gender: string,
  speciality: number,
  email: string,
  phone: number,
  address: string,
  schedule_start: string,
  schedule_end: string,
  experience: number,
  certifications: number
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
  schedule_start: Time,
  schedule_end: Time,
  experience: number,
  certifications: number
}
