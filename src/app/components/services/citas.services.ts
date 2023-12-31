import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Citas, UpdateCitas } from '../citas/interfaces/citas.interfaces';

@Injectable({ providedIn: 'root' })
export class CitasService {
  private readonly url = 'http://localhost:8000/cites';

  constructor(private _http: HttpClient) {}

  getCitasById(uuid: number) {
    return this._http.get(`${this.url}/get_cite/${uuid}`);
  }

  getAllCitas() {
    return this._http.get(`${this.url}/get_all`);
  }

  addCitas(citas: Citas) {
    return this._http.post(`${this.url}/add_cite`, citas);
  }

  updateCitas(citas: UpdateCitas) {
    return this._http.patch(`${this.url}/edit_cite/`, citas);
  }

  deleteCitas(uuid: number) {
    return this._http.delete(`${this.url}/delete_cite/${uuid}`);
  }
}