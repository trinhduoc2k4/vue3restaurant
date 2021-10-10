<template>
<header-app></header-app>
<our-restaurants></our-restaurants>
<our-menu></our-menu>
<reservation-form></reservation-form>
<about-us></about-us>
<footer-app></footer-app>
</template>

<script>
import Header from './Header.vue'
import ReservationForm from './ReservationForm.vue'
import OurMenu from './OurMenu.vue'
import OurRestaurants from './OurRestaurants.vue'
import AboutUs from './AboutUs.vue'
import Footer from './Footer.vue'

export default {
    name:"Home",
    data() {
        return {
            name:''
        }
    },
    components:{
        HeaderApp: Header,
        ReservationForm,
        OurMenu,
        OurRestaurants,
        AboutUs,
        FooterApp: Footer
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        this.name=JSON.parse(user).name;
        if(!user){
            this.$router.push({name:'SignUp'})
        }   
    },
}
</script>

<style>

.desc-content{
    text-align: center;
    color: orange;
    font-size: 20px;
    font-weight: 500;
    font-family:cursive;
    margin-top: 80px;
    margin-bottom: 20px;
}

.main-content{
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    font-family: cursive;
    margin: 10px 0;
}

.separator{
    width: 150px;
    border: 2px solid orange; 
    margin: auto;
}

</style>