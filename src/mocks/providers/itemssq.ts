import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Itemsq } from '../../models/itemsq';

@Injectable()
export class Itemssq {
  itemssq: Itemsq[] = [];

  defaultItemsq: any = {
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
  };


  constructor(public http: Http) {
    let itemssq = [
      {
        "name": "Introducción Mantenimiento Prevéntivo",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Mantenimiento Prevéntivo",
        "carga": "Verifique que las superficies externas del radio estén limpias y que todos los controles externos y switches estén funcionando. No es necesario realizar una inspección detallada de los circuitos electrónicos internos.",
        "cargaimg": "assets/img/preventivo-7500.png",
        "baterianame": "¡Recomendación!",
        "bateria": "Compruebe que todas las cubiertas antipolvo estén en su lugar.",
        "bateriaimg":"assets/img/preventivo-7500-2.png",
        "bateriaimg2":"assets/img/preventivo-7500-3.png",
        "preguntabateria":"¿Le quedo alguna duda, del paso preventivo a la hora del mantenimiento del APX 7500?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/h2u_qGcZfTc?rel=0?ecver=1",
      },
      {
        "name": "Procedimientos de limpieza",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Limpieza APX 7500",
        "carga": "Los siguientes procedimientos describen los agentes de limpieza recomendados y los métodos que se utilizarán al limpiar las superficies externas e internas del radio. - Las superficies externas incluyen el cabezal de control y el chasis del radio. Estas superficies deben limpiarse cada vez que una inspección visual periódica revele la presencia de manchas, grasa o suciedad. - Las superficies internas solo se pueden limpiar cuando el radio está desarmado para el mantenimiento o reparación. -El único agente recomendado para limpiar las superficies de radio externas es una solución de 0,5 % de un detergente para vajilla suave en agua. - El único líquido recomendado por la fábrica para limpiar las placas de circuitos impresos y sus componentes es alcohol isopropílico (100 % por volumen).",
        "cargaimg": "assets/img/limpieza-7500.png",
        "baterianame": "¡Recomendación!",
        "bateria": "Utilice todos los productos químicos según lo indica el fabricante. Asegúrese de seguir todas las precauciones de seguridad como se definen en la etiqueta o ficha técnica de seguridad de los materiales. Los efectos de ciertos productos químicos y sus vapores pueden dañar algunos plásticos. Los sprays en aerosol, los limpiadores de sintonizadores, los limpiadores de tarjetas de circuito, los alcoholes y otros químicos no deben entrar en contacto con las carcasas de plástico o metal del radio. Se puede producir desde una corrosión extrema hasta la desintegración del plástico.",
        "bateriaimg":"assets/img/limpieza-7500-2.png",
        "bateriaimg2":"assets/img/limpieza-7500-3.png",
        "preguntabateria":"¿Le quedo alguna duda, de la limpieza correcta del radio APX 7500?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/iiePQV2M4B0?rel=0?ecver=1",
      },
      {
        "name": "Limpieza de las placas",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Limpieza de las placas de circuitos internos y sus componentes",
        "carga": "Después de retirar la PCB de la carcasa de plástico, puede aplicar alcohol isopropílico (100 %) con una escobilla rígida, no metálica con cerdas cortas para soltar materiales incrustados o pegados ubicados en áreas de difícil acceso. El alcohol es un líquido muy humectante y puede mover la suciedad a lugares no deseados si se utiliza una cantidad excesiva. Asegúrese de que los componentes de control o sintonizables no se mojen con el líquido. No use aire a alta presión para acelerar el proceso de secado, ya que esto puede hacer que el líquido se junte en lugares no deseados. Tras terminar el proceso de limpieza, use un paño suave, absorbente y que no deje pelusas para secar el área.",
        "cargaimg": "assets/img/circuitos-7500.png",
        "baterianame": "¡Recomendación!",
        "bateria": "Siempre use un suministro de alcohol nuevo y un contenedor limpio para evitar la contaminación por materiales disueltos (de usos anteriores).",
        "bateriaimg":"assets/img/circuitos-7500-2.png",
        "bateriaimg2":"assets/img/limpieza-7500-3.png",
        "preguntabateria":"¿Le quedo alguna duda, de la limpieza correcta de los circuitos?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/UdVLBg6g8Zs?rel=0?ecver=1",
      },
      {
        "name": "Precauciones de manejo",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Manejo APX 7500",
        "carga": ". No intente desmontar los componentes del cabezal de control sin seguir las siguientes precauciones de manejo. * Retire los generadores de estática (plásticos, poliestireno, etc.) de la zona de trabajo. * Retire chaquetas de nylon o poliéster de punto doble, enrolle mangas largas y retire corbatas sueltas. * Almacene y transporte todos los dispositivos sensibles a la estática en contenedores protectores de ESD. * Desconecte la unidad del suministro eléctrico antes de retirar o insertar los componentes sensibles a ESD, a menos que se indique lo contrario.",
        "cargaimg": "assets/img/manejo-7500.png",
        "baterianame": "Colocación de la Bateria",
        "bateria": "Use una estación de trabajo a prueba de estática, que se puede conseguir mediante el uso de un kit antiestático (pieza número 0180386A82 de Motorola). Este kit incluye una muñequera, dos cables a tierra, un piso de madera con control de estática y una alfombra con control de estática.",
        "bateriaimg":"assets/img/manejo-7500-2.png",
        "bateriaimg2":"assets/img/manejo-7500-3.png",
        "preguntabateria":"¿Le quedo alguna duda, del manejo adecuado del radio?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/yr4aT507mX8?rel=0?ecver=1",
      },
      {
        "name": "Piezas APX 7500",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Reemplazo de Piezas",
        "carga": "Debe tener especial cuidado al asegurarse de que el componente sospechoso es efectivamente el origen del fallo. Así no tendrá que desoldar componentes sin necesidad ni extraer piezas, lo que podría dañar o debilitar otros componentes o la misma tarjeta de circuito impreso (PCB).",
        "cargaimg": "assets/img/pieza-7500.png",
        "baterianame": "¡Recomendación!",
        "bateria": "Cuando se reemplazan piezas dañadas, se deben usar piezas idénticas. Compruebe la lista de piezas para obtener el número de pieza correcto de Motorola y solicitar el componente al centro de Piezas de Comunicaciones de Motorola más cercano. Las piezas que aparecen en la lista y que no tienen número no se pueden reemplazar en el campo.",
        "bateriaimg":"assets/img/pieza-7500-2.png",
        "bateriaimg2":"assets/img/pieza-7500-3.png",
        "preguntabateria":"¿Le quedo alguna duda, de este segmento?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/UdVLBg6g8Zs?rel=0?ecver=1",
      },
      {
        "name": "tarjeta TIB",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Verificación de tarjeta TIB",
        "carga": "• Compruebe que todos los reguladores de voltaje estén en el nivel de salida adecuado + /- 5 %. Un regulador puede alimentar a un componente que no esté relacionado directamente con el circuito primario en evaluación, pero aún así podría ser necesario para el correcto funcionamiento. • Compruebe que la conexión a tierra desde TIB está haciendo bien el contacto con el transceptor de radio.",
        "cargaimg": "assets/img/preventivo-7500.png",
        "baterianame": "¡Recomendación!",
        "bateria": "Revise si hay cortocircuitos entre los pines de TIB que puedan producirse entre el conector de plástico negro y la PCB, que se puedan haber producido por la entrada de líquido después de perder una junta tórica.",
        "bateriaimg":"assets/img/preventivo-7500-2.png",
        "bateriaimg2":"assets/img/preventivo-7500-3.png",
        "preguntabateria":"¿Le quedo alguna duda, del uso adecuado de la tarjeta TIB?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/XthL6fIW3yY?rel=0?ecver=1",
      },
      {
        "name": "Procedimientos de desensamblaje",
        "profilePic": "assets/img/mantenimiento.gif",
        //"about5000": "Manuales de Ayuda, Sección en la cual se podra observar paso a paso de la ayuda la cual esta buscando.",
        "carganame": "Desensamblaje",
        "carga": "En esta sección se detallan los procedimientos necesarios para retirar y volver a colocar las tarjetas de circuito impreso en los radios móviles APX. Tras realizar la solución de problemas y determinar qué es lo que se debe reemplazar, desconecte el equipo de prueba, el cable de la antena y el cable de alimentación.",
        "cargaimg": "assets/img/ensamble-7500.png",
        "baterianame": "¡Recomendación!",
        "bateria": "Desconecte el cable de alimentación del radio antes de abrir y retirar el PCB. No desconectar la alimentación puede ocasionar daño en la unidad debido a corrientes de sobrevoltaje o cortocircuitos accidentales, así como también puede ocasionar peligro de sacudidas eléctricas.",
        "bateriaimg":"assets/img/ensamble-7500-2.png",
        "bateriaimg2":"assets/img/ensamble-7500-3.png",
        "preguntabateria":"¿Le quedo alguna duda, del desensamblaje del radio APX 7500?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/FwvC_n98OcI?rel=0?ecver=1",
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
        "cargaimg": "assets/img/preventivo-7500.png",
        "baterianame": "¡Recomendación!",
        "bateria": "Se puede pensar, que las perillas del display esten dañadas, pero ese problema se puede dar, porque, puede haber suciedad en cada una de las perillas.",
        "bateriaimg":"assets/img/preventivo-7500-2.png",
        "bateriaimg2":"assets/img/preventivo-7500-3.png",
        "preguntabateria":"¿Le quedo alguna duda, de como detectar fallas en las perillas?. A continuación, encontrara un video relacionado a este tema.",
        "videobateria":"https://www.youtube.com/embed/DdOk270818M?rel=0?ecver=1",
      }
    ];

    for (let itemsq of itemssq) {
      this.itemssq.push(new Itemsq(itemsq));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.itemssq;
    }

    return this.itemssq.filter((itemsq) => {
      for (let key in params) {
        let field = itemsq[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return itemsq;
        } else if (field == params[key]) {
          return itemsq;
        }
      }
      return null;
    });
  }

  add(itemsq: Itemsq) {
    this.itemssq.push(itemsq);
  }

  delete(itemsq: Itemsq) {
    this.itemssq.splice(this.itemssq.indexOf(itemsq), 1);
  }
}
