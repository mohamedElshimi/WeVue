<template>
  <header class="w-full d-flex flex-wrap">
    <div class="min-h-60 w-100 bg-gray-200 d-sm-block d-none">
      <div
        class="col-11 mx-auto d-flex flex-wrap justify-content-between align-items-center h-100 pt-3"
      >
        <div class="d-flex gap-1 align-items-center mb-3">
          <i class="fa-solid fa-calendar main-color"></i>
          <span class="me-3 fs-6"
            >{{ $t(`date.days[${currentDay}]`) }} , {{ currentNumOfDay }}
            {{ $t(`date.months[${currentMonth}]`) }} , {{ currentYear }}</span
          >
        </div>
        <marquee
          :direction="$i18n.locale === 'ar' ? 'right' : 'left'"
          behavior="scroll"
          scrollamount="8"
          class="mb-3 col-lg-5 col-md-6"
        >
          {{ $t("header.marqueePara") }}
        </marquee>
        <div class="d-flex col-lg-4 col-md-6 gap-1 align-items-center mb-3">
          <span
            class="bg-light text-black px-2 p-1 rounded-3 d-flex align-items-center me-3"
          >
            <i class="fa-solid fa-sun ms-1 main-color"></i>
            <span class="ms-2">{{ temp }} C</span>
          </span>
          <router-link
            v-if="!auth"
            :to="`/${$i18n.locale}/client-login`"
            class="bg-main-color text-white px-2 p-1 rounded-3 d-flex align-items-center me-3"
          >
            <i class="fa-solid fa-user fs-6 ms-1"></i>
            <span class="ms-2">{{ $t("header.login") }}</span>
          </router-link>
          <select
            class="form-select lang d-sm-block d-none"
            v-model="language"
            @change="changeLang"
            aria-label="Default select example"
          >
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <!--<option value="rus">Russian</option>-->
          </select>
        </div>
      </div>
    </div>
    <div
      class="h-[250px] w-100 overflow-hidden relative"
      v-if="
        isRouteActive('/ar') || isRouteActive('/en') || isRouteActive('/rus')
      "
    >
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 1000,
          diableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :space-between="0"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="w-100 d-flex justify-content-center"
      >
        <swiper-slide
          ><img
            src="../../public/images/Banner.jpeg"
            alt="Home Banner"
            class="top-50 -translate-y-1/2 w-100 h-100"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../public/images/Banner.jpeg"
            alt="Home Banner"
            class="top-50 -translate-y-1/2 w-100 h-100"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../public/images/Banner.jpeg"
            alt="Home Banner"
            class="top-50 -translate-y-1/2 w-100 h-100"
        /></swiper-slide>
      </swiper>
    </div>
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary w-100 order-first order-sm-0"
    >
      <div class="container">
        <router-link
          class="navbar-brand me-0 me-md-auto ms-4"
          :to="`/${$i18n.locale}`"
          ><img src="../../public/images/logo.png" alt="" height="60"
        /></router-link>
        <!-- <span
          class="lang btn btn-dark me-auto fw-bold d-flex align-items-center gap-2 ms-3 d-sm-none d-block"
          @click="changeLang"
        >
          <i class="fa-solid fa-globe fs-4"></i>
          {{ $i18n.locale === "en" ? "AR" : "EN" }}
        </span> -->
        <select
          class="form-select lang d-sm-none d-block mx-1"
          v-model="language"
          @change="changeLang"
          aria-label="Default select example"
        >
          <option value="ar">Arabic</option>
          <option value="en">English</option>
          <option value="rus">Russian</option>
        </select>
        <button
          class="navbar-toggler order-md-first"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item position-relative">
              <button
                @click="Home"
                class="nav-link fw-semibold"
                aria-current="page"
              >
                <i class="fa-solid fa-house ms-2"></i
                >{{ $t("header.links.li1") }}
              </button>
            </li>
            <template
              v-for="(item, index) in $tm('serviciesCards')"
              :key="index"
            >
              <li class="nav-item position-relative">
                <router-link
                  v-if="!item.link.includes('http')"
                  class="nav-link fw-semibold"
                  :to="`/${$i18n.locale}/${item.link}`"
                  :class="{
                    active:
                      isRouteActive(`/ar/${item.link}`) ||
                      isRouteActive(`/en/${item.link}`) ||
                      isRouteActive(`/rus/${item.link}`),
                  }"
                >
                  <i class="fa-solid fa-shield ms-2" v-if="index == 0"></i>
                  <i class="fa-solid fa-hotel ms-2" v-else-if="index == 1"></i>
                  <i
                    class="fa-solid fa-car-side ms-2"
                    v-else-if="index == 2"
                  ></i>
                  <i class="fa-sharp fa-solid fa-train ms-2" v-else></i>
                  {{ item.heading }}
                </router-link>
                <a
                  v-if="item.link.includes('http')"
                  target="_blank"
                  class="fw-bold nav-link"
                  :href="item.link"
                >
                  <i class="fa-sharp fa-solid fa-train ms-2"></i>
                  {{ item.heading }}
                </a>
              </li>
            </template>
            <li class="nav-item position-relative">
              <router-link
                :to="`/${$i18n.locale}/contactUs`"
                class="nav-link fw-semibold"
                aria-current="page"
                :class="{
                  active:
                    isRouteActive('/ar/contactUs') ||
                    isRouteActive('/en/contactUs') ||
                    isRouteActive('/rus/contactUs'),
                }"
                ><i class="fa-solid fa-message mx-2"></i
                >{{ $t("header.links.li2") }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import i18n from "../i18n";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import 'path-to-your-style/style.css'; // replace with the correct path

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const modules = ref([Autoplay, Pagination, Navigation]);
let language = ref(i18n.global.locale.value);
const router = useRouter();
const openMenu = ref(false);
const auth = ref(null);
const info = ref([]);
const userInfo = ref({});
const route = useRoute();
const openAccountBox = ref(false);
const isRouteActive = (routePath) => {
  return route.fullPath === routePath;
};
const changeLang = async () => {
  if (language.value === "ar") {
    i18n.global.locale.value = "ar";
    document.body.dir = "rtl";
    console.log(document.body.dir);
    localStorage.setItem("lang", i18n.global.locale.value);
    try {
      await router.replace({ params: { lang: i18n.global.locale.value } });
      location.reload();
    } catch (error) {
      router.push("/");
    }
  } else if (language.value === "en") {
    i18n.global.locale.value = "en";
    document.body.dir = "ltr";
    console.log(document.body.dir);
    localStorage.setItem("lang", i18n.global.locale.value);
    // this is very important code for changing the fuckin value in the URL
    try {
      await router.replace({ params: { lang: i18n.global.locale.value } });
      location.reload();
    } catch (error) {
      router.push("/");
    }
    language.value = "English";
  } else {
    i18n.global.locale.value = "rus";
    document.body.dir = "ltr";
    console.log(document.body.dir);
    localStorage.setItem("lang", i18n.global.locale.value);
    // this is very important code for changing the fuckin value in the URL
    try {
      await router.replace({ params: { lang: i18n.global.locale.value } });
      location.reload();
    } catch (error) {
      router.push("/");
    }
    language.value = "Russian";
  }
};

// -------
const currentDay = ref(null);
const currentNumOfDay = ref(null);
const currentMonth = ref(null);
const currentYear = ref(null);
onMounted(() => {
  auth.value = JSON.parse(localStorage.getItem("clientLogin"));
  console.log(JSON.parse(localStorage.getItem("clientLogin")), "MMMMMMMMMMMMM");
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  currentDay.value = dayOfWeek;
  currentNumOfDay.value = currentDate.getDate();
  const month = currentDate.getMonth();
  currentMonth.value = month;
  currentYear.value = currentDate.getFullYear();
});
const temp = ref(0);
onMounted(() => {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=Georgia&appid=dcc4737f9298c257d7f2332af3149f53"
    )
    .then((res) => {
      temp.value = res.data.main.temp - 273.15;
      temp.value = temp.value.toFixed(2);
    })
    .catch((err) => console.log(err));
});
// --------
const logOut = () => {
  localStorage.clear();
  // router.push({
  //     name: "Home",
  //     params: { lang: i18n.global.locale.value }
  // })
  location.reload();
};
const Home = () => {
  if (i18n.global.locale.value == "en") {
    console.log(i18n.global.locale.value);
    location.replace("http://127.0.0.1:5500/index-en.html");
  } else {
    console.log(i18n.global.locale.value);
    location.replace("http://127.0.0.1:5500/index.html");
  }
};

onMounted(async () => {
  await axios
    .get("https://seasonsge.com/ibrahim/appv1real/info")
    .then((data) => {
      info.value = data.data[0];
    });
  if (localStorage.getItem("clientLogin")) {
    const login = JSON.parse(localStorage.getItem("clientLogin"));
    if (login.success) {
      axios
        .get("https://seasonsge.com/ibrahim/appv1real/usersview")
        .then((data) => {
          userInfo.value = data.data.filter((el) => el.id == login.id)[0];
        });
    }
  }
});
</script>
<style lang="scss" scoped>
.min-h-60 {
  min-height: 60px;
}
.bg-gray-200 {
  background: #cecdcd;
}
.bg-main-color {
  background: #fd820e;
}
.main-color {
  color: #fd820e;
}
.lang {
  cursor: pointer;
  width: 110px;
  margin-right: auto;
  transition: 0.2s;
}
</style>
