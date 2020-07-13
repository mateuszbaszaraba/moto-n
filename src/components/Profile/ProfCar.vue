<template>
    <div>
        <div class="card border-danger mb-3" style="width: 18rem;">
            <div class="card-header">{{car.name}}</div>
            <div class="card-body text-danger">
                <h5 class="card-title">{{car.price | currency}} | Quantity: {{car.quantity}}</h5>
                <div class="form-inline">
                    <input type="number" class="form-control w-75 mr-2" v-model="quantity" />
                    <button class="btn btn-danger" @click="sellCar">Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['car'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            sellCar() {
                const order = {
                    carId: this.car.id,
                    carPrice: this.car.price,
                    quantity: this.quantity,
                    total: this.car.price * this.quantity
                }
                this.$store.dispatch('sellCar', order);
                this.quantity = 0
            }
        }
    }   
</script>