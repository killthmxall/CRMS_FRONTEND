import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit{

  contactAction: string = "CREATE"

  constructor(
    private __dataService: DataService
  ){}

  ngOnInit(): void {
    this.handleCiteSignal()
  }

  handleClickContact(type: string): void {
    this.contactAction = type
  }

  async handleCiteSignal(){
    const action = await firstValueFrom(this.__dataService.citas$)
    if (action != ""){
      this.contactAction = action
    }
  }
}
