import { Component, Host, OnInit, Optional } from '@angular/core';
import { MedicoService } from 'src/app/components/services/medico.service';
import { MedicoList } from '../../interfaces/medico.interfaces';
import { firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/components/services/data.service';
import { MedicoComponent } from '../../medico.component';


@Component({
  selector: 'medico-list',
  templateUrl: 'm-list.component.html'
})

export class MListComponent implements OnInit {

  medicos!: MedicoList[]

  constructor(
    private __MedicoService: MedicoService,
    private __dataService: DataService,
    @Optional() @Host() private parent: MedicoComponent
  ) { }

  ngOnInit() {
    this.loadMedico()
  }

  async loadMedico(){
    const res: any = await firstValueFrom(this.__MedicoService.getAllMedicos())
    this.medicos = res
  }

  onRowSelect(event: any){
    const uuid: number = event.data.id_medic
    this.__dataService.changeMedico(uuid)
    this.parent.contactAction = "DASHBOARD"
  }

  async handleClickDeleteMedico(uuid: number){
    const res = await firstValueFrom(this.__MedicoService.deleteMedico(uuid))
    if( res != null || res != undefined){
      this.__dataService.sendMessage(
        'success',
        'Success',
        `Medico ${uuid} Eliminado`
      )
      setTimeout(() => {
        this.ngOnInit()
      }, 2000);
    }
  }
}
