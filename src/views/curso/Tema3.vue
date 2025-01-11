<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'NOMBRE TEMA 3'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    #t_3_1.titulo-segundo
      h2 3.1 Carrusel
    .row.justify-content-center.mb-5
      .col-11.col-md-4.col-xl-5.pe-xl-8
        figure.mb-4.mb-md-0
          img(src='@/assets/componentes/test-img-carousel.png', alt='Texto que describa la imagen')
      .col-11.col-md-8.col-xl-7
        SlyderF(columnas="col-12 col-lg-6")
          .row.py-4.px-3.h-100
            .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4
              .row.justify-content-center
                .col-5.col-md-4.mb-4
                  img(src='@/assets/componentes/test-slider.svg' alt='AvatarTop')
                h3.text-center.mb-4 Ley 8 de 1922
                p.text-center Introdujo la separación de bienes.
          .row.py-4.px-3.h-100
            .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4
              .row.justify-content-center
                .col-5.col-md-4.mb-4
                  img(src='@/assets/componentes/test-slider.svg' alt='AvatarTop')
                h3.text-center.mb-4 Ley 54 de 1924
                p.text-center Permitió el matrimonio civil entre católicos que declaran  haberse separado de la Iglesia.
          .row.py-4.px-3.h-100
            .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4
              .row.justify-content-center
                .col-5.col-md-4.mb-4
                  img(src='@/assets/componentes/test-slider.svg' alt='AvatarTop')
                h3.text-center.mb-4 Ley 8 de 1922
                p.text-center Introdujo la separación de bienes.

    #t_3_2.titulo-segundo
      h2 3.2 Tablas

    .row
      .col-xl-9
        .tabla-a.mb-5
          table
            caption Leyenda de la tabla
            thead
              tr
                th Ventajas
                th Desafios
            tbody
              tr
                td <strong>Flexibilidad de tiempo y lugar:</strong>Los estudiantes pueden acceder a los cursos desde cualquier lugar y en el momento que mejor se ajuste a su agenda.
                td <strong>Autogestión   del tiempo:</strong>Requiere que los estudiantes sean disciplinados y tengan la capacidad de organizar su tiempo de manera efectiva.
              tr
                td <strong>Acceso global: </strong>Cualquier persona con conexión a internet puede acceder a una amplia gama de programas y cursos, sin importar su ubicación geográfica.
                td <strong>Autogestión del tiempo: </strong>Falta de interacción cara a cara: La ausencia de contacto físico puede disminuir la sensación de comunidad y la interacción espontánea con compañeros e instructores.
              tr
                td <strong>Aprendizaje a ritmo propio: </strong>Los estudiantes pueden avanzar a su propio ritmo, revisando el material tantas veces como sea necesario.
                td <strong>Requiere mayor motivación: </strong>La autonomía que ofrece el aprendizaje en línea también exige que los estudiantes mantengan su motivación sin la estructura tradicional de clases presenciales.
              tr
                td <strong>Variedad de recursos digitales: </strong>Los estudiantes tienen acceso a videos, documentos, foros, evaluaciones automatizadas y otros recursos interactivos que enriquecen la experiencia de aprendizaje.
                td <strong></strong>Distracciones en el entorno personal: Al estudiar desde casa o en otros entornos no tradicionales, los estudiantes pueden enfrentarse a más distracciones que en un aula presencial.
              tr
                td <strong>Menor costo: </strong>El aprendizaje en línea suele ser más asequible, ya que elimina los costos de transporte, alojamiento y materiales impresos.
                td <strong>Dependencia de la tecnología: </strong>Problemas técnicos, como una conexión a internet inestable o falta de acceso a dispositivos adecuados, pueden interrumpir el proceso de aprendizaje.
    .row.material-complementario
      h2 MATERIAL COMPLEMENTARIO
      .col-12.col-md-6.col-lg-7
        p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          span Peña, G. E. G. (2021). Las fuentes del derecho. Lecciones de introducción al derecho, 189
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          span Suárez, E. (2020). Introducción al derecho. Ediciones UNL
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          span De Sousa, M. T. (2019). Introducción al derecho. Temis 
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          span Nieto, A. (2019). Una introducción al derecho.
      .col-12.col-md-6.col-lg-3.offset-lg-1
        figure
          img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')

    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sistemas numéricos y álgebra de Boole',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El estado civil debe acreditarse mediante ______ oficiales, como el acta de nacimiento o matrimonio.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documentos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Contratos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Declaraciones juradas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'El fallecimiento de una persona natural causa el ______ de su personalidad jurídica.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cese.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incremento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Una persona con capacidad de obrar plena puede ______ sus derechos sin restricciones.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transferir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ceder.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ejercer.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Renunciar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una empresa de consultoría en Derecho revisa los atributos de personalidad de las personas jurídicas en comparación con las naturales. Al estudiar los derechos, encuentra uno aplica a los dos tipos de persona. ¿Cuál de los siguientes es compartido tanto por personas naturales como jurídicas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La nacionalidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La posibilidad de poseer bienes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La capacidad de obrar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La responsabilidad limitada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Fernando está revisando los documentos de su empresa puesto que junto con sus socios se disponen a cambiar de domicilio. Ante la situación se pregunta si habrán repercusiones e los derechos y obligaciones que ostenta su organización. ¿El cambio de domicilio afecta la personalidad jurídica de una persona jurídica en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No, el cambio de domicilio no afecta la personalidad jurídica, pero debe ser actualizado ante las autoridades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sí, el cambio de domicilio implica la creación de una nueva persona jurídica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El domicilio solo puede ser cambiado si lo aprueba una autoridad judicial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las personas jurídicas no pueden cambiar de domicilio sin disolverse.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
