import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico, UpdateMedico } from '../medico/interfaces/medico.interfaces';

@Injectable({ providedIn: 'root' })
export class MedicoService {
  private readonly url = 'http://localhost:8000/medicos';

  constructor(private _http: HttpClient) {}

  getMedicoById(uuid: number) {
    return this._http.get(`${this.url}/get_medico/${uuid}`);
  }

  getAllMedicos() {
    return this._http.get(`${this.url}/get_all`);
  }

  addMedico(medico: Medico) {
    return this._http.post(`${this.url}/add_medico`, medico);
  }

  updateMedico(medico: UpdateMedico) {
    return this._http.patch(`${this.url}/edit_medico/`, medico);
  }

  deleteMedico(uuid: number) {
    return this._http.delete(`${this.url}/delete_medico/${uuid}`);
  }
}

