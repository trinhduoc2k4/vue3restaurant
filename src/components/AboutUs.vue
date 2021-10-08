<template>
<div id="about-us">
    <div class="container">
        <div class="text-inner">
            <h1 class="title-content">about us</h1>
            <p class="detail-content">We believe independent restaurants occupy a distinctive position in the world of business. They are visible, important and integral parts of the communities they serve. Unlike their chain counterparts, people often have a personal connection to one or more of their home grown restaurants. Independents have a local identity and are often one of the most tangible representations of an area's heritage, history and unique character. 

While we recognize the risks, workload and challenges inherent in starting a restaurant, we believe there are proven insights and practices that can dramatically improve a restaurant's odds of success. This is what RestaurantOwner.com is all about -- dramatically improving your chances of real, sustainable restaurant and business success.

If you're an independent restaurant owner, we want you to know that we are serious about our Mission. We are committed to providing practical, proven insights and resources to enable you to build a better restaurant, a better business and most importantly, a better life for you, your family and entire team of associates.</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#about-us{
    background-image: url("../assets/about-us.jpg");
    background-size: cover;
    background-repeat: no-repeat;   
    margin: 80px 20px;
    background-position: center;
}

.container{
    width: 100%;
    padding: 0 15px;
}

.text-inner{
    background-color: hsla(0, 0%, 100%, .8);
    border-radius: 20px;
    padding: 20px;
    text-align: center;
    transition: .8s;
}

.text-inner:hover{
    transform: translateY(-8px);
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 10%);
}

.title-content{
    text-transform: uppercase;
    font-weight: 700;
    font-family: cursive;
}

.detail-content{
    font-size: 20px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    letter-spacing: 1px;
}

</style>