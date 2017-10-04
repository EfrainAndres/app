import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Itemcinco } from '../../models/itemcinco';

@Injectable()
export class Itemscinco {
  itemscinco: Itemcinco[] = [];

  defaultItemcinco: any = {
    "name": "Bateria",
    "profilePic": "assets/img/mantenimiento.jpg",
    "about": "Este equipo ha sido probado y se ha corroborado que respeta los límites estipulados para dispositivos digitales de la Clase B, conforme a lo dispuesto por la Parte 15 de las Directivas de la FCC. Estos límites están diseñados para ofrecer una protección razonable contra interferencias nocivas en una instalación residual. Este equipo genera, utiliza y puede emitir energía de radiofrecuencia (RF) y si no se lo instala y utiliza según las instrucciones, puede causar interferencia nociva a las comunicaciones de radio. No obstante, no existe garantía de que no se produzca interferencia en una instalación específica.",
    "imgparte1":"assets/img/partes-5000-1.jpg",
    "imgparte2":"assets/img/partes-5000-2.jpg",
    "caracteristica": "assets/img/caracteristica-5000.jpg",
    "frecuencia": "División de banda completa ",
  };
  constructor(public http: Http) {
    let itemscinco = [
      {
        "name": "Bateria",
        "profilePic": "assets/img/mantenimiento.jpg",
        "about": "Este equipo ha sido probado y se ha corroborado que respeta los límites estipulados para dispositivos digitales de la Clase B, conforme a lo dispuesto por la Parte 15 de las Directivas de la FCC. Estos límites están diseñados para ofrecer una protección razonable contra interferencias nocivas en una instalación residual. Este equipo genera, utiliza y puede emitir energía de radiofrecuencia (RF) y si no se lo instala y utiliza según las instrucciones, puede causar interferencia nociva a las comunicaciones de radio. No obstante, no existe garantía de que no se produzca interferencia en una instalación específica.",
        "imgparte1":"assets/img/partes-5000-1.jpg",
        "imgparte2":"assets/img/partes-5000-2.jpg",
        "caracteristica": "assets/img/caracteristica-5000.jpg",
        "frecuencia": "División de banda completa ",
      },
      {
        "name": "Antena",
        "profilePic": "assets/img/apx7000.jpg",
        "about": "Los radios móviles APX están entre los radios de dos vías más sofisticados que se encuentran disponibles. Tienen un nuevo diseño resistente para los usuarios que necesitan radios de alto rendimiento, calidad y confiabilidad en sus comunicaciones diarias. Esta nueva arquitectura proporciona una gran variedad de funciones avanzadas y heredadas, lo que da como resultado una solución de comunicaciones de radio de dos vías más rentable.",
        "imgparte1":"assets/img/partes-7000-1.jpg",
        "imgparte2":"assets/img/partes-7000-1.jpg",
        "caracteristica": "assets/img/caracteristica-7000.jpg",
        "frecuencia": "750 MHz",
      },
      {
        "name": "APX 7500",
        "profilePic": "assets/img/apx7500.jpg",
        "about": "Los radios móviles APX están entre los radios de dos vías más sofisticados que se encuentran disponibles. Tienen un nuevo diseño resistente para los usuarios que necesitan radios de alto rendimiento, calidad y confiabilidad en sus comunicaciones diarias. Esta nueva arquitectura proporciona una gran variedad de funciones avanzadas y heredadas, lo que da como resultado una solución de comunicaciones de radio de dos vías más rentable.",
        "imgparte1":"assets/img/partes-7500-1.jpg",
        "imgparte2":"assets/img/partes-7500-2.jpg",
        "caracteristica": "assets/img/caracteristica-7500.jpg",
        "frecuencia": "800 MHz",
      }
    ];

    for (let itemcinco of itemscinco) {
      this.itemscinco.push(new Itemcinco(itemcinco));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.itemscinco;
    } 

    return this.itemscinco.filter((itemcinco) => {
      for (let key in params) {
        let field = itemcinco[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return itemcinco;
        } else if (field == params[key]) {
          return itemcinco;
        }
      }
      return null;
    });
  }

  add(itemcinco: Itemcinco) {
    this.itemscinco.push(itemcinco);
  }

  delete(itemcinco: Itemcinco) {
    this.itemscinco.splice(this.itemscinco.indexOf(itemcinco), 1);
  }
}
