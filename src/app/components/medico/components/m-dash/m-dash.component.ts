import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateMedico } from '../../interfaces/medico.interfaces';
import { DataService } from 'src/app/components/services/data.service';
import { MedicoService } from 'src/app/components/services/medico.service';
import { Observable, firstValueFrom } from 'rxjs';
import { Time } from '@angular/common';
import { CitasService } from 'src/app/components/services/citas.services';
import { CitasList } from 'src/app/components/citas/interfaces/citas.interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'medico-dash',
  templateUrl: './m-dash.component.html',
  styleUrls: ['./m-dash.component.css']
})
export class MDashComponent implements OnInit {
  medicoForm!: FormGroup;
  listEspe: Array<object> = [];
  listSchedule: Array<object> = [];
  medico!: UpdateMedico;
  editable = false;
  cites: any[] = []

  private uuid = 0

  constructor(
    private __dataService: DataService,
    private __citeService: CitasService,
    private __medicoService: MedicoService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loadMedico();
    this.loadMedicoForm();
    this.loadEspecialityList();
  }

  handleEditable() {
    this.editable = !this.editable;
  }

  async loadMedico() {
    this.uuid = await firstValueFrom(this.__dataService.medico$);
    if (this.uuid != 0) {
      this.medico = (await firstValueFrom(
        this.__medicoService.getMedicoById(this.uuid)
      )) as UpdateMedico;

      this.cites = await firstValueFrom(this.__medicoService.getCitesMedico(this.uuid)) as Array<any>

      console.warn(this.cites)

      this.medico.schedule_start = this.medico.schedule_start.slice(0,-3)
      this.medico.schedule_end = this.medico.schedule_end.slice(0,-3)

      this.medicoForm.patchValue(this.medico);
    }
  }

  onRowSelect(event: any){
    const uuid: number = event.data.id_cite
    this.__dataService.changeCitas(uuid)
    this._router.navigate(['/citas'])
    this.__dataService.citas$.next("DASHBOARD")
  }

  loadEspecialityList() {
    this.listEspe = [
      { name: 'Odontología', code: 1 },
      { name: 'Psicología', code: 2 },
      { name: 'Cardiología', code: 3 },
      { name: 'Ginecología', code: 4 },
      { name: 'Cardiología', code: 5 },
      { name: 'Nutrición', code: 6 },
      { name: 'Psiquiatría', code: 7 },
      { name: 'Urología', code: 8 },
      { name: 'Dermatología', code: 9 },
      { name: 'Obstetricia', code: 10 },
      { name: 'Oftalmología', code: 11 },
      { name: 'Proctología', code: 12 },
      { name: 'Reumatología', code: 13 },
      { name: 'Gastroenterología', code: 14 }
    ]
  }

  loadMedicoForm() {
    this.medicoForm = new FormGroup({
      cedula: new FormControl(null, Validators.compose([Validators.required])),
      name: new FormControl(null, Validators.compose([Validators.required])),
      lastname: new FormControl(null, Validators.compose([Validators.required])),
      gender: new FormControl(null, Validators.compose([Validators.required])),
      speciality: new FormControl(null, Validators.compose([Validators.required])),
      phone: new FormControl(null, Validators.compose([Validators.required])),
      email: new FormControl(null, Validators.compose([Validators.required])),
      address: new FormControl(null, Validators.compose([Validators.required])),
      schedule_start: new FormControl("", Validators.compose([Validators.required])),
      schedule_end: new FormControl("", Validators.compose([Validators.required])),
      experience: new FormControl(null, Validators.compose([Validators.required])),
      certifications: new FormControl(null, Validators.compose([Validators.required])),
    });
  }



  async handleClickEditMedico() {

    this.medico = {
      id: this.uuid,
      ...this.medicoForm.value
    };

    const res = await firstValueFrom(this.__medicoService.updateMedico(this.medico))
    if (res != null || res != undefined) {
      this.__dataService.sendMessage(
        'success',
        'Success',
        'Medico Actualizado'
      )

      setTimeout(() => {
        this.editable = false
      }, 2000);
    }
  }
}
