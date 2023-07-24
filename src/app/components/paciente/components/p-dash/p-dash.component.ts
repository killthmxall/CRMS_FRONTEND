import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/components/services/data.service';
import { PacienteService } from 'src/app/components/services/paciente.service';
import { PacientList, Paciente } from '../../interfaces/paciente.interfaces';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pacient-dash',
  templateUrl: 'p-dash.component.html'
})

export class DashboardPacientComponent implements OnInit {

  pacientForm!: FormGroup
  listHTA: Array<object> = []
  pacient!: PacientList
  editable = false

  constructor(
    private __dataService: DataService,
    private __pacientService: PacienteService
  ) { }

  ngOnInit() {
    this.loadPacient()
    this.loadPacientForm()
    this.loadHTAList()
  }

  handleEditable(){
    this.editable = !this.editable
  }

  async loadPacient(){
    const uuid = await firstValueFrom(this.__dataService.pacient$)
    if(uuid != 0){
      this.pacient = await firstValueFrom(this.__pacientService.getPacientById(uuid)) as PacientList
    }
  }

  loadHTAList() {
    this.listHTA = [
      { name: 'A00-B99', code: 1 },
      { name: 'C00-D48', code: 2 },
      { name: 'D50-D89', code: 3 },
      { name: 'E00-E90', code: 4 },
      { name: 'F00-F99', code: 5 },
      { name: 'G00-G99', code: 6 },
      { name: 'H00-H59', code: 7 },
      { name: 'H60-H95', code: 8 },
      { name: 'I00-I99', code: 9 },
      { name: 'J00-J99', code: 10 },
      { name: 'K00-K93', code: 11 },
      { name: 'L00-L99', code: 12 },
      { name: 'M00-M99', code: 13 },
      { name: 'N00-N99', code: 14 },
      { name: 'O00-O99', code: 15 },
      { name: 'P00-P96', code: 16 },
      { name: 'Q00-Q99', code: 17 },
      { name: 'R00-R99', code: 18 },
      { name: 'S00-T98', code: 19 },
      { name: 'V01-Y98', code: 20 },
      { name: 'U00-U99', code: 21 },
    ]
  }

  loadPacientForm() {
    this.pacientForm = new FormGroup({
      name: new FormControl(null, Validators.compose([Validators.required])),
      lastname: new FormControl(null, Validators.compose([Validators.required])),
      gender: new FormControl(null, Validators.compose([Validators.required])),
      weight: new FormControl(null, Validators.compose([Validators.required])),
      height: new FormControl(null, Validators.compose([Validators.required])),
      ethnicity: new FormControl(null, Validators.compose([Validators.required])),
      allergies: new FormControl(null, Validators.compose([Validators.required])),
      HTA: new FormControl(null, Validators.compose([Validators.required])),
      cie_code: new FormControl(null, Validators.compose([Validators.required])),
      birthday: new FormControl(null, Validators.compose([Validators.required])),
      blood_type: new FormControl(null, Validators.compose([Validators.required])),
      address: new FormControl(null, Validators.compose([Validators.required])),
      phone: new FormControl(null, Validators.compose([Validators.required])),
    })
  }

  handleClickEditPacient(){
    this.__dataService.sendMessage(
      'success',
      'Success',
      'Paciente Editado'
    )
  }
}
