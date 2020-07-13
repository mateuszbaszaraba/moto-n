<template>
    <div>
        <div class="card border-success mb-3" style="width: 18rem;">
            <div class="card-header">{{car.name}}</div>
            <div class="card-body text-success">
                <h5 class="card-title">{{car.price}}</h5>
                <input type="number" class="form-control" v-model="quantity" />
                <button class="btn btn-success" @click="buyCar">Buy</button>
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
            buyCar() {
                const order = {
                    carId: this.car.id,
                    carPrice: this.car.price,
                    quantity: this.quantity,
                    total: this.car.price * this.quantity
                }
                this.$store.dispatch('buyCar', order);
                this.quantity = 0
            }
        }
    }   
</script>