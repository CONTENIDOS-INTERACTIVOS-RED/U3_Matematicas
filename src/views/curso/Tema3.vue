<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Aplicaciones geométricas en problemas cotidianos'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .p-4.bg-1.mb-5(data-aos='fade-left')
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t3/1.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 La geometría no es solo un conjunto de fórmulas abstractas y figuras complejas que se encuentran en los libros de matemáticas. Es una herramienta poderosa que le acompaña en cada momento de su vida cotidiana, transformando su percepción del espacio y ayudándolo a comprender el mundo que le rodea.
    
    .row.justify-content-center.mb-5(data-aos='fade-left')
      .col-sm-12.col-lg-8
        p.mb-4 Descubrirá cómo los principios geométricos se entrelazan con situaciones prácticas que experimenta en su día a día, desde la construcción de una vivienda hasta la planificación de un viaje.
        p.mb-0 La geometría nos permite desarrollar un pensamiento estructurado, analítico y creativo. No solo aprenderá conceptos matemáticos, sino que desarrollará habilidades de resolución de problemas que serán fundamentales en su desarrollo profesional y personal. Cada concepto que abordaremos tiene una conexión directa con su entorno, lo que le ayudará a comprender la importancia de esta disciplina más allá del aula de clase.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/2.svg', alt='')

    #t_3_1.titulo-segundo(data-aos='fade-left')
      h2 #[span 3.1] Geometría básica en construcciones y diseño
    p.mb-4(data-aos='fade-left') Se abordan los conceptos básicos de geometría, como por ejemplo un arquitecto que diseña espacios funcionales y estéticos. Estos conceptos le ayudarán a comprender que cada línea, ángulo y figura geométrica, tiene un propósito específico en el diseño arquitectónico, la construcción y otras ciencias. 
    .p-4.bg-10.mb-5(data-aos='fade-left')
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t3/3.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 #[strong Recuerde.] Las formas geométricas no son simples representaciones abstractas, sino herramientas precisas para crear estructuras seguras, eficientes y armoniosas.

    p.mb-4(data-aos='fade-left') Según Rojas Álvarez (2016), la geometría es un lenguaje universal que permite traducir ideas creativas en estructuras tangibles. Carpinteyro Vigil (2018), enfatiza que la comprensión geométrica es fundamental para desarrollar soluciones innovadoras en arquitectura y diseño urbano.
    p.mb-4(data-aos='fade-left') A continuación, se realizan una serie de ejercicios enfocados en actividades del día a día, que le permitirán encontrar la relación directa entre la matemática y la solución a preguntas generales. 

    h2.mb-3(data-aos='fade-left') Ejemplo de aplicación en construcción
    .bg-13.p-4.mb-5(data-aos='fade-left')
      .row.justify-content-center.align-items-center.mb-0
        .col-sm-12.col-lg-7
          p.mb-0 Imagine que está diseñando una vivienda bioclimática. Utilizará principios geométricos para optimizar la orientación, calcular ángulos de incidencia solar, determinar la distribución de espacios y garantizar una eficiencia energética óptima. Cada decisión geométrica impactará directamente en el confort y la sostenibilidad de la construcción.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/t3/4.svg', alt='') 

    h2.mb-3(data-aos='fade-left')  Ejercicios resueltos de aplicación geométrica
    .row.justify-content-center.mb-5(data-aos='fade-left')
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t3/5.png')
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Ejercicio 1: Cálculo de área de terreno')
            p.mb-4.fw-bold Cálculo de área de terreno
            p.mb-0 Paso 1. Medir los lados del terreno (lado A = 15m, lado B = 20m).
            p.mb-0 Paso 2. Identificar la forma geométrica (rectángulo).
            p.mb-0 Paso 3. Aplicar fórmula de área (Área = base x altura).
            p.mb-0 Resultado. Área = 15m x 20m = 300m².
          
          div(titulo='Ejercicio 2: Ángulos en construcción')
            p.mb-4.fw-bold Ángulos en construcción
            p.mb-0 Paso 1. Medir ángulo de inclinación del techo.
            p.mb-0 Paso 2. Usar goniómetro para precisión.
            p.mb-0 Paso 3. Calcular pendiente para drenaje.
            p.mb-0 Resultado. Ángulo óptimo de 30 grados.
          
          div(titulo='Ejercicio 3: Volumen de espacio')
            p.mb-4.fw-bold Volumen de espacio
            p.mb-0 Paso 1. Medir dimensiones de habitación.
            p.mb-0 Paso 2. Calcular volumen (largo x ancho x altura).
            p.mb-0 Paso 3. Verificar requisitos de ventilación.
            p.mb-0 Resultado. Volumen de 54m³.


    #t_3_2.titulo-segundo(data-aos='fade-left')
      h2 #[span 3.2] Geometría en navegación y cartografía
    p.mb-4(data-aos='fade-left') La geometría es esencial en la navegación y la cartografía. Ayuda a comprender los principios de proyección, escala y representación geográfica. La geometría permite transformar la superficie esférica de la Tierra, en representaciones planas precisas, fundamentales para la exploración, el transporte y la planificación territorial.
    .bg-7.mb-5(data-aos='fade-left')
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 Todeschini y Pellizzari (2018), destacan que la geometría es el lenguaje fundamental de la cartografía moderna. Las proyecciones geométricas permiten representar complejas superficies terrestres en mapas bidimensionales, facilitando la comprensión global de nuestro planeta.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t3/6.png', alt='')

    h2.mb-3(data-aos='fade-left') Ejemplo de navegación geométrica
    p.mb-5(data-aos='fade-left') Imaginemos un viaje en barco o en avión. Utilicemos conceptos geométricos para calcular rutas óptimas, determinar distancias, compensar la curvatura terrestre y establecer trayectorias precisas. La geometría será nuestra aliada para navegar con seguridad y eficiencia.
    .bg-full-width.bg-fondo-2.mb-5(data-aos='fade-left')
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejercicio 1
              h5 Cálculo de distancia
              p 
                | Paso 1. Obtener coordenadas geográficas.
                br
                | Paso 2. Aplicar fórmula de distancia esférica.
                br
                | Paso 3. Calcular ruta más corta.
                br
                | Resultado. Distancia de 456 km.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/7.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejercicio 2
              h5 Ángulo de navegación
              p
                | Paso 1. Determinar punto de partida.
                br
                | Paso 2. Calcular ángulo de desplazamiento.
                br
                | Paso 3. Corregir variación magnética.
                br
                | Resultado. Ángulo de navegación 45°.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/8.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejercicio 3
              h5 Escala de mapa
              p
                | Paso 1. Identificar escala.
                br
                | Paso 2. Convertir distancias.
                br
                | Paso 3. Calcular representación real.
                br
                | Resultado: 1 cm = 5 km.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/9.png', alt='')

    #t_3_3.titulo-segundo(data-aos='fade-left')
      h2 #[span 3.3] Geometría en tecnología y diseño digital

    .row.justify-content-center.mb-5(data-aos='fade-left')
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t3/10.png', alt='')
      .col-sm-12.col-lg-7
        p.mb-4 La geometría es fundamental en tecnologías digitales, diseño gráfico y modelado 3D. Comprenderemos que cada píxel, cada modelo digital y cada interfaz gráfica, se fundamenta en principios geométricos precisos, los cuales permiten crear experiencias visuales complejas y funcionales.
        .p-4.bg-1.mb-5
          p.mb-0 Ortiz Cerecedo (2018), señala que la geometría digital es el fundamento de la innovación tecnológica actual. Las transformaciones geométricas permiten desarrollar interfaces, diseñar videojuegos, crear efectos visuales y desarrollar tecnologías de realidad virtual.

    h2.mb-3(data-aos='fade-left') Ejemplo en diseño digital
    p.mb-5(data-aos='fade-left') Consideremos el diseño de una aplicación móvil. Utilizaremos geometría para definir proporciones de pantalla, crear interfaces simétricas, desarrollar íconos y garantizar una experiencia de usuario, armoniosa e intuitiva.
    .bg-full-width.bg-fondo-2.mb-5(data-aos='fade-left')
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejercicio 1
              h5 Dimensionamiento de interfaz
              p 
                | Paso 1. Definir resolución de pantalla.
                br
                | Paso 2. Calcular proporciones.
                br
                | Paso 3. Ajustar diseño.
                br
                | Resultado. Interfaz 16:9.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/11.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejercicio 2
              h5 Transformación geométrica
              p 
                | Paso 1. Definir objeto digital.
                br
                | Paso 2. Aplicar transformaciones.
                br
                | Paso 3. Verificar proporciones.
                br
                | Resultado. Escalado 200 %.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/12.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejercicio 3
              h5 Modelado 3D
              p 
                | Paso 1. Definir formas base.
                br
                | Paso 2. Aplicar transformaciones.
                br
                | Paso 3. Renderizar modelo.
                br
                | Resultado. Modelo geométrico complejo.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/13.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
          
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.matemente.com/geometria-en-la-vida-cotidiana/ ' target='_blank' rel='noopener noreferrer') Geometría en la vida cotidiana
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/_KHJILyurFk?si=9wwX7k8BySPe-Kby' target='_blank' rel='noopener noreferrer') Ciclo de conferencias especializadas. (2022). Geometría analítica en nuestro entorno 
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

    .bg-full-width.border-top.actividad.ctn-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario='cuestionario'/>




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    cuestionario: {
      tema: 'Geometría',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: 'La geometría plana se define principalmente como:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conjunto de fórmulas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un sistema de conocimiento que estudia figuras bidimensionales',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un método de dibujo técnico',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una serie de mediciones',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! La geometría plana es un sistema completo que estudia propiedades y relaciones en el plano.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'Un polígono se define como:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una línea curva cerrada',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una figura plana delimitada por segmentos rectos',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un punto en el espacio',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una superficie esférica',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Los polígonos están formados por segmentos de línea recta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'El volumen de una habitación de 3m × 4m × 2.5m es:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '24 m³',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '30 m³',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '28 m³',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '32 m³',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Perfecto! Se multiplican las tres dimensiones: largo, ancho y alto.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'La unidad de temperatura en el SI es:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fahrenheit',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Kelvin y Celsius',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo Celsius',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rankine',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Kelvin y Celsius corresponden a las unidades base de temperatura en el SI.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'Un pentágono regular tiene:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lados desiguales',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cinco lados y ángulos iguales',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Seis lados iguales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuatro ángulos rectos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Un pentágono regular tiene cinco lados y cinco ángulos iguales.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Felicidades! Has superado la prueba con éxito.',
      mensaje_final_reprobado:
        'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
