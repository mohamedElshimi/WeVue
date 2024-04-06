<template>
    <div >
        <HeaderComp></HeaderComp>
        <section class="row col-11 mx-auto my-5">
            <div class="heading-text">
                <h1>{{ $t('services.heading') }}</h1>
                <p class="text-black-50 w-75 mx-auto fs-5">
                    {{ $t('services.paragraph') }}
                </p>
            </div>
            <div class="col-md-6 mb-4" v-for="(item, index) in $tm('serviciesCards')" :key="index">
                <div class="box overflow-hidden bg-white rounded-2 d-flex flex-column h-100">
                    <div class="image">
                        <router-link v-if="!item.link.includes('http')" :to="`/${$i18n.locale}/${item.link}`">
                            <img v-if="images[index]"  class="img-fluid h-100 w-100" :src="`https://seasonsge.com/ibrahim/appv1real/${images[index+1].image}`" alt="" />
                        </router-link>
                        <a v-if="item.link.includes('http')" target="_blank" :href="item.link">
                            <img v-if="images[index]" class="img-fluid w-100 h-100" :src="`https://seasonsge.com/ibrahim/appv1real/${images[index].image}`" alt="" />
                        </a>
                    </div>
                    <div class="text flex-fill d-flex flex-column justify-content-between p-4">
                        <div class="txt">
                            <h3 class="main-color">{{ item.heading }}</h3>
                            <p class="text-black-50 mt-3">
                                {{ item.paragraph }}
                            </p>
                        </div>
                        <router-link v-if="!item.link.includes('http')" class="fw-bold main-color"
                            :to="`/${$i18n.locale}/${item.link}`">
                            {{ $t('buttons.bookNow') }}
                            {{ $i18n.locale === "en" ? "&rightarrow;" : "&leftarrow;" }}
                        </router-link>
                        <a v-if="item.link.includes('http')" target="_blank" :href="item.link" class="fw-bold main-color">
                            {{ $t('buttons.bookNow') }}
                            {{ $i18n.locale === "en" ? "&rightarrow;" : "&leftarrow;" }}
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <FooterComp></FooterComp>
    </div>
</template>

<script setup>
import HeaderComp from "../components/HeaderComp.vue";
import FooterComp from "../components/FooterComp.vue";
import { ref, watch, onMounted, inject } from "vue";
import axios from "axios";
import i18n from "../i18n";
import router from "../router";
const images = ref([]);

const search = async () => {
    validation.value.$validate()
    if (!validation.value.$error) {
        loading.value = true
        const formData = new FormData()
        formData.append('searchValue' ,searchForm.value.searchInput)
        await axios.post(`https://seasonsge.com/ibrahim/appv1real/booking_search`,formData)
            .then(data => {
                console.log("data" , data);

                if (data.data.bookings && data.data.bookings.length > 0) {
                    const carsBooking = data.data.bookings[0]
                    axios.get(`https://seasonsge.com/ibrahim/appv1real/user-data?user_id=${carsBooking.account_owner}`)
                        .then(data => {
                            loading.value = false
                            if (data.data.type == 2) {
                                router.push({
                                    name: 'Cars Checkout',
                                    params: { lang: i18n.global.locale.value, id: carsBooking.random_code ,with:1 }
                                })
                            } else if (data.data.type == 1) {
                                router.push({
                                    name: 'Agents Cars Checkout',
                                    params: { lang: i18n.global.locale.value, id: carsBooking.random_code, with: 2 }
                                    
                                })
                            }
                           
                        })
                        setTimeout(() => {
                                  
                            window.location.reload()
                        }, 1000)
                } else if (data.data.bookingss && data.data.bookingss.length > 0) {
                    const flightsBooking = data.data.bookingss[0]
                    axios.get(`https://seasonsge.com/ibrahim/appv1real/user-data?user_id=${flightsBooking.email}`)
                        .then(data => {
                            loading.value = false
                            if (data.data.type == 2) {
                                router.push({
                                    name: 'Flights Checkout',
                                    params: { lang: i18n.global.locale.value, id: flightsBooking.booking_id , with: 1}
                                })
                            } else if (data.data.type == 1) {
                                router.push({
                                    name: 'Agents Flights Checkout',
                                    params: { lang: i18n.global.locale.value, id: flightsBooking.booking_id, with: 2 }
                                })
                            }
                        })
                        setTimeout(() => {
                                  
                                  window.location.reload()
                        }, 1000)
                } else if (data.data.hotel_reservations && data.data.hotel_reservations.length > 0) {
                    const HotelsBooking = data.data.hotel_reservations[0]
                    axios.get(`https://seasonsge.com/ibrahim/appv1real/user-data?user_id=${HotelsBooking.account_name}`)
                        .then(data => {
                            loading.value = false
                            if (data.data.type == 2) {
                                router.push({
                                    name: 'Hotels Checkout',
                                    params: { lang: i18n.global.locale.value, id: HotelsBooking.code , with: 1}
                                })
                            } else if (data.data.type == 1) {
                                router.push({
                                    name: 'A    gents Hotels Checkout',
                                    params: { lang: i18n.global.locale.value, id: HotelsBooking.code, with: 2}
                                })
                            }
                        })
                        setTimeout(() => {
                                  
                                  window.location.reload()
                        }, 1000)
                } else if (data.data.book && data.data.book.length > 0) {
                    const ProgramsBooking = data.data.book[0]
                    axios.get(`https://seasonsge.com/ibrahim/appv1real/user-data?user_id=${ProgramsBooking.email}`)
                        .then(data => {
                            loading.value = false
                            if (data.data.type == 2) {
                                router.push({
                                    name: 'Programs Checkout',
                                    params: { lang: i18n.global.locale.value, id: ProgramsBooking.booking_id , with: 1 }
                                })
                            } else if (data.data.type == 1) {
                                router.push({
                                    name: 'Agents Programs Checkout',
                                    params: { lang: i18n.global.locale.value, id: ProgramsBooking.booking_id, with: 2 }
                                })
                            }
                        })
                        setTimeout(() => {
                                  
                                  window.location.reload()
                        }, 1000)
                } else {
                    loading.value = false
                    searchError.value = 'There Is No Book With This Code'
                }
            })
    }
}

onMounted(async () => {
    await axios.get(`https://seasonsge.com/ibrahim/appv1real/images` ).then((res) => {
    
         images.value=res.data
   
       });
    await axios
        .get("https://seasonsge.com/ibrahim/appv1real/slider")
        .then((data) => {
            slider.value = data.data;
        })
    await axios
        .get("https://seasonsge.com/ibrahim/appv1real/info")
        .then((data) => {
            info.value = data.data[0]
            localStorage.setItem('websiteInfo', JSON.stringify( info.value))
          
        })
    setTimeout(() => {
        newPopup.value = true;
    }, 100);
});
</script>

<style lang="scss" scoped>
.bg-main-color{
    background: #FD820E;
}
.main-color{
    color: #FD820E;
}
.image{
    height: 355px;
}
.box{
    box-shadow: 1px 3px 10px #FD820E;
}
</style>