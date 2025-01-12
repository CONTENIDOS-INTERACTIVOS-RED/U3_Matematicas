<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos de geometría plana y medición de figuras simples'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t1/1.png', alt='')
      .col-sm-12.col-lg-7
        p.mb-4 La geometría plana no es simplemente un conjunto de fórmulas abstractas, sino un lenguaje universal que le permitirá interpretar y transformar el mundo que lo rodea. Imagine la geometría como una llave maestra que abre puertas en múltiples disciplinas: desde la arquitectura hasta la gestión financiera, desde el diseño tecnológico, hasta la planificación estratégica empresarial.
        p.mb-4 El contenido teórico de esta unidad, le permitirá descubrir que cada línea, ángulo y figura geométrica, cuenta una historia. No solo aprenderá conceptos matemáticos, sino que desarrollará un pensamiento analítico capaz de resolver problemas complejos con soluciones creativas e innovadoras. La geometría plana le enseñará a descomponer problemas complejos en formas simples para construir soluciones estructuradas y precisas.

    .p-4.bg-1.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-lg
          p.mb-0 La #[strong geometría] es mucho más que una disciplina matemática; es un lenguaje universal que le permite comprender, interpretar y transformar el mundo que lo rodea. Cada concepto abordado en la temática, tiene aplicaciones directas en su vida cotidiana, desde la construcción hasta la tecnología digital.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/2.svg', style='max-width: 90px').mx-auto

    #t_1_1.titulo-segundo(data-aos="fade-right")
      h2 #[span 1.1] Fundamentos conceptuales de geometría plana
    p.mb-4(data-aos="fade-right") Para conocer sobre esta temática, lo invitamos a escuchar el siguiente pódcast.
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-6
        TarjetaAudio.color-primario.mb-3(
          texto="Fundamentos conceptuales de geometría plana"
          :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
        )

    #t_1_2.titulo-segundo(data-aos="fade-right")
      h2 #[span 1.2] Tipos de figuras geométricas planas
    .p-4.bg-10.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/3.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 Las #[strong figuras geométricas planas], representan la base fundamental para comprender estructuras bidimensionales. Cada figura se configura como un universo de relaciones matemáticas, donde líneas, ángulos y superficies, interactúan, según principios precisos.

    p.mb-4(data-aos="fade-right") Se aprende a descomponer realidades complejas en formas simples, transformando la percepción espacial y desarrollando una capacidad analítica superior.
    p.mb-4(data-aos="fade-right") Las figuras geométricas planas básicas, se clasifican principalmente, según la cantidad de lados y su forma. A continuación, se presentan los tipos más comunes:
    
    .bg-full-width.bg-fondo-1.mb-0(data-aos="fade-right")
      .p-4.p-md-5
        h2.mb-3 Polígonos
        p.mb-5 Son figuras geométricas planas delimitadas por segmentos de línea recta, llamados lados. Según el número de lados, los polígonos básicos son:
        
        .row.justify-content-center.mb-0.align-items-center
          
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas='col-12 col-lg-6')
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/5.svg' alt='Triángulo')
                    h4.text-center Triángulo
                    p.mb-0.text-center Tiene tres lados. Se clasifica en equilátero, isósceles y escaleno según la longitud de sus lados, y en acutángulo, rectángulo u obtusángulo según sus ángulos.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/6.svg' alt='Cuadrilátero')
                    h4.text-center Cuadrilátero
                    p.mb-0.text-center Posee cuatro lados. Incluye el cuadrado, el rectángulo, el rombo y el trapecio.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/7.svg' alt='Pentágono')
                    h4.text-center Pentágono
                    p.mb-0.text-center Cuenta con cinco lados. Puede ser regular (todos los lados y ángulos son iguales) o irregular.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/8.svg' alt='Hexágono')
                    h4.text-center Hexágono
                    p.mb-0.text-center Tiene seis lados. También puede ser regular o irregular

          .col-sm-12.col-lg-4.pe-xl-8.d-none.d-lg-block
            img(src='@/assets/curso/t1/4.png')

    h2.mb-3(data-aos="fade-right") Circunferencia y círculo
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-10
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/9.svg' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Circunferencia
                p.mb-0 Es una línea curva cerrada cuyos puntos están a la misma distancia de un punto fijo llamado centro.
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/10.svg' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Círculo
                p.mb-0 Es la región del plano limitada por una circunferencia.

    h2.mb-3(data-aos="fade-right") Figuras mixtas o compuestas
    .bg-6.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/11.png', alt='')
        .col-lg
          .p-4
            p.mb-0 Son combinaciones de polígonos y/o circunferencias que forman figuras más complejas, como semicírculos, sectores circulares o figuras irregulares compuestas por diferentes formas básicas.


    h2.mb-3(data-aos="fade-right")  Otras figuras planas
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-10
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/12.png' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Elipse
                p.mb-0 Es una curva cerrada en la que la suma de las distancias desde cualquier punto de la curva a dos puntos fijos (focos) es constante.
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/13.png' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Trapecio
                p.mb-0 Es un cuadrilátero que tiene solo un par de lados opuestos paralelos.

    .px-4.py-2.bg-10.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-lg
          p.mb-0 Estas figuras son fundamentales para el estudio de formas geométricas más complejas y su aplicación en diversas disciplinas.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/14.svg', style='max-width: 90px').mx-auto

    .px-4.py-2.bg-1.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/15.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 Clasificar las figuras geométricas, según sus características intrínsecas: cantidad de lados, ángulos internos, simetría y propiedades específicas, le revelarán un mundo de posibilidades analíticas aplicables en diferentes contextos profesionales y científicos.

    p.mb-4(data-aos="fade-right") Todeschini y Pellizzari (2018), argumentan que la clasificación de figuras geométricas no es un ejercicio de taxonomía matemática, sino una herramienta fundamental para comprender la estructuración del espacio. Carpinteyro Vigil (2018), complementa esta visión, enfatizando que cada figura geométrica constituye un modelo representacional capaz de describir fenómenos complejos en múltiples disciplinas.
    p.mb-4(data-aos="fade-right") A continuación, conozcamos algunas aplicaciones en diferentes disciplinas:
    .bg-full-width.bg-2.mb-5(data-aos="fade-right")
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-6
            ImagenInfografica.color-secundario.mb-0
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/t1/16.svg')
              .tarjeta.bg-8.p-3(x="50%" y="5%" numero="+")
                p.mb-4 En el desarrollo tecnológico, las figuras geométricas planas se utilizan para: 
                p.mb-0.ml-2 Diseño de circuitos electrónicos.
                p.mb-0.ml-2 Modelado de interfaces digitales.
                p.mb-0.ml-2 Desarrollo de algoritmos de reconocimiento de patrones.
                p.mb-4.ml-2 Diseño de componentes microelectrónicos.
                p.mb-0 #[strong Ejemplo tecnológico.] Un ingeniero de diseño de chips, utiliza triángulos y hexágonos para optimizar la distribución de componentes electrónicos, maximizando eficiencia y minimizando consumo energético.
              .tarjeta.bg-7.p-3(x="23.5%" y="95%" numero="+")
                p.mb-4 Los profesionales en economía, aplican figuras geométricas para:
                p.mb-0.ml-2 Modelado de estrategias de crecimiento.
                p.mb-0.ml-2 Análisis de distribución de mercados.
                p.mb-0.ml-2 Representación de flujos económicos.
                p.mb-4.ml-2 Visualización de datos comerciales.
                p.mb-0 #[strong Caso empresarial.] Un consultor estratégico usa polígonos para representar la participación de mercado de diferentes líneas de producto, permitiendo una comprensión rápida de la distribución competitiva.
              .tarjeta.bg-7.p-3(x="77%" y="95%" numero="+")
                p.mb-4 En la administración de proyectos, las figuras geométricas facilitan:
                p.mb-0.ml-2 Planificación de recursos.
                p.mb-0.ml-2 Distribución de equipos.
                p.mb-0.ml-2 Análisis de procesos.
                p.mb-4.ml-2 Optimización de flujos de trabajo.
                p.mb-0 #[strong Escenario profesional.] Un gerente de proyectos, utiliza figuras geométricas para diseñar diagramas de Gantt, representando tiempos, recursos y dependencias de manera visual y estructurada.


    #t_1_3.titulo-segundo(data-aos="fade-right")
      h2 #[span 1.3] Perímetro y área de figuras geométricas simples
    p.mb-4(data-aos="fade-right") La geometría plana, introduce al estudio de figuras bidimensionales, donde se comprenderá que cada forma geométrica, posee características únicas que determinan su perímetro y área. 
    .bg-7.p-4.mb-4(data-aos="fade-right")
      p.mb-0.fw-bold El perímetro representa la distancia total alrededor de una figura, mientras que el área, mide la superficie contenida dentro de sus límites. 
    p.mb-4(data-aos="fade-right") Dominar estos conceptos le permitirá resolver problemas matemáticos con precisión y desarrollar un pensamiento espacial más complejo.
    .bg-11.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-sm-12.col-lg-7
          p.mb-0 Según Rojas Álvarez (2016), las #[strong figuras geométricas simples] como triángulos, cuadrados y círculos, constituyen la base fundamental para comprender conceptos geométricos más avanzados. Carpinteyro Vigil (2018), complementa esta idea señalando que el cálculo de perímetros y áreas, no solo es un ejercicio matemático, sino una herramienta esencial para la resolución de problemas, en campos como la arquitectura, el diseño y la ingeniería.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/t1/17.svg', alt='')

    p.mb-4(data-aos="fade-right") Imaginemos que tenemos que diseñar un jardín rectangular, con un sendero perimetral. Conocer cómo calcular el perímetro, nonos le ayudará a planificar la cantidad de césped o plantas que se necesitará. Este ejemplo ilustra cómo los conceptos geométricos, trascienden lo académico y se aplican directamente en situaciones prácticas.
    h2.mb-3(data-aos="fade-right")  Ejercicios resueltos
    .bg-full-width.bg-fondo-2.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejercicio 1
              p.mb-3 #[strong Cálculo de perímetro de un triángulo]
              p.mb-2 #[strong Problema.] Calcular el perímetro de un triángulo cuyos lados miden 5 cm, 7 cm y 8 cm.
              p.mb-2 #[strong Solución paso a paso:]
              ol.mb-2
                li Identificar la longitud de cada lado: a = 5 cm, b = 7 cm, c = 8 cm
                li Aplicar la fórmula de perímetro: P = a + b + c
                li Sustituir valores: P = 5 + 7 + 8
              p.mb-0 #[strong Resultado final.] P = 20 cm
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t1/18.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejercicio 2
              p.mb-3 #[strong Cálculo de área de un cuadrado]
              p.mb-2 #[strong Problema.] Determinar el área de un cuadrado con lado de 6 cm.
              p.mb-2 #[strong Solución paso a paso:]
              ol.mb-2
                li Identificar la longitud del lado: l = 6 cm
                li Aplicar la fórmula de área: A = l²
                li Sustituir valores: A = 6²
              p.mb-0 #[strong Resultado final.] A = 36 cm²
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t1/19.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejercicio 3
              p.mb-3 #[strong Cálculo de área de un círculo]
              p.mb-2 #[strong Problema.] Calcular el área de un círculo con radio de 4 cm.
              p.mb-2 #[strong Solución paso a paso:]
              ol.mb-2
                li Identificar el radio: r = 4 cm
                li Usar la Fórmula: A = πr²
                li Sustituir valores: A = π * 4²
              p.mb-0 #[strong Resultado final.] A = 16π cm² ≈ 50.27 cm²
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t1/20.png', alt='')


    .bg-full-width.bg-3.mb-5(data-aos="fade-right")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t1/21.png', alt='')
          .col-lg-7
             h2.mb-4 Ejercicios adicionales
             p.mb-4 El cálculo de áreas y perímetros de figuras geométricas es una habilidad fundamental en matemáticas que permite resolver problemas cotidianos de manera práctica y eficiente. En el PDF #[strong Ejercicios adicionales], se presentan ejemplos detallados que abarcan desde figuras simples, como triángulos y cuadrados, hasta figuras más complejas, como trapecios y pentágonos. A través de estos ejercicios, se refuerza la comprensión de las fórmulas básicas, fomentando el desarrollo de un pensamiento lógico-matemático aplicable en contextos académicos y profesionales.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/ejercicios_adicionales.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Ejercicios adicionales

    p.mb-4(data-aos="fade-right") Para practicar los conceptos aprendidos, el cálculo de áreas y perímetros, se pueden utilizar los siguientes simuladores online, con licencia Creative Common (CC BY) de la herramienta online #[strong PhET Interactive Simulations], ofrecido por la Universidad de Colorado. 
    .bg-full-width.bg-11.mb-5(data-aos="fade-right")
      .px-5.py-4
        .row.justify-content-center.align-items-center.mb-0
          .col-sm-12.col-lg-7
            p.mb-2 En el siguiente enlace, de manera interactiva, se podrá manipular un cuadrado y obtener un sinfín de variedades de cuadriláteros. 
            a.anexo.mb-4.bg-white.w-fit(href='https://phet.colorado.edu/sims/html/quadrilateral/latest/quadrilateral_all.html' target='_blank')
              .anexo__icono(:style='{"background-color": "#DBE7FC"}')
                img(src='@/assets/template/icono-link.svg')
              .anexo__texto
                p <strong>Anexo. </strong> Cuadriláteros
            
            p.mb-2 En el siguiente enlace, de manera interactiva, se podrá utilizar una cuadrícula para calcular, de acuerdo con las figuras utilizadas, el área y perímetro. 
            a.anexo.mb-4.bg-white.w-fit(href='https://phet.colorado.edu/sims/html/area-builder/latest/area-builder_all.html?locale=es' target='_blank')
              .anexo__icono(:style='{"background-color": "#DBE7FC"}')
                img(src='@/assets/template/icono-link.svg')
              .anexo__texto
                p <strong>Anexo. </strong> Área y perímetro
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/t1/22.png', alt='')


    .bg-full-width.bg-3.mb-5(data-aos="fade-right")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t1/23.png', alt='')
          .col-lg-7
             h2.mb-4 Ejercicios resueltos con enfoque multidisciplinario 
             p.mb-4 El uso de principios geométricos en problemas prácticos permite optimizar recursos y tomar decisiones estratégicas en diversos contextos profesionales. En el PDF #[strong Ejercicios resueltos con enfoque multidisciplinario], se presentan casos aplicados que ilustran cómo la geometría es una herramienta clave en la reorganización de espacios laborales, la representación financiera y el diseño digital. A través de estos ejercicios, se fomenta la capacidad analítica y se promueve la aplicación de soluciones innovadoras mediante el uso de figuras y cálculos geométricos.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/ejercicios_resueltos_multidisciplinario.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Ejercicios resueltos con enfoque multidisciplinario 


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.smartick.es/blog/matematicas/geometria/calcular-perimetros/' target='_blank' rel='noopener noreferrer') Perímetro: qué es y cómo calcularlo en cada figura
            
            
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://es.khanacademy.org/math/geometry-home' target='_blank' rel='noopener noreferrer') Curso de Geometría

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://edutin.com/curso-de-geometria-3701' target='_blank' rel='noopener noreferrer') Recursos interactivos matemáticos geometría

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.math10.com/es/geometria/geogebra.html' target='_blank' rel='noopener noreferrer') Herramienta de geometría en línea gratuita
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/AmttfBvgbY' target='_blank' rel='noopener noreferrer') Ayudinga! (2021). Geometría Plana | Área y Perímetro de los Cuadriláteros
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/Ui9Yxm-TNTA' target='_blank' rel='noopener noreferrer') Sustraendo h. (2017). Cómo calcular el perímetro y el área

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/SkdDiYmNStw' target='_blank' rel='noopener noreferrer') Red Mates. (2020). Perímetro y área de figuras planas


          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')




















</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
