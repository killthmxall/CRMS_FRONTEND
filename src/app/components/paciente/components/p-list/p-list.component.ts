import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/components/services/paciente.service';
import { PacientList } from '../../interfaces/paciente.interfaces';
import { firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/components/services/data.service';

@Component({
  selector: 'pacient-list',
  templateUrl: 'p-list.component.html'
})

export class ListPacientComponent implements OnInit {

  pacients!: PacientList[]

  constructor(
    private __pacientService: PacienteService,
    private __dataService: DataService
  ) { }

  ngOnInit() {
    this.loadPacient()
  }

  async loadPacient(){
    const res: any = await firstValueFrom(this.__pacientService.getAllPacientes())
    this.pacients = res
  }

  onRowSelect(event: any){
    const uuid: number = event.data.id_pacient
    this.__dataService.changePacient(uuid)
  }

  handleClickDeletePacient(){
    this.__dataService.sendMessage(
      'success',
      'Success',
      'Paciente Eliminado'
    )
  }
}
