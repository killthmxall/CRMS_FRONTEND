import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { messageService } from 'src/app/core/interfaces/core.interfaces';

@Injectable({providedIn: 'root'})
export class DataService {

  public toastSignal$ = new BehaviorSubject<messageService | null> (null)
  public pacient$ = new BehaviorSubject<number>(0)
  public medico$ = new BehaviorSubject<number>(0)
  public citas$ = new BehaviorSubject<string>("")
  public citeIds$ = new BehaviorSubject<number>(0)

  constructor() { }

  public changePacient(uuid: number){
    this.pacient$.next(uuid)
  }

  public changeMedico(uuid: number){
    this.medico$.next(uuid)
  }

  public changeCitas(uuid: number){
    this.citeIds$.next(uuid)
  }

  public changeCiteAction(action: string){
    this.citas$.next(action)
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
