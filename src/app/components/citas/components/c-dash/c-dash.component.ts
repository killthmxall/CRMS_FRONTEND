import { Component, OnInit } from '@angular/core';
import { UpdateCitas } from '../../interfaces/citas.interfaces';
import { firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/components/services/data.service';
import { CitasService } from 'src/app/components/services/citas.services';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicoService } from 'src/app/components/services/medico.service';
import { PacienteService } from 'src/app/components/services/paciente.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'citas-dash',
  templateUrl: './c-dash.component.html',
  styleUrls: ['./c-dash.component.css'],
})
export class CDashComponent implements OnInit {
  citasForm!: FormGroup;
  editable = false;
  cite!: UpdateCitas;

  listConsulting: Array<object> = [];
  listMedics: Array<any> = [];
  listPacients: Array<any> = [];
  listStates: Array<any> = [];

  private uuid = 0;
  private datePipe = new DatePipe('en-Us');

  constructor(
    private __dataService: DataService,
    private __citeService: CitasService,
    private __medicService: MedicoService,
    private __pacientService: PacienteService
  ) {}

  ngOnInit(): void {
    this.loadCite();
    this.loadConsultingRoomList();
    this.loadMedics();
    this.loadPacients();
    this.loadStates();
    this.loadCitasForm();
  }

  handleEditable() {
    this.editable = !this.editable;
  }

  async loadCite() {
    this.uuid = await firstValueFrom(this.__dataService.citeIds$);
    if (this.uuid != 0) {
      this.cite = (await firstValueFrom(
        this.__citeService.getCitasById(this.uuid)
      )) as UpdateCitas;

      this.cite.horary = this.datePipe.transform(this.cite.horary, 'MM/dd/yyyy HH:mm') as string
      this.citasForm.patchValue(this.cite);
    }
  }

  loadCitasForm() {
    this.citasForm = new FormGroup({
      query_type: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      query_description: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      site: new FormControl(null, Validators.compose([Validators.required])),
      number_cite: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      consulting_room: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      horary: new FormControl(null, Validators.compose([Validators.required])),
      state: new FormControl(null, Validators.compose([Validators.required])),
      id_pacient: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      id_medic: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      admin: new FormControl(0),
      assistant: new FormControl(0, Validators.compose([Validators.required])),
      observations: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      register_by: new FormControl(
        0,
        Validators.compose([Validators.required])
      ),
      reminder_sent: new FormControl(false),
    });
  }

  loadConsultingRoomList() {
    this.listConsulting = [
      { name: 'C1 Odontología', code: 1 },
      { name: 'C2 Psicología', code: 2 },
      { name: 'C3 Cardiología', code: 3 },
      { name: 'C4 Ginecología', code: 4 },
      { name: 'C5 Cardiología', code: 5 },
      { name: 'C6 Nutrición', code: 6 },
      { name: 'C7 Psiquiatría', code: 7 },
      { name: 'C8 Urología', code: 8 },
      { name: 'C9 Dermatología', code: 9 },
      { name: 'C10 Obstetricia', code: 10 },
      { name: 'C11 Oftalmología', code: 11 },
      { name: 'C12 Proctología', code: 12 },
      { name: 'C13 Reumatología', code: 13 },
      { name: 'C14 Gastroenterología', code: 14 },
    ];
  }

  loadStates() {
    this.listStates = [
      { name: 'Programada', code: 1 },
      { name: 'Reagendada', code: 2 },
      { name: 'Cancelada', code: 3 },
      { name: 'En espera', code: 4 },
      { name: 'Concluida', code: 4 },
    ];
  }

  async loadMedics() {
    const response = (await firstValueFrom(
      this.__medicService.getAllMedicos()
    )) as Array<any>;
    this.listMedics = response.map((medic) => {
      return {
        name: `${medic.name} ${medic.lastname}`,
        code: medic.id_medic,
      };
    });
  }

  async loadPacients() {
    const response = (await firstValueFrom(
      this.__pacientService.getAllPacientes()
    )) as Array<any>;
    this.listPacients = response.map((pacient) => {
      return {
        name: `${pacient.name} ${pacient.lastname}`,
        code: pacient.id_pacient,
      };
    });
  }

  async handleClickEditCite() {

    this.cite = {
      id_cite: this.uuid,
      ...this.citasForm.value
    };

    console.warn(this.cite)

    const res = await firstValueFrom(this.__citeService.updateCitas(this.cite));
    if (res != null || res != undefined) {
      this.__dataService.sendMessage('success', 'Success', 'Cita Actualizada');

      setTimeout(() => {
        this.editable = false;
      }, 2000);
    }
  }
}
