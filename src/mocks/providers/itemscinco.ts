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
        "name": "Procedimientos de limpieza",
        "profilePic": "assets/img/mantenimiento7000.gif",
        "nameman": "Limpieza APX 7000",
        "descripcion": "Los siguientes procedimientos describen los agentes de limpieza recomendados y los métodos que se utilizarán al limpiar las superficies externas e internas del radio. - Las superficies externas incluyen el cabezal de control y el chasis del radio. Estas superficies deben limpiarse cada vez que una inspección visual periódica revele la presencia de manchas, grasa o suciedad. - Las superficies internas solo se pueden limpiar cuando el radio está desarmado para el mantenimiento o reparación. -El único agente recomendado para limpiar las superficies de radio externas es una solución de 0,5 % de un detergente para vajilla suave en agua. - El único líquido recomendado por la fábrica para limpiar las placas de circuitos impresos y sus componentes es alcohol isopropílico (100 % por volumen).",
        "img": "assets/img/limpieza-7000.png",
        "recomendacion": "¡Recomendación!",
        "descripman": "Utilice todos los productos químicos según lo indica el fabricante. Asegúrese de seguir todas las precauciones de seguridad como se definen en la etiqueta o ficha técnica de seguridad de los materiales. Los efectos de ciertos productos químicos y sus vapores pueden dañar algunos plásticos. Los sprays en aerosol, los limpiadores de sintonizadores, los limpiadores de tarjetas de circuito, los alcoholes y otros químicos no deben entrar en contacto con las carcasas de plástico o metal del radio. Se puede producir desde una corrosión extrema hasta la desintegración del plástico.",
        "img2":"assets/img/limpieza-7500-2.png",
        "img3":"assets/img/limpieza-7000-3.png",
        "pregunta":"¿Le quedo alguna duda, de la limpieza correcta del radio APX 7000?. A continuación, encontrara un video relacionado a este tema.",
        "video":"https://www.youtube.com/embed/1Pkedk_zDSs?rel=0?ecver=1",
      },
            {
        "name": "Procedimientos de desensamblaje",
        "profilePic": "assets/img/mantenimiento7000.gif",
        "nameman": "Desensamblaje",
        "descripcion": "En esta sección se detallan los procedimientos necesarios para retirar y volver a colocar las tarjetas de circuito impreso en los radios móviles APX. Tras realizar la solución de problemas y determinar qué es lo que se debe reemplazar, desconecte el equipo de prueba, el cable de la antena y el cable de alimentación.",
        "img": "assets/img/ensamble-7000.png",
        "recomendacion": "¡Recomendación!",
        "descripman": "Desconecte el cable de alimentación del radio antes de abrir y retirar el PCB. No desconectar la alimentación puede ocasionar daño en la unidad debido a corrientes de sobrevoltaje o cortocircuitos accidentales, así como también puede ocasionar peligro de sacudidas eléctricas.",
        "img2":"assets/img/ensamble-7000-2.png",
        "img3":"assets/img/ensamble-7000-3.png",
        "pregunta":"¿Le quedo alguna duda, del desensamblaje del radio APX 7000?. A continuación, encontrara un video relacionado a este tema.",
        "video":"https://www.youtube.com/embed/d9AX47YYMbI?rel=0?ecver=1",
      },
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
        "name": "Piezas APX 7000",
        "profilePic": "assets/img/mantenimiento.gif",
        "nameman": "Reemplazo de Piezas",
        "descripcion": "Debe tener especial cuidado al asegurarse de que el componente sospechoso es efectivamente el origen del fallo. Así no tendrá que desoldar componentes sin necesidad ni extraer piezas, lo que podría dañar o debilitar otros componentes o la misma tarjeta de circuito impreso (PCB).",
        "img": "assets/img/pieza-7000.png",
        "recomendacion": "¡Recomendación!",
        "descripman": "Cuando se reemplazan piezas dañadas, se deben usar piezas idénticas. Compruebe la lista de piezas para obtener el número de pieza correcto de Motorola y solicitar el componente al centro de Piezas de Comunicaciones de Motorola más cercano. Las piezas que aparecen en la lista y que no tienen número no se pueden reemplazar en el campo.",
        "img2":"assets/img/pieza-7000-2.png",
        "img3":"assets/img/pieza-7000-3.png",
        "pregunta":"¿Le quedo alguna duda, de este segmento?. A continuación, encontrara un video relacionado a este tema.",
        "video":"https://www.youtube.com/embed/d9AX47YYMbI?rel=0?ecver=1",
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
        "descripman": "Se puede pensar, que las perillas del display esten dañadas, pero ese problema se puede dar, porque, puede haber suciedad en cada una de las perillas.",
        "img2":"assets/img/perillas-5000-2.jpg",
        "img3":"assets/img/perillas-5000-3.jpg",
        "pregunta":"¿Le quedo alguna duda, de como colocar la antena en el radio?. A continuación, encontrara un video relacionado a este tema.",
        "video":"https://www.youtube.com/embed/jMmqkWJBA0c",
      },
      {
        "name": "RVA-Display",
        "profilePic": "assets/img/mantenimiento7000.gif",
        "nameman": "Prueba RVA-Display",
        "descripcion": "Este tipo de mantenimiento, se hace con el fin de detectar fallas correspondientes a calibración y usabilidad del display del radio correspondiente.",
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
