import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../paciente/interfaces/paciente.interfaces';

@Injectable({providedIn: 'root'})
export class PacienteService {

  private readonly url = "http://localhost:8000/pacients"

  constructor(
    private _http: HttpClient
  ) { }

  getPacientById(uuid: number){
    return this._http.get(`${this.url}/get_pacient/${uuid}`)
  }

  getAllPacientes(){
    return this._http.get(`${this.url}/get_all`)
  }

  addPaciente(paciente: Paciente){
    return this._http.post(`${this.url}/add_pacient`, paciente)
  }

  updatePacient(paciente: Paciente){
    return this._http.patch(`${this.url}/edit_pacient`, paciente)
  }

  deletePacient(uuid: number){
    return this._http.delete(`${this.url}/delete_pacient/${uuid}`)
  }
}
