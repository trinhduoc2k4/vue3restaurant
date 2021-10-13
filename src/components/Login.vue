<template>
<div id="login">
    <div class="form-login">
    <form @submit.prevent="checkForm">
    <h1>Login</h1>   
    <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
    <ul>
        <li v-for="error in errors" :key="error.id" class="feedback-error">{{error}}</li>
    </ul>
    </div>
        <div class="form-group">
            <input type="text" placeholder="Enter your email" v-model="email">
        </div>
        <div class="form-group ">
            <input type="password" placeholder="Enter your password" v-model="password">
        </div>
        <button type="submit">Login</button>
        <div>
            <router-link to="/sign-up">Dont have account? Sign Up here</router-link>
        </div>
    </form>
    </div>
</div>   
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            errors:[],
        }
    },
    methods: {
        async checkForm(e){
        if(this.validEmail(this.email) && this.password){
                let result = await axios.get(
                `${process.env.VUE_APP_USER_URL}users?email=${this.email}&password=${this.password}`
            )
            if(result.status==200 && result.data.length>0){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                alert("Succes login")
                this.$router.push({name:'Home'})
            }else if(this.password.length<5){
                this.errors.push('Password at least 5 characters')
            }
            else{
                this.errors.push('Username or password incorrect')
            }
                return true  
        }
        this.errors = []

        if(!this.email){
            this.errors.push('Email is required')
        }else if(!this.validEmail(this.email)) {
            this.errors.push('Valid email required.');
        }

        if(!this.password){          
            this.errors.push('Password is required')
        }

        e.preventDefault();     
        
        },
        validEmail(email){
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
        console.log(process.env.VUE_APP_USER_URL)
    }
}
</script>

<style scoped>
#login{
    background-image: linear-gradient(to right top, #ff4988, #ffc781, #fffefc);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    position: relative;
}

#login h1{
    text-align: center;
    margin-bottom: 30px;
    font-weight: 700;
    font-family: cursive;
}

#login input{
    color: black;
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 10px;
    border-radius: 1rem;
    border: 1px solid #eee;
    background-color: #eee;
    transition: 0.25s linear;
    outline: none;
    font-style: italic;
}

#login input:focus{
    border-color: #eee;
    background-color: white;
}

#login .form-login{
    position: absolute;
    background-color: #fff;
    padding: 20px 20px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
}

#login button{
    border-radius: 10px;
    width: 100%;
    text-align: center;
    border: 0;
    outline: none;
    height: 40px;
    color: white;
    background-color: #00aefd;
}

#login button:hover{
    background-color: blue;
}

.feedback-error{
    text-transform: uppercase;
    color:red;
}

</style>