import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Manual7000 } from '../../models/manuales7000';

@Injectable()
export class Manuales7000 {
  manuales7000: Manual7000[] = [];

  defaultManual7000: any = {
    "name": "APX 5000",
    "profilePic": "assets/img/mantenimiento.png",
    "about": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
  };


  constructor(public http: Http) {
    let manuales7000 = [
      {
        "name": "Bateria",
        "profilePic": "assets/img/mantenimiento.jpg",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
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
    ];

    for (let manual7000 of manuales7000) {
      this.manuales7000.push(new Manual7000(manual7000));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.manuales7000;
    }

    return this.manuales7000.filter((manual7000) => {
      for (let key in params) {
        let field = manual7000[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return manual7000;
        } else if (field == params[key]) {
          return manual7000;
        }
      }
      return null;
    });
  }


  delete(manual7000: Manual7000) {
    this.manuales7000.splice(this.manuales7000.indexOf(manual7000), 1);
  }
}
