<template>
<div id="sign-up">
    <div class="form-sign-up">
    <form @submit.prevent="checkForm">
    <h1>Sign Up</h1>
        <div class="form-group">
            <input type="text" placeholder="Enter your name" v-model="name">
            <div class="feedback-error" v-if="name === null">Name is required</div>  
        </div>
        <div class="form-group">
            <input type="text" placeholder="Enter your email" v-model="email">
            <div class="feedback-error" v-if="email === null">Email or valid email required</div>  
        </div>
        <div class="form-group ">
            <input type="password" placeholder="Enter your password" v-model="password">
            <div class="feedback-error" v-if="password === null">Password is required</div>  
        </div>
        <button>Sign Up</button>
        <div>
            <router-link to="/login">Have account? Login here</router-link>
        </div>
    </form>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        async checkForm(e){
            if(this.name && this.validEmail(this.email) && this.password){
            let result = await axios.post("users",{
                email:this.email,
                password:this.password,
                name:this.name
            })
            alert("SignUp success");
            if(result.status==201){
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
                }
                    return true
            }
            this.errors = []

            if(!this.name){
                this.name = null;
            }

            if(!this.validEmail(this.email)){
                this.email = null;
            }
        
            if(!this.password){          
                this.password = null;
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
    },
}
</script>

<style scoped>
#sign-up{
    background-image: linear-gradient(to right top, #ff4988, #ffc781, #fffefc);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    position: relative;
}

#sign-up h1{
    text-align: center;
    margin-bottom: 30px;
    font-weight: 700;
    font-family: cursive;
}

#sign-up input{
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

#sign-up input:focus{
    border-color: #eee;
    background-color: white;
}

#sign-up .form-sign-up{
    position: absolute;
    background-color: #fff;
    padding: 20px 20px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
}

#sign-up button{
    border-radius: 10px;
    width: 100%;
    text-align: center;
    border: 0;
    outline: none;
    height: 40px;
    color: white;
    background-color: #00aefd;
}

#sign-up button:hover{
    background-color: blue;
}

.message{
    display: block;
    color: greenyellow;
}

.feedback-error{
    display: block;
    text-transform: uppercase;
    margin-top: -10px;
    color:red;
}


</style>