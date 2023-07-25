import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateMedico } from '../../interfaces/medico.interfaces';
import { DataService } from 'src/app/components/services/data.service';
import { MedicoService } from 'src/app/components/services/medico.service';
import { firstValueFrom } from 'rxjs';


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
  private uuid = 0

  constructor(
    private __dataService: DataService,
    private __medicoService: MedicoService
  ) {}

  ngOnInit() {
    this.loadMedico();
    this.loadMedicoForm();
    this.loadEspecialityList();
    this.loadSchedule();
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
      this.medicoForm.patchValue(this.medico);
    }
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

  loadSchedule() {
    this.listSchedule = [
      { name: '07:00 - 08:00', code: 1 },
      { name: '09:00 - 10:00', code: 2 },
      { name: '11:00 - 12:00', code: 3 },
      { name: '13:00 - 14:00', code: 4 },
      { name: '15:00 - 16:00', code: 5 },
      { name: '17:00 - 18:00', code: 6 },
      { name: '19:00 - 20:00', code: 7 },
      { name: '21:00 - 22:00', code: 8 },
      { name: '23:00 - 00:00', code: 9 }
      ]
    }

  loadMedicoForm() {
    this.medicoForm = new FormGroup({
      name: new FormControl(null, Validators.compose([Validators.required])),
      lastname: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      gender: new FormControl(null, Validators.compose([Validators.required])),
      weight: new FormControl(null, Validators.compose([Validators.required])),
      height: new FormControl(null, Validators.compose([Validators.required])),
      ethnicity: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      allergies: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      HTA: new FormControl(null, Validators.compose([Validators.required])),
      cie_code: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      birthday: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      blood_type: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      address: new FormControl(null, Validators.compose([Validators.required])),
      phone: new FormControl(null, Validators.compose([Validators.required])),
    });
  }

  async handleClickEditMedico() {
    
    this.medico = {
      id: this.uuid,
      ...this.medicoForm.value
    };
    
    const res = await firstValueFrom(this.__medicoService.updateMedico(this.medico))
    if (res != null || res != undefined){
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