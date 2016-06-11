angular.module('menuGob')
  .component('menuGob',{
    templateUrl: "pags/menu.vista.html",
    controller: function MenuGobController() {
      this.dependencias = [
        {
          nombre: "Secretaría de Educación Pública",
          descrip: "La Secretaría de Educación Pública de México es una secretaría de estado del poder ejecutivo federal, encargada de la educación tanto científica como deportiva en todos los niveles, así como de sus contenidos, programas de estudio y calendarios. Como labor adicional, tiene en su control los registros del derecho de autor y marcas registradas.",
          img: "img/sep.png",
          link: "sep"
        },
        {
          nombre: "Secretaría de Salud",
          descrip: "La Secretaría de Salud de México es una secretaría de estado del poder ejecutivo federal, encargada de la salud del pueblo mexicano; así como de su educación, cuidado a través de campañas de vacunación y fomento a través de diversos programas de salud. Además, se encarga del control de los sitios privados y públicos, y la manutención de los sitios públicos.",
          img: "img/salud.png",
          link: "secretaria-salud"
        },
        {
          nombre: "Secretaría de Economía",
          descrip: "La Secretaría de Economía de México es la Secretaría de Estado encargada de administrar los impuestos locales y de exportación de los productos, así como de los precios de los mismos; incluyendo la defensa del consumidor ante el comercio. Tiene en su control las bases de datos de la propiedad industrial y mercantil. También administra el buen uso de la Norma Oficial Mexicana y el Sistema Internacional de Unidades; del cual éste último está registrado en el primero.",
          img: "img/se.png",
          link: "secretaria-economia"
        },
        {
          nombre: "Secretaría de Hacienda y Credito Público",
          descrip: "En México, la Secretaría de Hacienda y Crédito Público es una secretaría de estado de la administración pública federal a cuyo encargo se encuentra todo lo relacionado con la recaudación tributaria, administración financiera y fiscalización de recursos del gasto público, así como la regulación y vigilancia de las instituciones bancarias y de valores de dicho país.",
          img: "img/shcp.png",
          link: "secretaria-hacienda"
        },
        {
          nombre: "Secretaría de Desarrollo Agrario,Territorial y Urbano",
          descrip: "La Secretaría de Desarrollo Agrario, Territorial y Urbano (SEDATU) es la entidad del Gobierno encargada de los temas de desarrollo agrario, urbano y de vivienda. Con su creación, se extinguió la Secretaría de la Reforma Agraria.",
          img: "img/sedatu.png",
          link: "sedatu"
        }
      ];
    }
  })
