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
        "name": "Bateria",
        "profilePic": "assets/img/apx5000.jpg",
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
      {
        "name": "Antena",
        "profilePic": "assets/img/apx5000.jpg",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Colocación Antena",
        "carga": "Con el radio apagado, coloque la antena en su receptáculo y gírela hacia la derecha para ajustarla a el radio.",
        "cargaimg": "assets/img/antena-5000.jpg",
        "baterianame": "¡Recomendación!",
        "bateria": "Para retirar la antena, gírela hacia la izquierda. Antes de retirar la antena, asegúrese de apagar el radio.",
        "bateriaimg":"assets/img/antena-5000-2.jpg",
        "bateriaimg2":"assets/img/antena-5000-3.jpg",
        "preguntabateria":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/PyB81R9j1pk",
      },
      {
        "name": "Conector de Accesorios",
        "profilePic": "assets/img/apx5000.jpg",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Colocación de Accesorios",
        "carga": "El conector de accesorios se encuentra en el lateral de la antena del radio. Se utiliza para conectar accesorios al radio. Para retirar la cubierta del conector de accesorios, gire el tornillo de mano hacia la izquierda hasta que se libere del radio. Si el tornillo de mano",
        "cargaimg": "assets/img/accesorio-5000.jpg",
        "baterianame": "¡Recomendación!",
        "bateria": "Para evitar el daño del conector, protéjalo con la cubierta de conector cuando no lo utilice.",
        "bateriaimg":"assets/img/accesorio-5000-2.jpg",
        "bateriaimg2":"assets/img/accesorio-5000-3.jpg",
        "preguntabateria":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/PyB81R9j1pk",
      },
      {
        "name": "Potencia del Radio ",
        "profilePic": "assets/img/apx5000.jpg",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Potencia baja del radio",
        "carga": "Dar a conocer, la forma que el radio, puede presentar fallas en su potencia, por lo cual se dan algunas recomendaciones de como solucionar y dar mantenimiento a este fallo",
        "cargaimg": "assets/img/potencia-5000.jpg",
        "baterianame": "¡Recomendación!",
        "bateria": "Para evitar el daño del conector, protéjalo con la cubierta de conector cuando no lo utilice.",
        "bateriaimg":"assets/img/potencia-5000-2.jpg",
        "bateriaimg2":"assets/img/potencia-5000-3.jpg",
        "preguntabateria":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/PyB81R9j1pk",
      },
      {
        "name": "Conector de Accesorios",
        "profilePic": "assets/img/apx5000.jpg",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Colocación de Accesorios",
        "carga": "El conector de accesorios se encuentra en el lateral de la antena del radio. Se utiliza para conectar accesorios al radio. Para retirar la cubierta del conector de accesorios, gire el tornillo de mano hacia la izquierda hasta que se libere del radio. Si el tornillo de mano",
        "cargaimg": "assets/img/accesorio-5000.jpg",
        "baterianame": "¡Recomendación!",
        "bateria": "Para evitar el daño del conector, protéjalo con la cubierta de conector cuando no lo utilice.",
        "bateriaimg":"assets/img/accesorio-5000-2.jpg",
        "bateriaimg2":"assets/img/accesorio-5000-3.jpg",
        "preguntabateria":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/PyB81R9j1pk",
      },
      {
        "name": "Conector de Accesorios",
        "profilePic": "assets/img/apx5000.jpg",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Colocación de Accesorios",
        "carga": "El conector de accesorios se encuentra en el lateral de la antena del radio. Se utiliza para conectar accesorios al radio. Para retirar la cubierta del conector de accesorios, gire el tornillo de mano hacia la izquierda hasta que se libere del radio. Si el tornillo de mano",
        "cargaimg": "assets/img/accesorio-5000.jpg",
        "baterianame": "¡Recomendación!",
        "bateria": "Para evitar el daño del conector, protéjalo con la cubierta de conector cuando no lo utilice.",
        "bateriaimg":"assets/img/accesorio-5000-2.jpg",
        "bateriaimg2":"assets/img/accesorio-5000-3.jpg",
        "preguntabateria":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/PyB81R9j1pk",
      },
      {
        "name": "Conector de Accesorios",
        "profilePic": "assets/img/apx5000.jpg",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Colocación de Accesorios",
        "carga": "El conector de accesorios se encuentra en el lateral de la antena del radio. Se utiliza para conectar accesorios al radio. Para retirar la cubierta del conector de accesorios, gire el tornillo de mano hacia la izquierda hasta que se libere del radio. Si el tornillo de mano",
        "cargaimg": "assets/img/accesorio-5000.jpg",
        "baterianame": "¡Recomendación!",
        "bateria": "Para evitar el daño del conector, protéjalo con la cubierta de conector cuando no lo utilice.",
        "bateriaimg":"assets/img/accesorio-5000-2.jpg",
        "bateriaimg2":"assets/img/accesorio-5000-3.jpg",
        "preguntabateria":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/PyB81R9j1pk",
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
