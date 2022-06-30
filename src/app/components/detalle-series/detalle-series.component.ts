import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from "src/app/interfaces/serie.interface";
import { SeriesService } from "src/app/services/series.service";

@Component({
  selector: 'app-detalle-series',
  templateUrl: './detalle-series.component.html',
  styleUrls: ['./detalle-series.component.css']
})
export class DetalleSeriesComponent implements OnInit {

  // le decimos que es de tipo serie o indefinida así que no hace falta inicializarlo //
  miSerie: Serie | undefined;

  // ActivatedRoute es el inyectable  OBSERVABLE (es un evento al que nos tenemos que suscribir) que carga la ruta activa //
  // También tenemos que inyectar el servicio
  constructor(private activatedRote: ActivatedRoute, private seriesService: SeriesService) {}

  ngOnInit(): void {
    //el suscribe sólo se ejecuta cuando hay cambios y me devuelve la ruta con el id //
    this.activatedRote.params.subscribe(params => {
      const id = parseInt(params.idSerie);
      this.miSerie = this.seriesService.getSerieById(id);
      //console.log(params.idSerie);
    });
  }
}
