import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SeriesService } from "src/app/services/series.service";

@Component({
  selector: 'app-lista-temporadas',
  templateUrl: './lista-temporadas.component.html',
  styleUrls: ['./lista-temporadas.component.css']
})
export class ListaTemporadasComponent implements OnInit {

  arrTemporadas: any[] = [];

  constructor(private seriesService: SeriesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // necesito el id de la serie - para ello usamos el ActivedRouted Parent
    this.activatedRoute.parent?.params.subscribe(params => {

      const idSerie = parseInt(params.idSerie)
      this.arrTemporadas = this.seriesService.getSeasonsById(idSerie);
      console.log(this.arrTemporadas)
      //console.log(params.idSerie);
    })
  }

}
