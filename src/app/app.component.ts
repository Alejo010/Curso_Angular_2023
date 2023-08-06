import { Component, OnInit } from '@angular/core';

interface Tarjeta{
   titulo:string;
   subtitulo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Proyecto 1 Lo mas grande';
  public ArregloTarjetas: Tarjeta[]=[]

ngOnInit(): void {

       this.ArregloTarjetas = [
        {titulo:'Video 1', subtitulo: 'Subtitulo Video 1'},       
        {titulo:'Video 1', subtitulo: 'Subtitulo Video 2'},       
        {titulo:'Video 1', subtitulo: 'Subtitulo Video 3'},         
      ]
 }
}