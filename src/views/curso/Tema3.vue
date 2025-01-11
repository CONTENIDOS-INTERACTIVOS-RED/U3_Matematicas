<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Instrumentos de divulgación científica y tecnológica'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    
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
