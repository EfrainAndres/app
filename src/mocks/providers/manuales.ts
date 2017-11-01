import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Manual } from '../../models/manuales';

@Injectable()
export class Manuales {
  manuales: Manual[] = [];

  defaultManual: any = {
    "name": "APX 5000",
    "profilePic": "assets/img/mantenimiento.gif",
    "about": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
  };


  constructor(public http: Http) {
    let manuales = [
      {
        "name": "Desarme del Radio",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Desarme Único del Radio",
        "carga": "Con el radio apagado, coloquelo en una superficie plana.",
        "cargaimg": "assets/img/accesorio-5000.png",
        "baterianame": "¡Recomendación!",
        "bateria": "Se recomienda, tener en cuenta las herramientas de desarme, y saber su uso adecuado.",
        "bateriaimg":"assets/img/accesorio-5000-2.png",
        "bateriaimg2":"assets/img/accesorio-5000-3.png",
        "preguntabateria":"¿Le quedo alguna duda, de como desarmar el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/videoseries?list=PLCXQ-jT94zu9-EbvMUBrfysY_LoLoeBP4",
      },
      {
        "name": "Armado del Radio",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Armado Único del Radio",
        "carga": "Con el radio apagado, coloquelo en una superficie plana.",
        "cargaimg": "assets/img/display-5000.jpg",
        "baterianame": "¡Recomendación!",
        "bateria": "Se recomienda, tener en cuenta las herramientas de desarme y armado, y saber su uso adecuado.",
        "bateriaimg":"assets/img/display-5000-2.jpg",
        "bateriaimg2":"assets/img/display-5000-3.jpg",
        "preguntabateria":"¿Le quedo alguna duda, de como armar el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/videoseries?list=PLCXQ-jT94zu_rI75qNEvOiZ2Nx-QMTjeg",
      },
      {
        "name": "Antena",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Colocación Antena",
        "carga": "Con el radio apagado, coloque la antena en su receptáculo y gírela hacia la derecha para ajustarla a el radio.",
        "cargaimg": "assets/img/antena.png",
        "baterianame": "¡Recomendación!",
        "bateria": "Para retirar la antena, gírela hacia la izquierda. Antes de retirar la antena, asegúrese de apagar el radio.",
        "bateriaimg":"assets/img/antena-5000-2.jpg",
        "bateriaimg2":"assets/img/antena-5000-3.jpg",
        "preguntabateria":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/JfRDNmMpTWU?rel=0?ecver=1",
      },
      {
        "name": "Bateria",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Carga de la Bateria",
        "carga": "La batería aprobada por Motorola que se entrega con el radio está descargada. Antes de utilizar una batería nueva, cárguela durante 16 horas como mínimo para garantizar una capacidad y un rendimiento óptimos.",
        "cargaimg": "assets/img/carga.jpg",
        "baterianame": "Colocación de la Bateria",
        "bateria": "Con el radio apagado, deslice la batería en el bastidor del radio hasta que encajen los pestillos laterales.",
        "bateriaimg":"assets/img/bateria.jpg",
        "bateriaimg2":"assets/img/bateria2.jpg",
        "preguntabateria":"¿Le quedo alguna duda, de como colocar la bateria en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/2wMGcVuVJNg?rel=0?ecver=1",
      },
      {
        "name": "Conector de Accesorios",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Colocación de Accesorios",
        "carga": "El conector de accesorios se encuentra en el lateral de la antena del radio. Se utiliza para conectar accesorios al radio. Para retirar la cubierta del conector de accesorios, gire el tornillo de mano hacia la izquierda hasta que se libere del radio. Si el tornillo de mano",
        "cargaimg": "assets/img/accesorio-5000.png",
        "baterianame": "¡Recomendación!",
        "bateria": "Para evitar el daño del conector, protéjalo con la cubierta de conector cuando no lo utilice.",
        "bateriaimg":"assets/img/accesorio-5000-2.png",
        "bateriaimg2":"assets/img/accesorio-5000-3.png",
        "preguntabateria":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/s3HT3X_NAl8?rel=0?ecver=1",
      },
      {
        "name": "Potencia del Radio ",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Potencia baja del radio",
        "carga": "Dar a conocer, la forma que el radio, puede presentar fallas en su potencia, por lo cual se dan algunas recomendaciones de como solucionar y dar mantenimiento a este fallo",
        "cargaimg": "assets/img/potencia-5000.png",
        "baterianame": "¡Recomendación!",
        "bateria": "Para evitar el daño del conector, protéjalo con la cubierta de conector cuando no lo utilice.",
        "bateriaimg":"assets/img/potencia-5000-2.png",
        "bateriaimg2":"assets/img/potencia-5000-3.png",
        "preguntabateria":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/XthL6fIW3yY?rel=0?ecver=1",
      },
      {
        "name": "Transmisión",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Falla de Transmisión",
        "carga": "La falla de trasmisión, se soluciona, cambiando la tarjeta bocom.",
        "cargaimg": "assets/img/transmision-5000.jpg",
        "baterianame": "¡Recomendación!",
        "bateria": "Para cambiar la tarjeta y establecer de nuevo, la trasmisión, se debe tener en cuenta en cuenta el armado y el desarmado del Radio APX 5000. En la sección de mantenimiento del Radio APX 5000, se encuentra el armado y el desarme del radio.",
        "bateriaimg":"assets/img/transmision-5000-2.jpg",
        "bateriaimg2":"assets/img/transmision-5000-3.jpg",
        "preguntabateria":"¿Le quedo alguna duda, de como manejar el fallo de transmision del radio APX 5000?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/bHM3rGMd3b4?rel=0?ecver=1",
      },
      {
        "name": "RVA-Display",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Prueba RVA-Display",
        "carga": "Este tipo de mantenimiento, se hace con el fin de detectar fallos correspondientes a calibración y usabilidad del display del radio correspondiente.",
        "cargaimg": "assets/img/display-5000.jpg",
        "baterianame": "¡Recomendación!",
        "bateria": "Para hacer este mantenimiento, en el video 'Prueba RVA-Display', se hace descripción paso a paso de este mantenimiento",
        "bateriaimg":"assets/img/display-5000-2.jpg",
        "bateriaimg2":"assets/img/display-5000-3.png",
        "preguntabateria":"¿Le quedo alguna duda, de como realizar la Prueba RVA-Display?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/M79-0mmAIck?rel=0?ecver=1",
      },
      {
        "name": "Sensibilidad",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Falla Sensibilidad Baja",
        "carga": "Se debe tener en cuenta, que el cable de la antena no este partido. Y el pin de la antena, no este dañado",
        "cargaimg": "assets/img/sensibilibdad-5000.jpg",
        "baterianame": "¡Recomendación!",
        "bateria": "Para tener en cuenta este mantenimiento, se debe tener en cuenta en cuenta el armado y el desarmado del Radio APX 5000. En la sección de mantenimiento del Radio APX 5000, se encuentra el armado y el desarme del radio.",
        "bateriaimg":"assets/img/sensibilibdad-5000-2.png",
        "bateriaimg2":"assets/img/sensibilibdad-5000-3.png",
        "preguntabateria":"¿Le quedo alguna duda, de como detectar fallo de sensiblidad?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/1ZgwvqXvvIs?rel=0?ecver=1",
      },
      {
        "name": "Falla de Perillas",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Falla de Perillas Display",
        "carga": "La falla de perillas en el display, como lo es, el potenciometro de volumen y la perilla de canales, se soluciona cambiando los componente de cada perilla, mencionada anteriormente.",
        "cargaimg": "assets/img/perillas-5000.jpg",
        "baterianame": "¡Recomendación!",
        "bateria": "Se puede pensar, que las perillas del sisplay esten dañadas, pero ese problema se puede dar, porque, puede haber suciendad en cada una de las perillas,",
        "bateriaimg":"assets/img/perillas-5000-2.jpg",
        "bateriaimg2":"assets/img/perillas-5000-3.jpg",
        "preguntabateria":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/DdOk270818M?rel=0?ecver=1",
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
