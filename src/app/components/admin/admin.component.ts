import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
    
  }
  navegar_medico() {
    this.router.navigate(['/medico']);
  }

  navegar_paciente() {
    this.router.navigate(['/paciente']);
  }

  navegar_citas() {
    this.router.navigate(['/citas']);
  }


}
