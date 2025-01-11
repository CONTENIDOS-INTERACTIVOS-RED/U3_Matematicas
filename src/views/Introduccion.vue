<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        p.mb-4 La geometría plana y la medición de figuras simples, son fundamentales en diversas disciplinas científicas, tecnológicas y artísticas. En esta unidad, explorará conceptos claves que son esenciales para entender y resolver problemas relacionados con las formas geométricas, su medición y su representación en diferentes contextos. Este conocimiento es crucial para desarrollar habilidades aplicables en campos como la ingeniería, la arquitectura, las ciencias sociales y muchas otras áreas.
        p.mb-0 Al finalizar esta unidad, podrá calcular perímetros y áreas de figuras geométricas básicas, así como realizar conversiones entre diferentes sistemas de medida. Estas habilidades le permitirán enfrentar con éxito problemas prácticos y le proporcionarán herramientas útiles para su vida profesional y académica.

      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png', alt='')
  
    .bg-6.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/intro/2.png', alt='')
        .col-lg
          .p-4
            p.mb-0 Estudiar geometría no solo implica resolver ejercicios, sino también comprender su utilidad en el mundo real. Desde diseñar un estructura hasta planificar un presupuesto, la geometría y la medición, son esenciales.

    p.mb-4 Esta unidad le mostrará cómo estas habilidades son relevantes para su futuro, permitiéndole abordar desafíos técnicos de manera precisa y eficiente.
    p.mb-4 La unidad está organizada en varios subtemas que abarcan desde los fundamentos conceptuales de la geometría plana y la medición de figuras simples, hasta aplicaciones prácticas en diferentes áreas, como tecnología y economía. También desarrollará ejercicios aplicados a través de ejemplos, con el propósito de reforzar su comprensión, elaborados con un enfoque progresivo para facilitar su proceso de aprendizaje.
    .p-4.bg-1.mb-5
      .row.align-items-center
        .col-lg
          p.mb-0 Esperamos que, a lo largo de esta unidad, se comprometa a participar activamente en las actividades propuestas, aproveche los recursos disponibles y resuelva los ejercicios con entusiasmo y dedicación. Si ya tiene conocimientos previos sobre geometría básica, estos le servirán como base; de lo contrario, encontrará una guía clara para alcanzar los objetivos planteados.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/intro/3.svg', style='max-width: 90px').mx-auto







</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
