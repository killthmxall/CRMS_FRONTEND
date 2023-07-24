import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {

  contactAction: string = "LIST"

  handleClickContact(type: string): void {
    this.contactAction = type
  }
}
