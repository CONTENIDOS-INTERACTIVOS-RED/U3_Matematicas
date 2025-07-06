<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Unidades de medida y conversión'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/1.png', alt='')
      .col-sm-12.col-lg-8.bg-1
        .p-4
          p.mb-0 Cuando se enfrenta al estudio de las unidades de medida y conversión, se está adentrando en uno de los fundamentos más cruciales de las matemáticas y las ciencias aplicadas. Comprender este tema le permitirá desarrollar con precisión y eficacia diferentes operaciones que requieren transformaciones de magnitudes en diversos contextos académicos y profesionales. Las unidades de medida constituyen el lenguaje universal mediante el cual comunicamos cantidades, dimensiones y magnitudes, siendo esenciales para la comunicación científica, la ingeniería y múltiples disciplinas.
    #t_2_1.titulo-segundo(data-aos="fade-right")
      h2 #[span 2.1] Conceptos básicos de unidades de medida

    p.mb-4(data-aos="fade-right") Cuando se explora el mundo de las unidades de medida, nos encontramos con un sistema complejo y estructurado que permite cuantificar diversos fenómenos.
    .bg-6.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 Las #[strong unidades de medida] representan valores estandarizados que permiten expresar magnitudes físicas, con precisión. Comprender su naturaleza implica reconocer que cada unidad posee características específicas que la definen, como su origen, su dimensión y su relación con otras unidades dentro de un sistema de medición.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/2.png', alt='')
    p.mb-4(data-aos="fade-right") Al profundizar en las unidades de medida, se encuentran referencias fundamentales que respaldan su comprensión. 
    p.mb-4(data-aos="fade-right") Según Rodríguez Blanco (2018), el nacimiento del sistema métrico decimal revolucionó la forma en que se conciben las mediciones, estableciendo una base decimal uniforme que facilita las conversiones entre diferentes unidades. Carpinteyro Vigil (2018), destaca la importancia de comprender no solo las unidades, sino también sus relaciones y transformaciones, lo que permite una manipulación matemática precisa.
    h2.mb-3(data-aos="fade-right")  Ejemplo y aplicación
    p.mb-5(data-aos="fade-right") Imaginemos que necesitamos calcular la distancia entre dos ciudades. Podríamos utilizar diferentes unidades como kilómetros, metros o millas, dependiendo del contexto geográfico y científico. Por ejemplo, si un mapa indica que la distancia entre Bogotá y Medellín es de 395 kilómetros, puede convertir esta medida a metros (395,000 metros) o a millas (aproximadamente 245 millas), demostrando la versatilidad de las unidades de medida en situaciones prácticas.
    .bg-12.mb-0.p-4(data-aos="fade-right")
      p.mb-0 Los factores de conversión, son números o relaciones matemáticas que se utilizan para transformar una unidad de medida en otra, manteniendo la equivalencia del valor original. Por ejemplo:
    .bg-13.mb-0.p-4(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-sm-12.col-lg-6
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 Para convertir de metros a centímetros, el factor de conversión es 100, puesto que 1 metro equivale a 100 centímetros.
        .col-sm-12.col-lg-6.border-left-cus
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 Para convertir de pulgadas a centímetros, el factor es 2.54, porque 1 pulgada es igual a 2.54 centímetros.
    .bg-12.mb-4.p-4(data-aos="fade-right")
      p.mb-4 Se utilizan multiplicando o dividiendo el valor inicial, por el factor correspondiente, dependiendo de la dirección de la conversión. 
      p.mb-0 Son esenciales para trabajar con diferentes sistemas de medida, como el métrico y el imperial, y facilitan cálculos en ingeniería, ciencias y en la vida cotidiana.

    p.mb-4.fw-bold(data-aos="fade-right") Analicemos los siguientes ejercicios:
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Ejercicio 1')
            p.mb-3.fw-bold Conversión de unidades de longitud
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Paso 1. Identificar la unidad inicial (kilómetros).
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Paso 2. Determinar la unidad de conversión (metros).
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Paso 3. Aplicar el factor de conversión (1 km = 1000 m).
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Cálculo. 15 km × 1000 = 15,000 metros.
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Resultado. 15 kilómetros equivalen a 15,000 metros.

          div(titulo='Ejercicio 2')
            p.mb-3.fw-bold Conversión de unidades de masa
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Paso 1. Identificar la unidad inicial (kilogramos).
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Paso 2. Determinar la unidad de conversión (gramos).
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Paso 3. Aplicar el factor de conversión (1 kg = 1000 g).
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Cálculo. 7.5 kg × 1000 = 7,500 gramos.
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Resultado. 7.5 kilogramos equivalen a 7,500 gramos.

          div(titulo='Ejercicio 3')
            p.mb-3.fw-boldc Conversión de unidades de volumen
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Paso 1. Identificar la unidad inicial (litros).
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Paso 2. Determinar la unidad de conversión (mililitros).
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Paso 3. Aplicar el factor de conversión (1 L = 1000 mL).
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Cálculo. 2.3 L × 1000 = 2,300 mililitros.
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Resultado. 2.3 litros equivalen a 2,300 mililitros.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t2/3.png')


    #t_2_2.titulo-segundo(data-aos="fade-right")
      h2 #[span 2.2] Sistemas de medición

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/4.png', alt='')
      .col-sm-12.col-lg-8
          p.mb-0 Al adentrarnos en los sistemas de medición, se descubrirá un universo de metodologías para cuantificar magnitudes físicas. Existen principalmente dos sistemas ampliamente utilizados: el Sistema Internacional de Unidades (SI) y el Sistema Anglosajón. Cada sistema posee características únicas que lo distinguen, con unidades base, unidades derivadas y factores de conversión específicos, que permitirán realizar transformaciones precisas entre diferentes escalas y contextos.

    .titulo-figura.mb-2.d-d-flex(data-aos="fade-right")
      p.mb-0 #[b Tabla 1.] Comparativa entre el Sistema Internacional de Unidades (SI) y el Sistema Anglosajón
    .tabla-a.color-acento-botones.mb-5(data-aos="fade-right")
      table
        thead
          tr
            th.w-25 Aspecto
            th Sistema Internacional (SI)
            th Sistema Anglosajón
        tbody
          tr
            td.fw-bold Origen
            td Desarrollado formalmente en 1960.
            td Derivado del sistema inglés tradicional.
          tr
            td.fw-bold País de uso principal
            td Utilizado casi universalmente.
            td Principalmente usado en EE.UU. y algunos países de habla inglesa.
          tr
            td.fw-bold Base
            td Sistema métrico decimal.
            td Sistema basado en medidas tradicionales.
          tr
            td.fw-bold Unidad de longitud
            td Metro (m).
            td Pulgada (in), pie (ft), yarda (yd), milla (mi).
          tr
            td.fw-bold Unidad de masa
            td Kilogramo (kg).
            td Libra (lb), onza (oz).
          tr
            td.fw-bold Unidad de volumen
            td Metro cúbico (m³).
            td Galón (gal), pinta (pt), onza líquida (fl oz).
          tr
            td.fw-bold Unidad de temperatura
            td Kelvin (K), Celsius (°C).
            td Fahrenheit (°F).
          tr
            td.fw-bold Sistema de conversión
            td Decimal (base 10).
            td Múltiplos irregulares.
          tr
            td.fw-bold Precisión
            td Altamente preciso y estandarizado.
            td Menos preciso, con conversiones complejas.
          tr
            td.fw-bold Uso científico
            td Utilizado universalmente.
            td Limitado, generalmente se prefiere el SI.
          tr
            td.fw-bold Facilidad de conversión
            td Muy fácil (múltiplos de 10).
            td Compleja (conversiones no sistemáticas).

    p.mb-4.fw-bold(data-aos="fade-right") Algunas consideraciones adicionales:
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-3.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t2/5.png' alt='Científico en laboratorio')
          .custom-image-card__text.p-4
            p.mb-0 El Sistema Internacional es el estándar global para mediciones científicas y técnicas.
  
      .col-sm-12.col-lg-3.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t2/6.png' alt='Medición con calibrador')
          .custom-image-card__text.p-4
            p.mb-0 El Sistema Anglosajón sigue siendo relevante en países como Estados Unidos, para medidas cotidianas.

      .col-sm-12.col-lg-3.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t2/7.png' alt='Globo terráqueo')
          .custom-image-card__text.p-4
            p.mb-0 La mayoría de los países del mundo, han adoptado completamente el Sistema Internacional.

      .col-sm-12.col-lg-3.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t2/8.png' alt='Medición científica')
          .custom-image-card__text.p-4
            p.mb-0 En ciencia y tecnología, casi universalmente, se utiliza el Sistema Internacional de Unidades.


    p.mb-4(data-aos="fade-right") Ortiz Cerecedo (2018), enfatiza la importancia de comprender la estructura de los sistemas de medición, como herramientas fundamentales en la comunicación científica. Todeschini y Pellizzari (2018), destacan que, dominar estos sistemas implica no solo conocer las unidades, sino también comprender sus interrelaciones y los principios matemáticos que las sustentan, facilitando transformaciones complejas entre diferentes escalas y magnitudes.
    .p-4.bg-1.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/9.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 Imagine un escenario donde necesita preparar una receta internacional. Si encuentra una receta en Estados Unidos, que solicita 2 tazas de harina, deberá convertir esta medida al sistema métrico. Sabrá que 1 taza estadounidense equivale aproximadamente a 236.588 mililitros, permitiéndole realizar la conversión precisa y garantizar el éxito de su preparación culinaria.

    .bg-full-width.bg-3.mb-5(data-aos="fade-right")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Ejercicios resueltos 
             p.mb-4 Las conversiones entre diferentes unidades de medida son esenciales para interpretar datos de manera correcta en diversas disciplinas, desde la ciencia hasta la ingeniería. En el PDF #[strong Ejercicios resueltos], se presentan ejemplos detallados que abarcan la conversión de unidades de longitud, peso, temperatura, energía y tiempo, entre otras. Estos ejercicios ofrecen un enfoque práctico para reforzar habilidades matemáticas, permitiendo aplicar los factores de conversión de forma precisa y efectiva en contextos académicos y profesionales.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/ejercicios_resueltos.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Ejercicios resueltos 
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t2/10.png', alt='')

    .px-4.py-2.bg-10.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/11.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 Cuando se profundiza en el mundo de las mediciones, se descubre que la #[strong precisión] no es un concepto absoluto sino relativo a la escala y el contexto de la medición. 

    p.mb-4(data-aos="fade-right") Las escalas representan sistemas graduados que  permiten cuantificar magnitudes con diferentes niveles de detalle. Comprender las escalas implica reconocer las limitaciones inherentes a cada método de medición, identificando los márgenes de error y desarrollando estrategias para minimizarlos en diferentes contextos científicos y técnicos.
    h2.mb-3(data-aos="fade-right") Ejercicios adicionales resueltos
    .bg-full-width.bg-fondo-2.mb-0(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejercicio 1
              p.mb-0.fw-bold Conversión de metros a centímetros
              p.mb-0 #[strong Problema.] Convertir 5.6 metros a centímetros.
              p.mb-2 #[strong Solución paso a paso:]
              p.mb-0 1. Recordar la relación. 1 metro = 100 centímetros.
              p.mb-0 2. Multiplicar el valor en metros por 100.
              p.mb-0 3. Cálculo. 5.6 m × 100 = 560 cm.
              p.mb-3 4. Resultado final. 560 centímetros.
              figure
                img(src='@/assets/curso/t2/ej1.svg', alt='Medición con regla', style='max-width: 389px')
              
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/12.png', alt='Medición con regla')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejercicio 2
              p.mb-0.fw-bold Conversión de área
              p.mb-0 #[strong Problema.] Convertir 2500 metros cuadrados a hectáreas.
              p.mb-2 #[strong Solución paso a paso:]
              p.mb-0 1. Recordar la relación. 1 hectárea = 10,000 metros cuadrados.
              p.mb-0 2. Dividir el área en metros cuadrados por 10,000.
              p.mb-0 3. Cálculo. 2500 m² ÷ 10,000 = 0.25 hectáreas.
              p.mb-3 4. Resultado final. 0.25 hectáreas.
              figure
                img(src='@/assets/curso/t2/ej2.svg', alt='Medición con regla', style='max-width: 244px')
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/13.png', alt='Diagrama de área')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejercicio 3
              p.mb-0.fw-bold Conversión de volumen
              p.mb-0 #[strong Problema.] Convertir 7500 centímetros cúbicos a metros cúbicos.
              p.mb-2 #[strong Solución paso a paso:]
              p.mb-0 1. Recordar la relación. 1 metro cúbico = 1,000,000 centímetros cúbicos.
              p.mb-0 2. Dividir el volumen en centímetros cúbicos por 1,000,000.
              p.mb-0 3. Cálculo. 7500 cm³ ÷ 1,000,000 = 0.0075 metros cúbicos.
              p.mb-3 4. Resultado final. 0.0075 m³.
              figure
                img(src='@/assets/curso/t2/ej3.svg', alt='Medición con regla', style='max-width: 264px')
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/14.png', alt='Figuras geométricas 3D')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://edu.gcfglobal.org/es/unidades-de-medida/conversion-de-unidades-/1/' target='_blank' rel='noopener noreferrer') Conversión de unidades
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.convertworld.com/es/#google_vignette' target='_blank' rel='noopener noreferrer') Conversor online

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.metric-conversions.org/es/' target='_blank' rel='noopener noreferrer') Conversor unidades de medidas

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.conversordeuniades.org/' target='_blank' rel='noopener noreferrer') Convertir medidas a cualquier unidad

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://wordwall.net/es-cl/community/unidades-de-medidas' target='_blank' rel='noopener noreferrer') Unidades de medidas
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/H27dO9Qi82I' target='_blank' rel='noopener noreferrer') Ayudinga! (2018). Sistemas de Unidades (Sistema Inglés vs. Sistema Internacional) | Teoría y Concepto
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/FAYbWahy_ks' target='_blank' rel='noopener noreferrer') García, T. (2020). Unidades de Medida
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')








</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
