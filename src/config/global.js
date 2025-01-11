export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Fundamentos de geometría plana y medición de figuras simples',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de geometría plana y medición de figuras simples',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamentos conceptuales de geometría plana',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de figuras geométricas planas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Perímetro y área de figuras geométricas simples',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Unidades de medida y conversión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos básicos de unidades de medida',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Sistemas de medición',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Carpinteyro Vigil, E. (2018). Geometría y trigonometría: conceptos y aplicaciones. Grupo Editorial Patria.',
      link: 'https://elibro.net/en/ereader/tecnologicadeloriente/40528?page=2',
    },
    {
      referencia:
        'Rojas Álvarez, C. J. (2016). Introducción a la geometría (2 ed.). Universidad del Norte.',
      link: 'https://elibro.net/en/ereader/tecnologicadeloriente/69987?page=7',
    },
    {
      referencia:
        'Ortiz Ceredo, F. J. & Ortiz Cerecedo, F. J. (2018). Matemáticas 3 (2 ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/en/ereader/tecnologicadeloriente/40539?page=6',
    },
    {
      referencia:
        'Rodríguez Blanco, M. J. (2018). El nacimiento del metro: sistema métrico decimal. Bubok Publishing S.L.',
      link: 'https://elibro.net/en/ereader/tecnologicadeloriente/51433?page=7',
    },
    {
      referencia:
        'Todeschini, M. & Pellizzari, E. (2018). Cómo resolver problemas de geometría. Narcea Ediciones.',
      link: 'https://elibro.net/en/ereader/tecnologicadeloriente/113135?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Ángulo',
      significado:
        'Espacio entre dos líneas que se encuentran en un punto común, medido en grados o radianes.',
    },
    {
      termino: 'Área',
      significado:
        'Medida de la superficie cubierta por una figura geométrica en el plano, expresada en unidades cuadradas.',
    },
    {
      termino: 'Cartografía',
      significado:
        'Ciencia y técnica de elaborar mapas mediante el uso de principios geométricos y herramientas de medición.',
    },
    {
      termino: 'Círculo',
      significado:
        'Figura plana definida por todos los puntos que están a una misma distancia de un punto central llamado centro.',
    },
    {
      termino: 'Conversión de unidades',
      significado:
        'Proceso de transformar una unidad de medida en otra, manteniendo la equivalencia del valor original.',
    },
    {
      termino: 'Cuadrado',
      significado:
        'Polígono regular con cuatro lados iguales y cuatro ángulos rectos.',
    },
    {
      termino: 'Diámetro',
      significado:
        'Línea recta que pasa por el centro de un círculo y lo divide en dos mitades iguales.',
    },
    {
      termino: 'Escala',
      significado:
        'Relación proporcional entre las dimensiones reales de un objeto y su representación en un mapa, plano o modelo.',
    },
    {
      termino: 'Figura geométrica',
      significado:
        'Conjunto de puntos en un espacio que forman una estructura, como líneas, polígonos o círculos, con propiedades definidas.',
    },
    {
      termino: 'Geometría plana',
      significado:
        'Rama de la geometría que estudia las figuras bidimensionales, como triángulos, cuadrados y círculos, definidas en un plano.',
    },
    {
      termino: 'Perímetro',
      significado:
        'Longitud total del contorno de una figura geométrica. Se mide sumando la longitud de todos sus lados.',
    },
    {
      termino: 'Polígono',
      significado:
        'Figura geométrica cerrada formada por un conjunto de segmentos de línea que no se cruzan entre sí.',
    },
    {
      termino: 'Precisión',
      significado:
        'Grado de exactitud en una medición, que indica qué tan cercano está el valor medido al valor real.',
    },
    {
      termino: 'Radio',
      significado:
        'Segmento que conecta el centro de un círculo con cualquier punto de su circunferencia.',
    },
    {
      termino: 'Sistemas de medida',
      significado:
        'Conjuntos de unidades utilizadas en distintos contextos, como el sistema métrico (metros) y el imperial (pies).',
    },
    {
      termino: 'Triángulo',
      significado:
        'Figura geométrica plana con tres lados y tres ángulos internos cuya suma es siempre 180°.',
    },
    {
      termino: 'Unidades de medida',
      significado:
        'Estándares establecidos para cuantificar longitudes, áreas y volúmenes, como metros, centímetros y pulgadas.',
    },
  ],
  complementario: [],
}
