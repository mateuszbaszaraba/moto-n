<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-8 offset-lg-2 mt-5">
        <app-header></app-header>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-10 offset-lg-1 mt-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import header from './components/Header'

  export default {
    components: {
      appHeader: header
    },
    created() {
      this.$store.dispatch('initCars')
    }
  }
</script>

<style>

</style>
