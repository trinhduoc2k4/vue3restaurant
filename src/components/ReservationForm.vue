<template>
<div id="book-appoinment">
    <div class="container">
        <div class="content">
            <div class="desc-content">
                You have a special event? We are here for you!
            </div>
            <h1 class="main-content">
                make a reservation
            </h1>
        </div>
        <hr class="separator"> 
        <div class="reservation-block">
            <form action="" id="appoiment-form" @submit.prevent="checkForm">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="fullname">Full name</label>
                            <input type="text" class="form-control" v-model="full_name">
                            <div class="invalid-feedback" v-if="full_name === null"> Full name is required</div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="text" class="form-control" v-model="email">
                            <div class="invalid-feedback" v-if="email === null"> Email is required</div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" class="form-control" v-model="phone">
                            <div class="invalid-feedback" v-if="phone === null"> Phone is required</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="date">Date</label>
                            <input type="date" class="form-control" v-model="date">
                            <div class="invalid-feedback" v-if="date === null"> Date is required</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="time">Time</label>
                            <input type="time" class="form-control" v-model="time">
                            <div class="invalid-feedback" v-if="time === null"> Time is required</div>
                        </div>
                    </div>
                    <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" v-model="message"></textarea>
                            <div class="invalid-feedback" v-if="message === null"> Message is required</div>
                    </div>
                    <div>
                        <input type="submit" value="Book a table" class="submit-btn">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            full_name: '',
            email: '',
            phone:'',
            date:'',
            time:'',
            message:'',
        }
    },
    methods: {
        checkForm(event){
            if(this.full_name && this.validEmail(this.email) && this.phone && this.date && this.time && this.message){
                return true;
            }

            this.error = [];

            if(!this.full_name){
                this.errors.push('Full name is required');
                this.full_name = null;
            }

            if(!this.validEmail(this.email)){
                this.errors.push('Email is required');
                this.email = null;
            }

             if(!this.time){
                this.errors.push('Time is required');
                this.time = null;
            }

            if(!this.phone){
                this.errors.push('Phone is required');
                this.phone = null;
            }

            if(!this.date){
                this.errors.push('Date is required');
                this.date = null;
            }

            if(!this.message){
                this.errors.push('Message is required');
                this.message = null;
            }

            event.preventDefault();
            
        },
        validEmail(email){
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>

<style scoped>
    #book-appoinment{
    margin: 0 20px;
    background-image:  url("../assets/reservation-bg.jpg");
    background-position: center;
    background-size: cover;
}

.reservation-block{
    max-width: 700px;
    margin: auto;
}

#appoiment-form input, 
#appoiment-form textarea{
    background: transparent;
    border: 2px solid #000000;
    width: 100%;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 3px;
    padding: 5px 15px 7px;
    color: #ffffff;
}

#appoiment-form .submit-btn{
    display: block;
    width: 250px;
    color: #000000;
    margin: 20px auto;
}

#appoiment-form .submit-btn:hover{
    background-color: #1d2326;
    color: #fff;
}

.invalid-feedback{
    display: block;
    text-transform: uppercase;
}
</style>