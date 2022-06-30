import { Injectable } from '@angular/core';
import { Serie } from '../interfaces/serie.interface';
import { SERIES } from '../db/series.db';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  arrSeries: Serie[];

  constructor() {
    this.arrSeries = [];
  }

  getAll(): Serie[] {
    return SERIES;
  }

  getSerieById(pId: number): Serie | undefined {
    return SERIES.find(serie => serie.id === pId);
  }

  getSeasonsById(pId: number): any[] {
    console.log(pId);
    let temporadas = new Array();

    SERIES.forEach(serie => {
      if (serie.id === pId) {
        temporadas = serie.temporadas;
        console.log(temporadas);
      }
    });
    return temporadas;
  }

  // FILTROS //

  getByTitle(pSearch: string): Serie[] {
    return SERIES.filter(serie =>
      serie.titulo.toLowerCase().includes(pSearch.toLowerCase())
    );
  }

  getByRating(pRating: number): Serie[] {
    return SERIES.filter(serie => serie.rating >= pRating);
  }

  //[...new Set(SERIES.map(serie => serie.canal))]; new set lo que hace es quitar los duplicados
  getChannels(): Array<string> {
    return [...new Set(SERIES.map(serie => serie.canal))];
  }

  getByChannel(pChannel: string): Serie[] {
    return SERIES.filter(serie => serie.canal === pChannel);
  }
}
