import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {
  arrSeries: Serie[];

  constructor(private seriesService: SeriesService) {
    this.arrSeries = [];
  }

  ngOnInit(): void {
    this.arrSeries = this.seriesService.getAll();
  }

  // FILTROS //
  onFiltroRating($event: any) {
    this.arrSeries = this.seriesService.getByRating($event)
    //console.log($event)
  }

  onFiltroCanal($event: any) {
    if ($event !== 'todos') {
      this.arrSeries = this.seriesService.getByChannel($event)
    } else {
      this.arrSeries = this.seriesService.getAll();
    }
  }

  onBusqueda($event: any) {
    this.arrSeries = this.seriesService.getByTitle($event);
    //console.log('busqueda', $event)
  }
}
