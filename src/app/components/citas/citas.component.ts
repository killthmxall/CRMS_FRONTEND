import { Component } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {

  contactAction: string = "CREATE"

  handleClickContact(type: string): void {
    this.contactAction = type
  }
}