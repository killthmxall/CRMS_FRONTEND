import { Component } from '@angular/core';
import { SlideInterface } from 'src/app/imageSlider/types/slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'sismeg';
  slides: SlideInterface[] = [
    { url: '/assets/imgAgendarCita.jpg', title: 'img1'},
    { url: '/assets/imgCancelarCita.jpg', title: 'img2'},
    { url: '/assets/imgHistorialCitas.jpg', title: 'img3'},
    { url: '/assets/imgMisDatos.jpg', title: 'img4'},
    { url: '/assets/imgReangendarCita.jpg', title: 'img5'}

  ];
}
