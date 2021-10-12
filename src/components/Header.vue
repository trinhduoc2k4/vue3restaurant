<template>
<div id="nav-content">
  <ul>
    <li>welcome {{name}}</li>
    <li @click="logout">logout</li>
    <li><i class="bi bi-cart-plus" style="color:#fff">Cart</i></li>
  </ul>
</div>
<div class="book-now">
  <button class="book-btn">book now</button>
</div>
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="../assets/content1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>welcome</h5>
        <p>You should come and taste yourself</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../assets/content5.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>welcome</h5>
        <p>Tranditional dishes with local product and high quality</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/content7.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>welcome</h5>
        <p>Discover and experience fine selection of international taste</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
export default {
    name:'Header',
    data() {
      return {
        name:''
      }
    },
    methods: {
      logout(){
        localStorage.clear();
        this.$router.push({name:"Login"})
      }
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
#carouselExampleDark{
  position: relative;
  height: auto;
}

.book-now{
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 1;
  justify-content: center;
  align-items: center;
}

.book-btn{
  padding: 20px 30px;
  text-transform: uppercase;
  margin-top: 300px;
  border: 3px solid;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  transition: .8s;
}

.book-btn:hover{
  transform: translateY(-8px);
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 10%);
}

.carousel-item img{
  width: 100%;
  height: 600px;
}

.carousel-item h5{
   font-size: 100px;
   font-weight: 700;
   text-transform: uppercase;
   color: #fff;
}

.carousel-item p{
  font-size: 20px;
  font-weight: 300;
  color: #fff;
}

#nav-content{
  position: fixed;
  z-index: 2;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);;
}

#nav-content ul{
  margin: 0;
}


#nav-content >ul >li{
  display: inline-block;
  list-style: none;
  padding: 30px 30px;
  color: #fff;
  font-weight: 800;
  font-size: 20px;
  text-transform: uppercase;
  flex-wrap: wrap;
}

#nav-content ul li:hover{
  color: orange;
  cursor: pointer;
  transition: .8s ease-in-out 0s;
}

@media screen and (max-width: 425px) {
#nav-content{
  display: none;
}

.carousel-item img{
  height: 400px;
}
}


</style>