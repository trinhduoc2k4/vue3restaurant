<template>
<div id="our-menu">
    <div class="content">
        <div class="desc-content">
            Discover our Menu and taste the difference!
        </div>
        <h1 class="main-content">
            our menu
        </h1>
    </div>
    <hr class="separator">
    <div id="menu-picker">
        <div class="menu-category">
            <div class="list-menu">
                <ul>
                    <li v-for="menuCategory in menuCategories" :key="menuCategory.id" :class="{'active': menuCategory == currentTab}" @click="toggleTab(menuCategory)">
                        {{menuCategory}}
                    </li>
                </ul>
            </div>
        <div id="burger" class="menu-tabs" :class="{'active-menu-tab' : 'Burgers' == currentTab}">
            <div class="row">
                <div class="col-md-4">
                <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/french-burger.jpeg" alt="">
                    </div>
                    <h5>
                        French
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        13d
                    </div>
                </div>
                </div>
                <div class="col-md-4">
                <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/vincent-burger.jpeg" alt="">
                    </div>
                    <h5>
                        Vincent
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        123d
                    </div>
                </div>
                </div>
                <div class="col-md-4">
                <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/vegetables-burger.jpeg" alt="">
                    </div>
                    <h5>
                        Vegetables
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        123d
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div id="dessert"  class="menu-tabs" :class="{'active-menu-tab' : 'Desserts' == currentTab}">
            <div class="row">
                <div class="col-md">
                 <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/trilogie-de-verrines.jpg" alt="">
                    </div>
                    <h5>
                        Trilogie de Verrines
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        132d
                    </div>
                </div>
                </div>
                <div class="col-md-6">
                <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/classic-chocolate-mousse.jpg" alt="">
                    </div>
                    <h5>
                        Classic Chocolate Mousses
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        1233d
                    </div>
                </div>
                </div>
            </div>    
        </div>
        <div id="drink"  class="menu-tabs" :class="{'active-menu-tab' : 'Drinks' == currentTab}">
            <div class="row">
                <div class="col-md-6">
                 <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/Jagermeister.jpg" alt="">
                    </div>
                    <h5>
                        Jagermeister
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        13222d
                    </div>
                </div>
                </div>
                <div class="col-md-6">
                <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/tra-da.jpg" alt="">
                    </div>
                    <h5>
                        Rock tea
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        12323d
                    </div>
                </div>
                </div>  
            </div>    
        </div>    
        <div id="pasta"  class="menu-tabs" :class="{'active-menu-tab' : 'Pasta' == currentTab}">
            <div class="row">
                <div class="col-md-6">
                 <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/pasta.jpg" alt="">
                    </div>
                    <h5>
                        Pasta
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        132d
                    </div>
                </div>
                </div>
                <div class="col-md-6">
                <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/Mi-tom-hao-hao.jpg" alt="">
                    </div>
                    <h5>
                        Hao hao noodles
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        1233d
                    </div>
                </div>
                </div>  
            </div>    
        </div>  
        <div id="pizza"  class="menu-tabs" :class="{'active-menu-tab' : 'Pizzas' == currentTab}">
            <div class="row">
                <div class="col-md-3">
                 <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/vincent-pizza.png" alt="">
                    </div>
                    <h5>
                        Vincent pizza
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        132d
                    </div>
                </div>
                </div>
                <div class="col-md-3">
                <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/diablo-pizza.png" alt="">
                    </div>
                    <h5>
                        Diablo pizza
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        1233d
                    </div>
                </div>
                </div>
                <div class="col-md-3">
                <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/carbonara-pizza.png" alt="">
                    </div>
                    <h5>
                        Carbonara pizza
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        1233d
                    </div>
                </div>
                </div>
                <div class="col-md-3">
                <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/margherita-pizza.png" alt="">
                    </div>
                    <h5>
                        Margherita pizza
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        1233d
                    </div>
                </div>
                </div>
                <div class="col-md-3">
                <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/prosciutto-pizza.png" alt="">
                    </div>
                    <h5>
                        prosciutto pizza
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        1233d
                    </div>
                </div>
                </div>
            </div>    
        </div>  
         <div id="salad"  class="menu-tabs" :class="{'active-menu-tab' : 'Salads' == currentTab}">
            <div class="row">
                <div class="col-md-6">
                 <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/salad-nga.jpg" alt="">
                    </div>
                    <h5>
                        Russian salad
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        132d
                    </div>
                </div>
                </div>
                <div class="col-md-6">
                <div class="menu-block-items">
                    <div class="menu-img">
                        <img src="../assets/salad-ot.jpg" alt="">
                    </div>
                    <h5>
                        chilies salad
                    </h5>
                    <div class="menu-desc">
                        Ngon nhu com me nau
                    </div>
                    <div class="menu-price">
                        1233d
                    </div>
                </div>
                </div>
            </div>    
        </div>  
        </div>
    </div>  
</div>
</template>

<script>
export default {
    data() {
        return {
             menuCategories:[
                "Burgers",
                "Desserts",
                "Drinks",
                "Pasta",
                "Pizzas",
                "Salads"
            ],
            currentTab: "Pizzas"
        }
    },
    methods: {
         toggleTab(clickedMenu){
            this.currentTab = clickedMenu;
        }
    }
}
</script>

<style scoped>
    #our-menu{
    margin: 0 20px;
    background-color: #fcf9f5;
}

.list-menu{
    text-align: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.list-menu ul li{
    list-style: none;
    display: inline-block;
    text-align: center;
    padding: 20px 20px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 500;
    font-family: cursive;
}

.menu-category .active{
    color: #ffc851;
}

.menu-category ul li:hover{
    cursor: pointer;
}

.menu-tabs{
    display: none;
}

.active-menu-tab{
    display: block;
}

.menu-block-items{
    padding: 10px 5px;
    transition: .8s;
}

.menu-block-items .menu-img{
    padding: 0 35px;
    margin-bottom: 30px;
    text-align: center;
}

.menu-block-items .menu-img img{
    max-width:100%;
    border-radius: 50%;
    widows: 175px;
    height: 175px;
}

.menu-block-items>h5{
    text-align: center;
    font-size: 20px;
    letter-spacing: 4px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: cursive;
}

.menu-block-items>.menu-desc{
    text-align: center;
    font-size: 14px;
    margin: 14px 0 18px 0;
    font-family: cursive;
}

.menu-block-items>.menu-price{
    text-align: center;
    font-size: 24px;
    line-height: 26px;
    letter-spacing: 3px;
    margin-bottom: 20px;
    font-family: cursive;
}

.row{
    display: flex;
}

.menu-block-items:hover{
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: translateY(-8px);
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 10%);
}

.menu-block-items h5:hover{
    color: #ffc851;
}
</style>