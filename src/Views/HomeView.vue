<template>
  <div class="home-page position-relative">
    <div class="position-fixed menu-containar" :class="{'right-10' : i18n.global.locale.value == 'ar' ,'left-10' : i18n.global.locale.value == 'en'|| i18n.global.locale.value == 'rus'}">
      <a href="https://www.facebook.com/glorya.travel?mibextid=9R9pXO">
        <div class="menu-item bg-primary " :class="{'facebook':showLinks}"><i class="fa-brands fa-facebook-f"></i></div>
      </a>
      <a href="https://www.instagram.com/gloryatravel/">
        <div class="menu-item bg-danger " :class="{'insta':showLinks}"><i class="fa-brands fa-instagram"></i></div>
      </a>
      <a href="https://www.snapchat.com/add/glorya.travels?share_id=P74mPHpIQCM&locale=en-GB">
        <div class="menu-item bg-warning " :class="{'snap':showLinks}"><i class="fa-brands fa-snapchat"></i></div>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=995555559631&text">
        <div class="menu-item bg-success " :class="{'whats':showLinks}"><i class="fa-brands fa-whatsapp"></i></div>
      </a>
      <div class="menu-item bg-main-color main-item" @click="toggleLinks"><i class="fa fa-commenting blob unselectable"></i></div>
      <a href="https://api.whatsapp.com/send/?phone=995555559631&text" class="text-decoration-none">
        <div class="menu position-relative ">
        <i class="fa-brands fa-whatsapp text-light" :class="{'me-3' : i18n.global.locale.value == 'ar' ,'ms-3' : i18n.global.locale.value == 'en'|| i18n.global.locale.value == 'rus'}"></i> <span class="text-light"> {{ $t('whatsBtn') }}</span>
      </div>
      </a>
    </div>
    <HeaderComp class="top-0 bg-white w-100" style="z-index: 555"></HeaderComp>
    <section class="my-5">
      <div
        class="row mx-auto d-flex col-10 flex justify-content-between align-items-center"
      >
        <div class="col-lg-6 w-full">
          <div
            class="w-100 mx-auto shadow-sec d-flex flex justify-content-center align-items-center"
          >
            <img
              src="../../public/images/tour-3.jpg"
              class="w-100 lg:ms-auto mx-auto"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-6 lg:text-start lg:mt-0 mt-4 text-center">
          <h1 class="text-3xl font-hand main-color font-semibold">
            {{ $t("home.sec1.tit") }}
          </h1>
          <h5 class="text-lg text-gray-600 font-semibold mt-3">
            {{ $t("home.sec1.para") }}
          </h5>
        </div>
      </div>
    </section>
    <section class="my-5">
      <h2 class="fw-semibold font-hand main-color text-center">
        {{ $t("home.sec2.tit") }}
      </h2>
      <h6 class="fw-semibold col-6 mx-auto text-center mt-3">
        {{ $t("home.sec2.para") }}
      </h6>
    </section>
    <section class="my-5">
      <h1 class="text-center main-color font-hand">
        {{ $t("home.sec3.tit") }}
      </h1>
      <div class="d-flex flex-wrap col-10 mx-auto mt-5">
        <div class="col-lg-4 col-md-6 col-12 mt-3 px-3">
          <div class="card position-relative pb-4 shadow-sec">
            <img
              src="../../public/images/offers.jpeg"
              class="card-image"
              alt=""
            />
            <!-- <div class="price-overlay">
                        <p class="m-0 text-decoration-line-through fw-bold text-center text-lg">1235</p>
                        <p class="m-0 font-semibold fw-bold text-center">1280</p>
                        <p class="m-0 text-center text-sm fw-bold">{{ $t('home.money') }}</p>
                    </div> -->
            <h6 class="text-center">{{ $t("home.sec3.card1.cardtit") }}</h6>
            <p class="text-center text-gray-600 my-1 mb-2">
              {{ $t("home.sec3.card1.cardpara") }}
            </p>
            <button class="prim-btn col-10 mx-auto">
              <i class="fa-brands fa-whatsapp me-3"></i>
              {{ $t("home.sec3.card1.cardbtn") }}
            </button>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mt-3 px-3">
          <div class="card position-relative pb-4 shadow-sec">
            <img
              src="../../public/images/offers.jpeg"
              class="card-image"
              alt=""
            />
            <!-- <div class="price-overlay">
                        <p class="fw-bold m-0 text-decoration-line-through text-gray-400 text-center text-lg">1055</p>
                        <p class="fw-bold m-0 text-lg font-semibold text-center">1050</p>
                        <p class="fw-bold m-0 text-center text-sm">{{ $t('home.money') }}</p>
                    </div> -->
            <h6 class="text-center">{{ $t("home.sec3.card2.cardtit") }}</h6>
            <p class="text-center text-gray-600 my-1 mb-2">
              {{ $t("home.sec3.card2.cardpara") }}
            </p>
            <button class="prim-btn col-10 mx-auto">
              <i class="fa-brands fa-whatsapp me-3"></i>
              {{ $t("home.sec3.card2.cardbtn") }}
            </button>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mt-3 px-3">
          <div class="card position-relative pb-4 shadow-sec">
            <img
              src="../../public/images/offers.jpeg"
              class="card-image"
              alt=""
            />
            <h6 class="text-center">{{ $t("home.sec3.card3.cardtit") }}</h6>
            <p class="text-center text-gray-600 my-1 mb-2">
              {{ $t("home.sec3.card3.cardpara") }}
            </p>
            <button class="prim-btn col-10 mx-auto">
              <i class="fa-brands fa-whatsapp me-3"></i>
              {{ $t("home.sec3.card1.cardbtn") }}
            </button>
          </div>
        </div>
      </div>
    </section>
    <section
      class="my-5 img-overlay d-flex justify-content-center align-items-center"
    >
      <div
        class="d-flex flex-wrap align-items-center col-lg-6 col-md-8 col-10 text-center justify-content-between"
      >
        <h3 class="fw-semibold col-lg-6 text-white">
          {{ $t("home.sec4.tit") }}
        </h3>
        <button class="btn btn-light col-lg-6 lg:mt-0 mt-3 fw-semibold text-lg">
          <i class="fa-brands fa-whatsapp me-3 text-success"></i
          >{{ $t("home.sec4.btn") }}
        </button>
      </div>
    </section>
    <section class="my-5">
      <h2 class="fw-semibold font-hand main-color text-center">
        {{ $t("home.sec5.tit") }}
      </h2>
      <h6 class="fw-semibold col-6 mx-auto text-center mt-3">
        {{ $t("home.sec5.para") }}
      </h6>
    </section>
    <section class="my-5">
      <h1 class="text-5xl font-semibold text-center font-hand main-color">
        {{ $t("home.sec6.tit") }}
      </h1>
      <div class="d-flex flex-wrap col-10 mx-auto mt-7">
        <div class="col-lg-4 col-md-6 col-12 mt-3 px-3">
          <div class="card position-relative pb-4 shadow-sec">
            <img
              src="../../public/images/offers.jpeg"
              class="card-image"
              alt=""
            />
            <!-- <div class="price-overlay">
                        <p class="fw-semibold m-0 text-decoration-line-through text-center">1280</p>
                        <p class="fw-semibold m-0 text-center">1630</p>
                        <p class="fw-semibold m-0 text-center">{{ $t('home.money') }}</p>
                    </div> -->
            <h6 class="text-center px-2">
              {{ $t("home.sec6.card1.cardtit") }}
            </h6>
            <p class="text-center text-gray-600 my-3">
              {{ $t("home.sec6.card1.cardpara") }}
            </p>
            <button
              class="prim-btn rounded-3xl w-10/12 block mx-auto font-semibold"
            >
              <i class="fa-brands fa-whatsapp me-3"></i>
              {{ $t("home.sec3.card1.cardbtn") }}
            </button>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mt-3 px-3">
          <div class="card position-relative pb-4 shadow-sec">
            <img
              src="../../public/images/offers.jpeg"
              class="card-image"
              alt=""
            />
            <!-- <div class="price-overlay">
                        <p class="fw-semibold m-0 text-decoration-line-through text-center">1110</p>
                        <p class="fw-semibold m-0 text-lg font-semibold text-center">1420</p>
                        <p class="fw-semibold m-0 text-center">{{ $t('home.money') }}</p>
                    </div> -->
            <h6 class="text-center px-2">
              {{ $t("home.sec6.card2.cardtit") }}
            </h6>
            <p class="text-center text-gray-600 my-3">
              {{ $t("home.sec6.card2.cardpara") }}
            </p>
            <button class="prim-btn w-10/12 block mx-auto font-semibold">
              <i class="fa-brands fa-whatsapp me-3"></i>
              {{ $t("home.sec3.card1.cardbtn") }}
            </button>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mt-3 px-3">
          <div class="card position-relative pb-4 shadow-sec">
            <img
              src="../../public/images/offers.jpeg"
              class="card-image"
              alt=""
            />
            <!-- <div class="price-overlay">
                        <p class="fw-semibold m-0 text-decoration-line-through text-center">940</p>
                        <p class="fw-semibold m-0 text-center">1210</p>
                        <p class="fw-semibold m-0 text-center text-sm">{{ $t('home.money') }}</p>
                    </div> -->
            <h6 class="text-center px-2">
              {{ $t("home.sec6.card3.cardtit") }}
            </h6>
            <p class="text-center text-gray-600 my-3">
              {{ $t("home.sec6.card3.cardpara") }}
            </p>
            <button class="prim-btn w-10/12 block mx-auto font-semibold">
              <i class="fa-brands fa-whatsapp me-3"></i>
              {{ $t("home.sec3.card1.cardbtn") }}
            </button>
          </div>
        </div>
      </div>
    </section>
    <section
      ref="targetDiv"
      class="border-bottom border-black my-5 pb-5"
      id="createDiv"
    >
      <div class="col-10 mx-auto my-5">
        <div
          class="d-flex flex-wrap md:justify-content-between justify-content-center"
        >
          <div
            class="text-center col-lg-3 col-md-6 mx-auto mt-3"
            v-for="(item, index) in $tm('serviciesCards')"
            :key="index"
          >
            <router-link
              v-if="!item.link.includes('http')"
              class="fw-bold text-decoration-none"
              :to="`/${$i18n.locale}/${item.link}`"
            >
              <div class="circle-shadow-o" v-if="index == 0">
                <!-- <i class="fa-solid fa-shield text-white fs-1"></i> -->
                <!-- <i
                  class="fa-solid fa-earth-americas fa-spin text-white fs-1"
                ></i> -->
                <div class="w-100">
                  <img
                    src="../../public/images/Programmes.png"
                    class="w-100"
                    alt=""
                  />
                  <img
                    src="../../public/images/Shape5.png"
                    class="w-100"
                    alt=""
                    v-if="$i18n.locale == 'en'"
                  />
                  <img
                    src="../../public/images/Shape1.png"
                    class="w-100"
                    alt=""
                    v-else-if="$i18n.locale == 'ar'"
                  />
                  <img
                    src="../../public/images/Programs.png"
                    class="w-100"
                    alt=""
                    v-else
                  />

                </div>
              </div>
              <div class="circle-shadow-b" v-else-if="index == 1">
                <!-- <i
                  class="fa-solid fa-hotel text-white fs-1 fa-rotate fa-fade"
                ></i> -->
                <div class="w-100">
                  <img
                    src="../../public/images/Hotel.png"
                    class="w-100"
                    alt=""
                  />
                  <img
                    src="../../public/images/Shape6.png"
                    class="w-100"
                    alt=""
                    v-if="$i18n.locale == 'en'"
                  />
                  <img
                    src="../../public/images/Shape2.png"
                    class="w-100"
                    alt=""
                    v-else-if="$i18n.locale == 'ar'"
                  />
                  <img
                    src="../../public/images/Hotelreservations.png"
                    class="w-100"
                    alt=""
                    v-else
                  />
                </div>
              </div>
              <div class="circle-shadow-o" v-else-if="index == 2">
                <!-- <i class="fa-solid fa-car-side text-white fs-1 car"></i> -->
                <div class="w-100">
                  <img
                    src="../../public/images/Rent-Car.png"
                    class="w-100"
                    alt=""
                  />
                  <img
                    src="../../public/images/Shape7.png"
                    class="w-100"
                    alt=""
                    v-if="$i18n.locale == 'en'"
                  />
                  <img
                    src="../../public/images/Shape3.png"
                    class="w-100"
                    alt=""
                    v-else-if="$i18n.locale == 'ar'"
                  />
                  <img
                    src="../../public/images/CarRental.png"
                    class="w-100"
                    alt=""
                    v-else
                  />
                </div>
              </div>
            </router-link>
            <a
              v-if="item.link.includes('http')"
              target="_blank"
              class="fw-bold"
              :href="item.link"
            >
              <div class="circle-shadow-b">
                <!-- <i class="fa-sharp fa-solid fa-train text-white fs-1 train"></i> -->
                <div class="w-100">
                  <img
                    src="../../public/images/Train.png"
                    class="w-100"
                    alt=""
                  />
                  <img
                    src="../../public/images/Shape8.png"
                    class="w-100"
                    alt=""
                    v-if="$i18n.locale == 'en'"
                  />
                  <img
                    src="../../public/images/Shape4.png"
                    class="w-100"
                    alt=""
                    v-else-if="$i18n.locale == 'ar'"
                  />
                  <img
                    src="../../public/images/TrainReservation.png"
                    class="w-100"
                    alt=""
                    v-else
                  />
                </div>
              </div>
            </a>
          </div>
          <!-- <div class="text-center col-lg-3 col-md-6 mt-3">
                    <div class="circle-shadow-b"><i class="fa-solid fa-hotel text-white fs-1"></i></div>
                    <a href=""><h3 class="text-2xl mt-5 ">{{ $t('serviciesCards[1].heading') }}</h3></a>
                    </div>
                    <div class="text-center col-lg-3 col-md-6 mt-3">
                    <div class="circle-shadow-o"><i class="fa-solid fa-car-side text-white fs-1"></i></div>
                    <a href=""><h3 class="text-2xl mt-5 ">{{ $t('serviciesCards[2].heading') }}</h3></a>
                    </div>
                    <div class="text-center col-lg-3 col-md-6 mt-3">
                    <div class="circle-shadow-b"><i class="fa-sharp fa-solid fa-train text-white fs-1"></i></div>
                    <a href=""><h3 class="text-2xl mt-5 ">{{ $t('serviciesCards[3].heading') }}</h3></a>
                    </div> -->
        </div>
      </div>
    </section>
    <Loader v-if="loading"></Loader>
    <section class="my-10">
      <swiper
        :modules="modules"
        :slides-per-view="numOfImage"
        :loop="true"
        :autoplay="{
          delay: 1000,
          diableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="px-5 d-flex justify-content-center"
      >
        <swiper-slide
          ><img src="../../public/images/image1.png" class="w-100" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="../../public/images/image2.png" class="w-100" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="../../public/images/image3.png" class="w-100" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="../../public/images/image4.png" class="w-100" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="../../public/images/image5.png" class="w-100" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="../../public/images/image6.png" class="w-100" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="../../public/images/image7.png" class="w-100" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="../../public/images/image8.png" class="w-100" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="../../public/images/image9.png" class="w-100" alt=""
        /></swiper-slide>
      </swiper>
    </section>
    <section
      class="bg-travel-programs py-5 d-flex justify-content-center align-items-center my-5"
    >
      <div
        class="d-flex flex-wrap col-10 justify-content-md-between justify-content-center align-items-center"
      >
        <h3 class="fw-bold col-md-6 text-center text-white">
          {{ $t("home.sec8.tit") }}
        </h3>
        <router-link
          :to="`/${$i18n.locale}/createJourney`"
          class="btn btn-light col-md-6 mt-md-0 mt-3 fw-semibold"
          >{{ $t("home.sec8.btn") }}</router-link
        >
      </div>
    </section>
    <FooterComp></FooterComp>
  </div>
</template>
<script setup>
import HeaderComp from "../components/HeaderComp.vue";
import FooterComp from "../components/FooterComp.vue";
// import AboutPopUp from "../components/AboutPopUp.vue";
// import OffersPopup from "../components/OffersPopup.vue";
// import NewPopup from "../components/NewPopup.vue";
import { ref, watch, onMounted, inject } from "vue";
import axios from "axios";
import i18n from "../i18n";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import router from "../router";
import Loader from "../components/Loader.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import 'path-to-your-style/style.css'; // replace with the correct path

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const toggleLinks = ()=>{
  showLinks.value = !showLinks.value;
  console.log(showLinks.value);
}
const modules = ref([Autoplay, Pagination, Navigation]);
let showLinks = ref(false)
const slider = ref([]);
const images = ref([]);
const newPopup = ref(false);
const aboutPopup = ref(false);
const offersPopup = ref(false);
const info = ref([]);
const loading = ref(false);
const searchError = ref("");
const numOfImage = ref("4");
const searchForm = ref({
  searchInput: "",
});
const targetDiv = ref(null);
const scrollToDiv = () => {
  if (targetDiv.value) {
    targetDiv.value.scrollIntoView({ behavior: "smooth" });
  }
};
const rules = {
  searchInput: { required: helpers.withMessage("Required Field", required) },
};
const validation = useVuelidate(rules, searchForm);

const search = async () => {
  validation.value.$validate();
  if (!validation.value.$error) {
    loading.value = true;
    const formData = new FormData();
    formData.append("searchValue", searchForm.value.searchInput);
    await axios
      .post(
        `https://seasonsge.com/ibrahim/appv1real/booking_search`,
        formData
      )
      .then((data) => {
        console.log("data", data);

        if (data.data.bookings && data.data.bookings.length > 0) {
          const carsBooking = data.data.bookings[0];
          axios
            .get(
              `https://seasonsge.com/ibrahim/appv1real/user-data?user_id=${carsBooking.account_owner}`
            )
            .then((data) => {
              loading.value = false;
              if (data.data.type == 2) {
                router.push({
                  name: "Cars Checkout",
                  params: {
                    lang: i18n.global.locale.value,
                    id: carsBooking.random_code,
                    with: 1,
                  },
                });
              } else if (data.data.type == 1) {
                router.push({
                  name: "Agents Cars Checkout",
                  params: {
                    lang: i18n.global.locale.value,
                    id: carsBooking.random_code,
                    with: 2,
                  },
                });
              }
            });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else if (data.data.bookingss && data.data.bookingss.length > 0) {
          const flightsBooking = data.data.bookingss[0];
          axios
            .get(
              `https://seasonsge.com/ibrahim/appv1real/user-data?user_id=${flightsBooking.email}`
            )
            .then((data) => {
              loading.value = false;
              if (data.data.type == 2) {
                router.push({
                  name: "Flights Checkout",
                  params: {
                    lang: i18n.global.locale.value,
                    id: flightsBooking.booking_id,
                    with: 1,
                  },
                });
              } else if (data.data.type == 1) {
                router.push({
                  name: "Agents Flights Checkout",
                  params: {
                    lang: i18n.global.locale.value,
                    id: flightsBooking.booking_id,
                    with: 2,
                  },
                });
              }
            });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else if (
          data.data.hotel_reservations &&
          data.data.hotel_reservations.length > 0
        ) {
          const HotelsBooking = data.data.hotel_reservations[0];
          axios
            .get(
              `https://seasonsge.com/ibrahim/appv1real/user-data?user_id=${HotelsBooking.account_name}`
            )
            .then((data) => {
              loading.value = false;
              if (data.data.type == 2) {
                router.push({
                  name: "Hotels Checkout",
                  params: {
                    lang: i18n.global.locale.value,
                    id: HotelsBooking.code,
                    with: 1,
                  },
                });
              } else if (data.data.type == 1) {
                router.push({
                  name: "A    gents Hotels Checkout",
                  params: {
                    lang: i18n.global.locale.value,
                    id: HotelsBooking.code,
                    with: 2,
                  },
                });
              }
            });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else if (data.data.book && data.data.book.length > 0) {
          const ProgramsBooking = data.data.book[0];
          axios
            .get(
              `https://seasonsge.com/ibrahim/appv1real/user-data?user_id=${ProgramsBooking.email}`
            )
            .then((data) => {
              loading.value = false;
              if (data.data.type == 2) {
                router.push({
                  name: "Programs Checkout",
                  params: {
                    lang: i18n.global.locale.value,
                    id: ProgramsBooking.booking_id,
                    with: 1,
                  },
                });
              } else if (data.data.type == 1) {
                router.push({
                  name: "Agents Programs Checkout",
                  params: {
                    lang: i18n.global.locale.value,
                    id: ProgramsBooking.booking_id,
                    with: 2,
                  },
                });
              }
            });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          loading.value = false;
          searchError.value = "There Is No Book With This Code";
        }
      });
  }
};

watch(aboutPopup, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else document.body.style.overflow = "visible";
});

onMounted(async () => {
  await axios
    .get(`https://seasonsge.com/ibrahim/appv1real/images`)
    .then((res) => {
      images.value = res.data;
    });
  await axios
    .get("https://seasonsge.com/ibrahim/appv1real/slider")
    .then((data) => {
      slider.value = data.data;
    });
  // await axios
  //   .get("https://seasonsge.com/ibrahim/appv1real/info")
  //   .then((data) => {
  //     info.value = data.data[0];
  //     localStorage.setItem("websiteInfo", JSON.stringify(info.value));
  //     document.getElementById(
  //       "favicon"
  //     ).href = `https://seasonsge.com/ibrahim/${data.data[0].favicon}`;
  //   });
  setTimeout(() => {
    newPopup.value = true;
  }, 100);
});
</script>

<style lang="scss" scoped>

.menu{
  position: absolute;
  width: 200px;
  height: 50px;
  background-color: green;
  border-radius: 200px;
}
.menu i{
  line-height: 50px;
  font-size: 22px;
}
.menu-item{
  width: 50px;
  height: 50px;
  border-radius: 100%;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  position: absolute;
  bottom: 52px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.5s ease-in;
}
.main-item{
  opacity: 1;
}
.whats{
  position: absolute;
  bottom: 115px;
  z-index: 20;
  opacity: 1;
  transition: all 0.5s ease-in;
}
.snap{
  position: absolute;
  bottom: 180px;
  z-index: 20;
  opacity: 1;
  transition: all 0.7s ease-in;
}
.insta{
  position: absolute;
  bottom: 240px;
  z-index: 20;
  opacity: 1;
  transition: all 0.9s ease-in;
}
.facebook{
  position: absolute;
  bottom: 300px;
  z-index: 20;
  opacity: 1;
  transition: all 1.1s ease-in;
}
.menu-containar{
  position: fixed;
  top: 85vh;
  z-index: 99999999;
}
.right-10{
  right: 10px;
}
.left-10{
  left: 10px;
}
@font-face {
  font-family: handwrite;
  src: url("../../public/fonts/Caveat-VariableFont_wght.ttf");
}
.font-hand {
  font-family: handwrite;
}
.shadow-primary {
  box-shadow: 3px 5px 23px 0px #fd820e;
}
.shadow-sec {
  box-shadow: 2px 2px 10px 0px #055f9f;
}
.bg-travel-programs {
  background: #777 url(../../public/images/Travel-programs.jpg) center/cover;
  background-blend-mode: multiply;
}
.footer-image {
  height: 96px;
}
.social-link {
  // @apply h-10 d-flex justify-content-center align-items-center text-white w-10 bg-success rounded-full
  height: 40px;
  width: 40px;
  border-radius: 100%;
}
.bg-blue {
  background-color: rgb(55, 165, 255);
}
.bg-red {
  background-color: rgb(255, 85, 55);
}
.bg-main-color {
  background: #fd820e;
}
.main-color {
  color: #fd820e;
}
@keyframes CarAnimation {
  from {
    left: 5px;
  }
  to {
    right: 5px;
  }
}
@keyframes TrainAnimation {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
.car {
  position: relative;
  animation: CarAnimation 2s infinite;
  transition: 0.5s;
  animation-direction: alternate;
  animation-fill-mode: backwards;
  animation-play-state: running;
}
.train {
  position: relative;
  animation: TrainAnimation 2s infinite;
  transition: 0.5s;
}
.bg-main-color {
  background: #fd820e;
}
.main-color {
  color: #fd820e;
}
.z-10 {
  z-index: 10;
}
.z-20 {
  z-index: 20;
}
.img-overlay2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background: url(../../public/images/bg1.jpg) no-repeat center;
  background-size: 100% 100%;
  opacity: 0.8;
}
.circle-shadow-o {
  //@apply w-[120px] drop-shadow-[-6px_2px_0px_rgba(0,0,0,0.25)] mx-auto h-[120px] rounded-full bg-primary flex justify-center items-center
  width: 150px;
  // filter: drop-shadow(-6px 2px 0px rgba(0, 0, 0, 0.25));
  margin-inline: auto;
  height: 120px;
  border-radius: 100%;
  // background: #fd820e;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle-shadow-b {
  //@apply w-[120px] drop-shadow-[-6px_2px_0px_rgba(0,0,0,0.25)] mx-auto h-[120px] rounded-full bg-primary flex justify-center items-center
  width: 150px;
  // filter: drop-shadow(-6px 2px 0px rgba(0, 0, 0, 0.25));
  margin-inline: auto;
  height: 120px;
  border-radius: 100%;
  // background: #055f9f;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-sec {
  padding-inline: 20px;
  padding-block: 20px;
  border-radius: 100%;
  border: 4px solid #fd820e;
}
.prim-btn {
  // @apply bg-primary text-white px-4 p-2 rounded-md hover:bg-white hover:text-primary border-2 border-primary;
  background: #fd820e;
  color: white;
  padding-inline: 16px;
  padding: 6px;
  border-radius: 6px;
  border: 2px solid #fd820e;
}
.prim-btn:hover {
  background: #fff;
  color: #fd820e;
}
.img-overlay {
  height: 300px;
  background: #777 url("../../public/images/travel-contact.jpg") no-repeat
    center/cover;
  background-blend-mode: multiply;
  background-attachment: fixed;
  // background-size: 100% 100%;
  // background: #fd820e;
}
.price-overlay {
  //   @apply w-[100px] h-[100px] absolute top-[250px] rounded-full right-4 border-4 border-warning bg-white pt-2
  width: 100px;
  height: 100px;
  position: absolute;
  top: 250px;
  border-radius: 100%;
  right: 16px;
  border: solid 4px #fd820e;
  background: #fff;
  padding-top: 8px;
}
.home-page {
  .landing {
    .socials {
      right: 25px;
      bottom: 18px;

      a {
        cursor: pointer;

        i {
          transition: 0.2s;

          &:hover {
            color: var(--orange-color) !important;
          }
        }
      }
    }

    .text-box {
      &.ar {
        left: initial;
        right: 15%;
      }

      top: 50%;
      left: 15%;
      width: 550px;
      transform: translateY(-50%);
      background-color: rgba(255, 255, 255, 0.623);
      backdrop-filter: blur(5px);
      border: 2px solid var(--blue-color);

      color: var(--blue-color);

      h1 {
        font-weight: bold !important;
      }

      p {
        line-height: 1.7;
      }
    }
  }

  .about-section {
    background-color: #f5f5f5;
  }

  .reservation-section {
    .search-form {
      .search-input {
        outline: none;
        border: 1px solid gray;

        &.error {
          border-color: #dc3545;
        }
      }
    }
  }

  .services-section {
    .box-cont {
      .box {
        box-shadow: 0 3px 15px rgba(105, 105, 105, 0.226);

        .image {
          height: 355px;
          overflow: hidden;

          img {
            object-fit: cover;
            transition: 0.2s;

            &:hover {
              scale: 1.1;
            }
          }
        }

        .text {
          h3 {
            color: var(--blue-color);
          }

          p {
            line-height: 1.7;
          }

          a {
            font-size: 18px;
            color: var(--orange-color);
            transition: 0.2s;
            width: fit-content;

            &:hover {
              color: #fdb89a;
            }
          }
        }
      }
    }
  }

  .apps-section {
    background-color: #f5f5f5;

    .apps {
      img {
        height: 70px !important;
      }
    }
  }

  .offers-section {
    // background-color: #f5f5f5;
    overflow: hidden;

    & > div {
      position: relative;
      z-index: 555;
    }

    img {
      width: 40%;
      opacity: 0.2;
      top: -50%;
      right: -5%;
      transform: rotate(25deg);
    }
  }

  @media (max-width: 991px) {
    .landing {
      .text-box {
        &.ar {
          left: initial !important;
          right: 50% !important;
          transform: translate(50%, -50%) !important;
        }

        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  @media (max-width: 767px) {
    .landing {
      .text-box {
        width: 90%;

        .boxes {
          flex-wrap: wrap;
          margin-top: 5px !important;
        }
      }

      .socials {
        right: 50% !important;
        transform: translateX(50%);
        backdrop-filter: blur(5px);
        bottom: -18px;
        background-color: rgba(0, 0, 0, 0.438);
        padding: 7px 15px 5px;
        border-radius: 5px;
      }
    }

    .reservation-section {
      form {
        flex-direction: column;

        .input-cont {
          width: 100% !important;
        }

        button {
          justify-content: center;
        }
      }
    }

    .apps-section {
      .apps {
        gap: 5px !important;

        img {
          height: 50px !important;
        }
      }
    }

    .offers-section {
      img {
        width: 85%;
        top: -15%;
        right: -15%;
      }
    }
  }
}
</style>
