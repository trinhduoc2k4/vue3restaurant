<template>
<div id="footer">
    <div class="row">
    <div class="col-md-4">
        <img src="../assets/logo.jpg" class="footer-logo" alt="">
    </div>
    <div class="col-md-4">
        <div class="footer-content">
            <div class="heading-title">
                <h1>people who love to eat are always the best people</h1>
                <h6>-Julia Child-</h6>
            </div>
            <hr class="space">
            <div class="main-title">
                <h6 class="info-name">Duoc Trinh | dep trai code gioi</h6>
                <h6 class="info-name">Location: Viet Tri, Phu Tho, Viet Nam</h6>
            </div>
        </div>  
    </div>
    <div class="col-md-4">
        <div class="footer-content">
            <div class="heading-title">
                <h1>opening hour</h1>
            </div>
            <hr class="space">
            <ul class="main-title">
               <li>monday: closed</li>
               <li>tue - fri: 10 am - 9 pm</li>
               <li>saturday: 10 am - 11 pm</li>
               <li>sunday: 10 am - 12 pm</li>
            </ul>
            <hr class="space">
            <h6>Contact for work: 0943888967</h6>
            <a href=""><i class="bi bi-facebook">Facebook</i></a>
            <br>
            <a href=""><i class="bi bi-instagram">Instagram</i></a>
            <br>
            <a href=""><i class="bi bi-twitter">twitter</i></a>
        </div>
    </div>
    </div>
</div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
#footer{
    color: #fff;
    padding: 25px 25px;
    display: flex;
    background-image: url("../assets/footer.jpg");
    background-size: cover;
    background-position: center;
}

.col-md-4{
    text-align: center;
    color: #fff;
}

.footer-logo{
    max-width: 250px;
    transition: .8s;
    border-radius: 20px;
}

.footer-logo:hover{
    transform: translateY(-8px);
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 10%);
}

.space{
    border: 1px solid #fff;
}

.footer-content{
    font-family: cursive;
}

.heading-title h1{
    text-transform: uppercase;
    font-weight: 600;
}

.footer-content>ul>li{
    text-transform: uppercase;
    list-style: none;
    color:skyblue;
}

</style>