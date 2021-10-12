<template>
<div id="our-restaurant">
    <div class="content">
        <div class="desc-content">
            We are not the First but we are the BEST
        </div>
        <h1 class="main-content">
            our restaurants
        </h1>
    </div>
    <hr class="separator">
    <div id="slider-img">
        <i class="bi bi-caret-left-fill previous-btn" @click.prevent="previous()"></i>
        <div id="ul-slider">
            <ul>
                <li v-for="image in images" :key="image.id">
                    <img :src="image.src" alt="">
                </li>
            </ul>
        </div>
        <i class="bi bi-caret-right-fill next-btn" @click.prevent="next()"></i>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
             images:[
                {
                id: 1,    
                src: require("../assets/restau-img-1.jpg")      
                },   
                 {
                id: 2,    
                src: require("../assets/restau-img-2.jpg")      
                }, 
                 {
                id: 3,    
                src: require("../assets/restau-img-3.jpg")      
                }, 
                 {
                id: 4,    
                src: require("../assets/restau-img-4.jpeg")      
                },  
                 {
                id: 5,    
                src: require("../assets/restau-img-5.jpg")      
                }, 
            ],
        }
    },
    methods: {
          previous(){
            let el = document.getElementById("ul-slider");
            el.scrollLeft -= 50;
        },
        next(){
            let el = document.getElementById("ul-slider");
            el.scrollLeft += 50;
        }
    }
}
</script>

<style scoped>
    #our-restaurant{
    margin: 0 20px;
    height: 470px;
}

#slider-img{
    margin:0 60px;
}

#slider-img .next-btn{
    padding: 10px 10px;
    font-size: 20px;
    float: right;
}

#slider-img .previous-btn{
    padding: 10px 10px;
    font-size: 20px;
}

#slider-img .next-btn:hover{
    cursor: pointer;
    background-color: seagreen;
}

#slider-img .previous-btn:hover{
    cursor: pointer;
    background-color: seagreen;
}

#ul-slider{
    overflow: hidden;
    margin: 10px 0;
}

#ul-slider ul li img{
    width: 350px;
    height: 250px;
}

#ul-slider ul li{
    width: 350px;
    height: 250px;
}

#ul-slider ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>