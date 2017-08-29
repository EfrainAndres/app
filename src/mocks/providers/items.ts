import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "APX 5000",
    "profilePic": "assets/img/apx5000.png",
    "about": "Este equipo ha sido probado y se ha corroborado que respeta los límites estipulados para dispositivos digitales de la Clase B, conforme a lo dispuesto por la Parte 15 de las Directivas de la FCC. Estos límites están diseñados para ofrecer una protección razonable contra interferencias nocivas en una instalación residual. Este equipo genera, utiliza y puede emitir energía de radiofrecuencia (RF) y si no se lo instala y utiliza según las instrucciones, puede causar interferencia nociva a las comunicaciones de radio. No obstante, no existe garantía de que no se produzca interferencia en una instalación específica.",
    "imgparte1":"assets/img/apx5000/partes1.png",
    "imgparte2":"assets/img/apx5000/partes2.png",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "APX 5000",
        "profilePic": "assets/img/apx5000.jpg",
        "about": "Este equipo ha sido probado y se ha corroborado que respeta los límites estipulados para dispositivos digitales de la Clase B, conforme a lo dispuesto por la Parte 15 de las Directivas de la FCC. Estos límites están diseñados para ofrecer una protección razonable contra interferencias nocivas en una instalación residual. Este equipo genera, utiliza y puede emitir energía de radiofrecuencia (RF) y si no se lo instala y utiliza según las instrucciones, puede causar interferencia nociva a las comunicaciones de radio. No obstante, no existe garantía de que no se produzca interferencia en una instalación específica.",
        "imgparte1":"assets/img/partes1.jpg",
        "imgparte2":"assets/img/partes2.jpg",
      },
      {
        "name": "APX 7000",
        "profilePic": "assets/img/apx7000.jpg",
        "about": "Los radios móviles APX están entre los radios de dos vías más sofisticados que se encuentran disponibles. Tienen un nuevo diseño resistente para los usuarios que necesitan radios de alto rendimiento, calidad y confiabilidad en sus comunicaciones diarias. Esta nueva arquitectura proporciona una gran variedad de funciones avanzadas y heredadas, lo que da como resultado una solución de comunicaciones de radio de dos vías más rentable."
      },
      {
        "name": "APX 7500",
        "profilePic": "assets/img/apx7500.jpg",
        "about": "Los radios móviles APX están entre los radios de dos vías más sofisticados que se encuentran disponibles. Tienen un nuevo diseño resistente para los usuarios que necesitan radios de alto rendimiento, calidad y confiabilidad en sus comunicaciones diarias. Esta nueva arquitectura proporciona una gran variedad de funciones avanzadas y heredadas, lo que da como resultado una solución de comunicaciones de radio de dos vías más rentable."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
