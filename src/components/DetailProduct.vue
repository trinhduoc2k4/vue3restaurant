<template>
<div class="detail-product">
        <h2>Detail product</h2>
        <div v-if="product" class="info-product">
            <img :src="product.imgSrc">
            <h2>Name: {{product.name}}</h2>
            <p>Description: {{product.desc}}</p>
            <h5>Price: {{product.price}}</h5>
        </div>
        <div v-else>
            <p>Loading....</p>
        </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name:'DetailProduct',
    data() {
        return {
            product:{},
            id:'',
        }
    },
    created(){ 
        this.id = this.$route.params.id;
        axios.get(`products?id=${this.id}`).then((response) => {
            this.product = response.data[0]
        })
    }
}
</script>

<style scoped>
.detail-product{
    background-color: #fcf9f5;
}

p{
    font-weight: 600;
}

h2{
    text-align: center;
    font-family: cursive;
    font-weight: 700;
}

img{
    max-width: 500px;
    height: 450px;
}

.info-product{
    text-align: center;
}
</style>