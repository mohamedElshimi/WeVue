<template>
    <section>
    <!-- last version -->
        <HeaderComp></HeaderComp>
        <section class="my-5">
            <h2 class="text-center fw-semibold mb-3">Contact Us</h2>
            <form ref="contactus" @submit.prevent="sendEmail">
                <div class="col-10 mx-auto">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" v-model="FormData.from_name" id="floatingPassword" placeholder="First Name">
                        <label for="floatingPassword">Your Name</label>
                    </div>
                    <div class="mb-3">
                      <label for="country" class="mb-1">Select Country:</label>
                      <select v-model="FormData.codeCountry" class="form-select" id="country">
                        <!-- <option></option> -->
                        <option disabled selected>Select Country</option>
                        <option v-for="country in countries" :key="country">
                          {{ country }}
                        </option>
                      </select>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="tel" class="form-control" id="floatingPassword" v-model="FormData.phone_number" placeholder="Phone Number">
                        <label for="floatingPassword">Phone Number</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingPassword" v-model="FormData.user_email" placeholder="Email">
                        <label for="floatingPassword">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingPassword" v-model="FormData.subject" placeholder="Subject">
                        <label for="floatingPassword">Subject</label>
                    </div>
                    <div class="form-floating">
                      <textarea class="form-control" v-model="FormData.message" placeholder="Leave a comment here" id="floatingTextarea" rows="10" cols="30"></textarea>
                      <label for="floatingTextarea">Comments</label>
                    </div>
                    <button class="btn btn-primary w-100 mt-3">Send</button>
                </div>
            </form>
        </section>
        <FooterComp></FooterComp>
    </section>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/FooterComp.vue';
import emailjs from '@emailjs/browser';
    export default {
        name:'contactUs',
        components:{
            HeaderComp,
            FooterComp,
        },
        data(){
            return{
                FormData:{
                    from_name:null,
                    phone_number:null,
                    user_email:null,
                    message:null,
                    subject:null,
                    codeCountry:null,
                },
                countries:[
                    "Saudi Arabia (+966)",
                    "Kuwait (+965)",
                    "United Arab Emirates (+971)",
                    "Qatar (+974)",
                    "Bahrain (+973)",
                    "Egypt (+20)",
                    "Yemen (+967)",
                    "Georgia (+995)",
                    "Azerbaijan (+994)",
                    "Turkey (+90)",
                    "Armenia (+374)",
                    "Russia (+7)",
                ]
            }
        },
        methods: {
          sendEmail() {
            emailjs.send('service_1mg8bel', 'template_6npch4q', this.FormData, 'wdHtitFYcLOJ4KuTf')
              .then((result) => {
                  console.log('SUCCESS!', result.text);
                  console.log(this.FormData);
              }, (error) => {
                  console.log('FAILED...', error.text);
              });
          },
        },
    }
</script>

<style scoped>

</style>