import { Component, Host, OnInit, Optional } from '@angular/core';
import { DataService } from 'src/app/components/services/data.service';
import { CitasList } from '../../interfaces/citas.interfaces';
import { firstValueFrom } from 'rxjs';
import { CitasService } from 'src/app/components/services/citas.services';
import { CitasComponent } from '../../citas.component';

@Component({
  selector: 'citas-list',
  templateUrl: 'c-list.component.html'
})

export class CListComponent implements OnInit {

  citas!: CitasList[]

  constructor(
    private __citasService: CitasService,
    private __dataService: DataService,
    @Optional() @Host() private parent: CitasComponent
  ) { }

  ngOnInit() {
    this.loadCitas()
  }

  async loadCitas(){
    const res: any = await firstValueFrom(this.__citasService.getAllCitas())
    this.citas = res
  }

  onRowSelect(event: any){
    const uuid: number = event.data.id_citas
    this.__dataService.changeCitas(uuid)
    this.parent.contactAction = "DASHBOARD"
  }

  async handleClickDeleteCitas(uuid: number){
    const res = await firstValueFrom(this.__citasService.deleteCitas(uuid))
    if( res != null || res != undefined){
      this.__dataService.sendMessage(
        'success',
        'Success',
        `Citas ${uuid} Eliminado`
      )
      setTimeout(() => {
        this.ngOnInit()
      }, 2000);
    }
  }
}
