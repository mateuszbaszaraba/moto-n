<template>
    <div class="row">        
        <app-car v-for="car in cars" :car="car" :key="car.id" class="mx-2"></app-car>
    </div>
</template>

<script>
    import car from './Car';

    export default {
        components: {
            appCar: car
        },
        computed: {
            cars() {
                return this.$store.getters.cars
            }
        }
    }
</script>