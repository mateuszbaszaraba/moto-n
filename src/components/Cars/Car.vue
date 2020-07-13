<template>
    <div>
        <div class="card border-success mb-3" style="width: 18rem;">
            <div class="card-header">{{car.name}}</div>
            <div class="card-body text-success">
                <h5 class="card-title">{{car.price}}</h5>
                <button class="btn btn-success" @click="buyCar">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['car']
    }   
</script>