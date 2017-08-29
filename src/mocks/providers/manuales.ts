import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Manual } from '../../models/manuales';

@Injectable()
export class Manuales {
  manuales: Manual[] = [];

  defaultManual: any = {
    "name": "APX 5000",
    "profilePic": "assets/img/apx5000.png",
    "about": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
  };


  constructor(public http: Http) {
    let manuales = [
      {
        "name": "APX 5000",
        "profilePic": "assets/img/apx5000.jpg",
        "about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Carga de la Bateria",
        "carga": "La batería aprobada por Motorola que se entrega con el radio está descargada. Antes de utilizar una batería nueva, cárguela durante 16 horas como mínimo para garantizar una capacidad y un rendimiento óptimos.",
        "cargaimg": "assets/img/carga.jpg",
        "baterianame": "Colocación de la Bateria",
        "bateria": "Con el radio apagado, deslice la batería en el bastidor del radio hasta que encajen los pestillos laterales.",
        "bateriaimg":"assets/img/bateria.jpg",
        "bateriaimg2":"assets/img/bateria2.jpg",
        "preguntabateria":"¿Le quedo alguna duda, de como colocar la bateria en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/PyB81R9j1pk",
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

    for (let manual of manuales) {
      this.manuales.push(new Manual(manual));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.manuales;
    }

    return this.manuales.filter((manual) => {
      for (let key in params) {
        let field = manual[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return manual;
        } else if (field == params[key]) {
          return manual;
        }
      }
      return null;
    });
  }


  delete(manual: Manual) {
    this.manuales.splice(this.manuales.indexOf(manual), 1);
  }
}
