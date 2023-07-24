import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ImageSliderModule } from './imageSlider/imageSlider.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MedicoComponent } from './components/medico/medico.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PacienteComponent } from './components/paciente/paciente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CreatePacientComponent } from './components/paciente/components/p-create/p-create.component';
import { TableModule } from 'primeng/table';
import { ListPacientComponent } from './components/paciente/components/p-list/p-list.component';
import { DashboardPacientComponent } from './components/paciente/components/p-dash/p-dash.component';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MedicoComponent,
    RegistroComponent,
    PacienteComponent,
    CreatePacientComponent,
    ListPacientComponent,
    DashboardPacientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ImageSliderModule,
    DropdownModule,
    ReactiveFormsModule,
    CommonModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    ToastModule,
    TableModule,
    ChipModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
