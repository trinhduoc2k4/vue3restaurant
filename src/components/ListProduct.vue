<template>
<div class="head">
    <div class="head-btn">
        <button @click="navigationTo('products')" class="btn btn-success">View product</button>
        {{cart.length}} in Cart
        <button @click="navigationTo('cart')"  class="btn btn-success">View cart</button>
    </div>
</div>
<div v-if="page === 'cart'" style="background-color: #fcf9f5">
    <h1 style="text-align: center; font-family: cursive; font-weight: 700">Your cart</h1>
    <ul style="display:flex; 
    flex-wrap: wrap;
    text-align:center">
            <li v-for="product in cart" :key="product.id" class="item">
                <img :src="product.imgSrc" class="img-product" style="width:300px; height: 250px" >
                <div class="list-content">
                    <h2>{{product.name}}</h2>
                    <p>{{product.desc}}</p>
                    <h5>{{product.price}}</h5>
                    <button @click="removeCart(product)" class="btn btn-danger">Remove item</button>
                </div>
            </li>           
    </ul>   
</div>
<div id="list-product" v-if="page === 'products'">
     <div class="content">
        <div class="desc-content">
            Delicious like mom's cooking
        </div>
        <h1 class="main-content">
            List menu
        </h1>
    </div>
    <hr class="separator">
        <ul>
            <li v-for="product in products" :key="product.id" class="item">
                <img :src="product.imgSrc" class="img-product" >
                <div class="list-content">
                    <h2>{{product.name}}</h2>
                    <p>{{product.desc}}</p>
                    <h5>{{product.price}}</h5>
                    <router-link :to="`/list-product/${product.id}`" class="btn btn-primary" style="width: 50%">Show detail product</router-link>
                    <button class="btn btn-warning" @click="addCart(product)" style="width: 50%; height: 62px">Add to cart</button>
                </div>
            </li>           
        </ul>   
</div>
</template>

<script>
import axios from 'axios'

export default {
    name:'ListProduct',
    data() {
        return {
            page:"products",
            cart:[],
            products:''
        }
    },
    methods: {        
        addCart(product){
            this.cart.push(product)
            console.log(this.cart)
        },
        removeCart(product){
            this.cart.splice(this.cart.indexOf(product),1);   
        },
        navigationTo(page){
            this.page=page
        }
    },
    mounted(){
        axios.get('products')
        .then((response) => (this.products = response.data))
    },
    
}
</script>

<style scoped>


.head{
    height: 100px;
    background-color: #eee;
    font-size: 30px;
    text-align: center;
}

.head .head-btn{
    padding-top: 20px;
    font-weight: 700;
    font-family: cursive;
}

.desc-content{
    margin-top: 0;
}

#list-product{
    margin: 0 20px;
    background-color: #fcf9f5;
}

ul{
    padding: 0 0;
    margin-top: 20px;
}

#list-product ul{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}

#list-product .img-product{
    width: 300px;
    height: 250px;
}

ul li{
    list-style: none;
    margin: 30px 10px;
}   

.item{
    transition: .8s;
}

ul li:hover{
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: translateY(-8px);
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 10%);
    border-radius: 20px;
}

.list-content h2:hover{
    color: yellowgreen;
    text-transform: uppercase;
    font-weight: 700;
}

.list-content{
    font-family: cursive;
}

</style>