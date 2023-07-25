import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { messageService } from 'src/app/core/interfaces/core.interfaces';

@Injectable({providedIn: 'root'})
export class DataService {

  public toastSignal$ = new BehaviorSubject<messageService | null> (null)
  public pacient$ = new BehaviorSubject<number>(0)
  public medico$ = new BehaviorSubject<number>(0)

  constructor() { }

  public changePacient(uuid: number){
    this.pacient$.next(uuid)
  }

  public changeMedico(uuid: number){
    this.medico$.next(uuid)
  }

  public sendMessage(severity = "success",
  detail = "Task in the application complete",
  summary = "Task Complete") {
  this.toastSignal$.next({
    severity,
    detail,
    summary
  })
}
}
