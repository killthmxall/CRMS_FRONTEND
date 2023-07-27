import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico, UpdateMedico } from '../medico/interfaces/medico.interfaces';

@Injectable({ providedIn: 'root' })
export class MedicoService {
  private readonly url = 'http://localhost:8000/medics';

  constructor(private _http: HttpClient) {}

  getMedicoById(uuid: number) {
    return this._http.get(`${this.url}/get_medic/${uuid}`);
  }

  getAllMedicos() {
    return this._http.get(`${this.url}/get_all`);
  }

  getCitesMedico(uuid: number){
    return this._http.get(`http://localhost:8000/cites/get_cite_medic/${uuid}`)
  }

  addMedico(medico: Medico) {
    return this._http.post(`${this.url}/add_medic`, medico);
  }

  updateMedico(medico: UpdateMedico) {
    return this._http.patch(`${this.url}/edit_medic/`, medico);
  }

  deleteMedico(uuid: number) {
    return this._http.delete(`${this.url}/delete_medic/${uuid}`);
  }
}

