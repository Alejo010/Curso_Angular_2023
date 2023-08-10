import { Component, OnInit } from '@angular/core';

interface Tarjeta{
   titulo:string;
   subtitulo:string;
   image:string;
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
        {titulo:'Video 1', subtitulo: 'Subtitulo Video 1', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUaoknezRKOKgDLvWhIONgJ0fY0asYUcgfrKAmJmgYSd23iJGxDpHS0Ru2RZzYc2ULtg&usqp=CAU"},       
        {titulo:'Video 2', subtitulo: 'Subtitulo Video 2', image:"https://static.laverdad.es/www/pre2017/multimedia/noticias/201702/18/media/108898772.jpg"},       
        {titulo:'Video 3', subtitulo: 'Subtitulo Video 3', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PrvaF1StdS6YB2LQY7sXXsYoX95dWfL1TJ19oorIL89W7bzQAm3Jv46pXz7PQgFFeRU&usqp=CAU"},         
      ]
 }
}