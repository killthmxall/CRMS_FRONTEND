import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { DataService } from './components/services/data.service';
import { messageService } from './core/interfaces/core.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'gestion_citas_medicas';

  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private __dataService: DataService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.addToast()
  }

  navegar() {
    this.router.navigate(['/login']);
  }

  public addToast(): void{
    this.__dataService.toastSignal$.subscribe({
      next: (message: messageService | null) => {
        if(message){
          this.messageService.add(message as messageService)
          setTimeout(() => { this.messageService.clear() }, 5000);
        }
      }
    })
  }
}



