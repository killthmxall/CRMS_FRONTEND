import { Component, Host, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/components/services/data.service';
import { Citas } from '../../interfaces/citas.interfaces';
import { firstValueFrom } from 'rxjs';
import { CitasService } from 'src/app/components/services/citas.services';
import { Router } from '@angular/router';
import { CitasComponent } from '../../citas.component';

@Component({
  selector: 'citas-create',
  templateUrl: './c-create.component.html',
  styleUrls: ['./c-create.component.css']
})

export class CCreateComponent implements OnInit  {
  
    citasForm!: FormGroup
    listConsulting: Array<object> = []
    listSchedule: Array<object> = []
  
    constructor(
      private __dataService: DataService,
      private __citasService: CitasService,
      @Optional() @Host() private parent: CitasComponent
    ) {
      this.loadCitasForm()
      this.loadConsultingRoomList()
      this.loadSchedule()
  
    }
  
    ngOnInit(): void {
    }
  
    loadCitasForm() {
      this.citasForm = new FormGroup({
        query_type: new FormControl(null, Validators.compose([Validators.required])),
        query_description: new FormControl(null, Validators.compose([Validators.required])),
        cite: new FormControl(null, Validators.compose([Validators.required])),
        number_cite: new FormControl(null, Validators.compose([Validators.required])),
        consulting_room: new FormControl(null, Validators.compose([Validators.required])),
        horary: new FormControl(null, Validators.compose([Validators.required])),
        date: new FormControl(null, Validators.compose([Validators.required])),
        state: new FormControl(null, Validators.compose([Validators.required])),
        pacient: new FormControl(null, Validators.compose([Validators.required])),
        medic: new FormControl(null, Validators.compose([Validators.required])), 
        assistant: new FormControl(null, Validators.compose([Validators.required])), 
        observations: new FormControl(null, Validators.compose([Validators.required])), 
        register_by: new FormControl(null, Validators.compose([Validators.required])), 
        created_date: new FormControl(null, Validators.compose([Validators.required]))
      })
    }

    loadConsultingRoomList() {
      this.listConsulting = [
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
  
    async handleClickSaveCitas(){
      const citas = this.citasForm.value as Citas
  
      const res = await firstValueFrom(this.__citasService.addCitas(citas))
      if(res != null || res != undefined){
        this.__dataService.sendMessage(
          'success',
          'Success',
          'Cita Creada'
        )
        setTimeout(() => {
          this.parent.contactAction = "LIST"
        }, 2000);
      }
    }
  }
