import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Itemcinco } from '../../models/itemcinco';

@Injectable()
export class Itemscinco {
  itemscinco: Itemcinco[] = [];

  defaultItemcinco: any = {
    "name": "Bateria",
    "profilePic": "assets/img/mantenimiento7000.gif",
    "about": "Este equipo ha sido probado y se ha corroborado que respeta los límites estipulados para dispositivos digitales de la Clase B, conforme a lo dispuesto por la Parte 15 de las Directivas de la FCC. Estos límites están diseñados para ofrecer una protección razonable contra interferencias nocivas en una instalación residual. Este equipo genera, utiliza y puede emitir energía de radiofrecuencia (RF) y si no se lo instala y utiliza según las instrucciones, puede causar interferencia nociva a las comunicaciones de radio. No obstante, no existe garantía de que no se produzca interferencia en una instalación específica.",
    "imgparte1":"assets/img/partes-5000-1.jpg",
    "imgparte2":"assets/img/partes-5000-2.jpg",
    "video": "https://www.youtube.com/embed/Z4x3lh3Nzdc",
  };
  constructor(public http: Http) {
    let itemscinco = [
      {
        "name": "Bateria",
        "profilePic": "assets/img/mantenimiento7000.gif",
        "nameman": "Carga de la Bateria",
        "descripcion": "La batería aprobada por Motorola que se entrega con el radio está descargada. Antes de utilizar una batería nueva, cárguela durante 16 horas como mínimo para garantizar una capacidad y un rendimiento óptimos.",
        "img":"assets/img/partes-5000-1.jpg",
        "recomendacion": "¡Recomendación!",
        "descripman": "Con el radio apagado, deslice la batería en el bastidor del radio hasta que encajen los pestillos laterales.",
        "img2":"assets/img/partes-5000-2.jpg",
        "img3":"assets/img/partes-5000-2.jpg",
        "pregunta":"¿Le quedo alguna duda, de como colocar la bateria en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "video": "https://www.youtube.com/embed/Z4x3lh3Nzdc"
      },
      {
        "name": "Antena",
        "profilePic": "assets/img/mantenimiento7000.gif",
        "nameman": "Colocación Antena",
        "descripcion": "Con el radio apagado, coloque la antena en su receptáculo y gírela hacia la derecha para ajustarla a el radio.",
        "img":"assets/img/antena.png",
        "recomendacion": "¡Recomendación!",
        "descripman": "Para retirar la antena, gírela hacia la izquierda. Antes de retirar la antena, asegúrese de apagar el radio.",
        "img2":"assets/img/antena-5000-2.jpg",
        "img3":"assets/img/antena-5000-3.jpg",
        "pregunta":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "video": "https://www.youtube.com/embed/Z4x3lh3Nzdc"
      },
      {
        "name": "Potencia del Radio ",
        "profilePic": "assets/img/mantenimiento7000.gif",
        "nameman": "Potencia baja del radio",
        "descripcion": "Dar a conocer, la forma que el radio, puede presentar fallas en su potencia, por lo cual se dan algunas recomendaciones de como solucionar y dar mantenimiento a este fallo",
        "img": "assets/img/potencia-5000.png",
        "recomendacion": "¡Recomendación!",
        "descripman": "Para evitar el daño del conector, protéjalo con la cubierta de conector cuando no lo utilice.",
        "img2":"assets/img/potencia-5000-2.png",
        "img3":"assets/img/potencia-5000-3.png",
        "pregunta":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "video":"https://www.youtube.com/embed/z1YUx898lFw",
      },
      {
        "name": "Falla de Perillas",
        "profilePic": "assets/img/mantenimiento7000.gif",
        "nameman": "Falla de Perillas Display",
        "descripcion": "La falla de perillas en el display, como lo es, el potenciometro de volumen y la perilla de canales, se soluciona cambiando los componente de cada perilla, mencionada anteriormente.",
        "img": "assets/img/perillas-5000.jpg",
        "recomendacion": "¡Recomendación!",
        "descripman": "Se puede pensar, que las perillas del sisplay esten dañadas, pero ese problema se puede dar, porque, puede haber suciendad en cada una de las perillas,",
        "img2":"assets/img/perillas-5000-2.jpg",
        "img3":"assets/img/perillas-5000-3.jpg",
        "pregunta":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "video":"https://www.youtube.com/embed/jMmqkWJBA0c",
      },
      {
        "name": "RVA-Display",
        "profilePic": "assets/img/mantenimiento7000.gif",
        "nameman": "Prueba RVA-Display",
        "descripcion": "Este tipo de mantenimiento, se hace con el fin de detectar fallos correspondientes a calibración y usabilidad del display del radio correspondiente.",
        "img": "assets/img/display-5000.jpg",
        "recomendacion": "¡Recomendación!",
        "descripman": "Para hacer este mantenimiento, en el video 'Prueba RVA-Display', se hace descripción paso a paso de este mantenimiento",
        "img2":"assets/img/display-5000-2.jpg",
        "img3":"assets/img/display-5000-3.png",
        "pregunta":"¿Le quedo alguna duda, de como realizar la Prueba RVA-Display?. A continuación, encontrara un video relacionado a este tema.",
        "video":"https://www.youtube.com/embed/c7mRP58m8dc",
      },
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
