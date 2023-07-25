import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
    
  }
  navegarlogin() {
    this.router.navigate(['/paciente']);
  }
  gestion() {
    this.router.navigate(['/admin']);
  }
}
