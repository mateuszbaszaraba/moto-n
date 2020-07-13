<template>
    <div class="row d-flex justify-content-around">        
        <app-car v-for="car in cars" :car="car" :key="car.id"></app-car>
    </div>
</template>

<script>
    import car from './ProfCar';

    export default {
        components: {
            appCar: car
        },
        computed: {
            cars() {
                return this.$store.getters.profileCars
            }
        }
    }
</script>