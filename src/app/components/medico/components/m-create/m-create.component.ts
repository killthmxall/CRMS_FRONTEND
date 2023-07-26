import { Component, Host, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/components/services/data.service';
import { Medico } from '../../interfaces/medico.interfaces';
import { firstValueFrom } from 'rxjs';
import { MedicoService } from 'src/app/components/services/medico.service';
import { Router } from '@angular/router';
import { MedicoComponent } from '../../medico.component';

@Component({
  selector: 'medico-create',
  templateUrl: './m-create.component.html',
  styleUrls: ['./m-create.component.css']
})

export class MCreateComponent implements OnInit  {

    medicoForm!: FormGroup
    listEspe: Array<object> = []
    listSchedule: Array<object> = []

    constructor(
      private __dataService: DataService,
      private __medicoService: MedicoService,
      @Optional() @Host() private parent: MedicoComponent
    ) {
      this.loadMedicoForm()
      this.loadEspecialityList()
    }

    ngOnInit(): void {
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
        schedule_start: new FormControl(null, Validators.compose([Validators.required])),
        schedule_end: new FormControl(null, Validators.compose([Validators.required])),
        experience: new FormControl(null, Validators.compose([Validators.required])),
        certifications: new FormControl(null, Validators.compose([Validators.required])),
      })
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

    async handleClickSaveMedico(){
      const medico = this.medicoForm.value as Medico

      const res = await firstValueFrom(this.__medicoService.addMedico(medico))
      if(res != null || res != undefined){
        this.__dataService.sendMessage(
          'success',
          'Success',
          'Medico Creado'
        )
        setTimeout(() => {
          this.parent.contactAction = "LIST"
        }, 2000);
      }
    }
  }

