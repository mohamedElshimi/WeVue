<template >
    <div class="agent-dashboard min-vh-100 d-flex">
        <div :class="`aside position-fixed d-flex justify-content-between flex-column overflow-auto ${$i18n.locale === 'en' ? 'english' : 'arabic'}
                                                                    ${openMenu ? 'active' : ''}`">
            <div class="top-side">
                <div class="text-end">
                    <i class="fa-solid fa-xmark fs-3 p-3 text-muted mobile-close d-none" @click="openMenu = false"></i>
                </div>
                <h3 class="p-3 fs-4 text-center">
                    {{ $t('dashAside.heading') }}
                </h3>
                <div class="container">
                    <ul class="tabs d-flex mt-5 flex-column gap-2">
                        <li :class="`${activeTabs === '1' ? 'active' : ''} p-2 px-3 fw-semibold text-muted d-flex align-items-center rounded-1 gap-3`"
                            @click="activeTabs = '1', openMenu = false">
                            <i class="fa-solid fa-user"></i>
                            <span>
                                {{ $t('dashAside.links[0]') }}
                            </span>
                        </li>
                        <li :class="`${activeTabs === '2' ? 'active' : ''} p-2 px-3 fw-semibold text-muted d-flex align-items-center rounded-1 gap-3`"
                            @click="activeTabs = '2', openMenu = false">
                            <i class="fa-solid fa-plane-up"></i>
                            <span>
                                {{ $t('dashAside.links[1]') }}
                            </span>
                        </li>
                        <li :class="`${activeTabs === '3' ? 'active' : ''} p-2 px-3 fw-semibold text-muted d-flex align-items-center rounded-1 gap-3`"
                            @click="activeTabs = '3', openMenu = false">
                            <i class="fa-solid fa-hotel"></i>
                            <span>
                                {{ $t('dashAside.links[2]') }}
                            </span>
                        </li>
                        <li :class="`${activeTabs === '4' ? 'active' : ''} p-2 px-3 fw-semibold text-muted d-flex align-items-center rounded-1 gap-3`"
                            @click="activeTabs = '4', openMenu = false">
                            <i class="fa-solid fa-car-side"></i>
                            <span>
                                {{ $t('dashAside.links[3]') }}
                            </span>
                        </li>
                        <li :class="`${activeTabs === '5' ? 'active' : ''} p-2 px-3 fw-semibold text-nowrap text-muted d-flex align-items-center rounded-1 gap-3`"
                            @click="activeTabs = '5', openMenu = false">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <span>
                                {{ $t('dashAside.links[4]') }}
                            </span>
                        </li>
                        <a class="p-2 px-3 fw-semibold text-nowrap text-muted d-flex align-items-center rounded-1 gap-3 text-decoration-none"
                            href="https://tre.ge/en">
                            <i class="fa-solid fa-train"></i>
                            <span>
                                {{ $t('dashAside.links[6]') }}
                            </span>
                        </a>
                        <div class="d-flex flex-column">
                            <p
                                class="p-2 px-3 mb-2 fw-semibold text-nowrap text-muted d-flex align-items-center rounded-1 gap-3">
                                <i class="fa-solid fa-clock-rotate-left"></i>
                                Booking History
                            </p>
                            <ul class="px-3 d-flex flex-column gap-2">
                                <li :class="`p-2 px-3 fw-semibold text-nowrap text-muted d-flex align-items-center rounded-1 gap-3 ${activeTabs === '7' ? 'active' : ''}`"
                                    @click="activeTabs = '7', openMenu = false">
                                    <i class="fa-solid fa-clock-rotate-left"></i>
                                    <span>Cars History</span>
                                </li>
                                <li :class="`p-2 px-3 fw-semibold text-nowrap text-muted d-flex align-items-center rounded-1 gap-3 ${activeTabs === '8' ? 'active' : ''}`"
                                    @click="activeTabs = '8', openMenu = false">
                                    <i class="fa-solid fa-clock-rotate-left"></i>
                                    <span>Hotels History</span>
                                </li>
                                <li :class="`p-2 px-3 fw-semibold text-nowrap text-muted d-flex align-items-center rounded-1 gap-3 ${activeTabs === '9' ? 'active' : ''}`"
                                    @click="activeTabs = '9', openMenu = false">
                                    <i class="fa-solid fa-clock-rotate-left"></i>
                                    <span>Flights History</span>
                                </li>
                                <li :class="`p-2 px-3 fw-semibold text-nowrap text-muted d-flex align-items-center rounded-1 gap-3 ${activeTabs === '10' ? 'active' : ''}`"
                                    @click="activeTabs = '10', openMenu = false">
                                    <i class="fa-solid fa-clock-rotate-left"></i>
                                    <span>Programs History</span>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="other-butns down-side mt-4 w-100 d-flex align-items-center justify-content-between p-3 px-4">
                <i :class="`fa-solid fa-gear fs-5 ${activeTabs === '6' ? 'active' : ''} settings`" title="Settings"
                    @click="activeTabs = '6', openMenu = false"></i>
                <i class="fa-solid fa-right-from-bracket" title="Logout" @click="logOut"></i>
            </div>
        </div>
        <div :class="`content flex-fill ${$i18n.locale === 'en' ? '' : 'arabic'}`">
            <div class="header d-flex justify-content-end align-items-center">
                <i :class="`fa-solid fa-bars text-light p-3 mobile-menu d-none ${$i18n.locale === 'en' ? 'me-auto' : 'ms-auto'}`"
                    @click="openMenu = true"></i>
                <span class="lang p-3 px-4 fw-bold d-flex align-items-center gap-2" @click="changeLang">
                    <i class="fa-solid fa-globe fs-5"></i>
                    {{ $i18n.locale === 'en' ? 'AR' : 'EN' }}
                </span>
                <div class="profile p-3 px-4 d-flex align-items-center gap-2" @click="activeTabs = '6'">
                    <img width="40" height="40" class="rounded-circle"
                        :src="`https://seasonsge.com/ibrahim/images/Agents/${userData.img}`" alt="">
                    <h4 class="text-white mb-0">{{ userData.name }}</h4>
                </div>
            </div>
            <div class="inner-content">
                <div class="second-header bg-white p-3 px-4 d-flex align-items-center justify-content-between">
                    <h4 class="mb-0">
                        {{ activeTabs === '1' ? $t('dashAside.links[0]') :
                            activeTabs === '2' ? $t('dashAside.links[1]') :
                                activeTabs === '3' ? $t('dashAside.links[2]') :
                                    activeTabs === '4' ? $t('dashAside.links[3]') :
                                        activeTabs === '5' ? $t('dashAside.links[4]') :
                                            activeTabs === '6' ? $t('dashAside.links[5]') : '' }}
                    </h4>
                    <router-link class="text-muted text-decoration-none fw-semibold" :to="`/${$i18n.locale}`">
                        {{ $t('dashAside.backHome') }}
                    </router-link>
                </div>
                <AgentProfComp v-if="activeTabs === '1'"></AgentProfComp>
                <FlightReservComp v-if="activeTabs === '2'"></FlightReservComp>
                <HotelSearchComp v-if="activeTabs === '3'"></HotelSearchComp>
                <CarsSearchComp v-if="activeTabs === '4'"></CarsSearchComp>
                <TourismSearchComp v-if="activeTabs === '5'"></TourismSearchComp>
                <AgentSettingsView v-if="activeTabs === '6'" :userData="userData"></AgentSettingsView>
                <CarsHistory v-if="activeTabs === '7'"></CarsHistory>
                <HotelsHistory v-if="activeTabs === '8'"></HotelsHistory>
                <FlightsHistory v-if="activeTabs === '9'"></FlightsHistory>
                <ProgramsHistory v-if="activeTabs === '10'"></ProgramsHistory>
            </div>
        </div>
        <Loader v-if="loading"></Loader>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import AgentProfComp from '../../components/Agent Components/AgentProfComp.vue'
import FlightReservComp from '../../components/Agent Components/FlightReservComp.vue'
// import CarReservComp from '../../components/Agent Components/CarReservComp.vue'
import CarsSearchComp from '../../components/Agent Components/CarsSearchComp.vue'
import HotelSearchComp from '../../components/Agent Components/HotelSearchComp.vue'
import TourismSearchComp from '../../components/Agent Components/TourismSearchComp.vue'
import AgentSettingsView from '../../components/Agent Components/AgentSettingsView.vue'
import CarsHistory from '../../components/Agents History/CarsHistory.vue'
import HotelsHistory from '../../components/Agents History/HotelsHistory.vue'
import FlightsHistory from '../../components/Agents History/FlightsHistory.vue'
import ProgramsHistory from '../../components/Agents History/ProgramsHistory.vue'
import router from '../../router';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Loader from '../../components/Loader.vue'
import i18n from '../../i18n'


const loading = ref(false)
const route = useRoute()
const activeTabs = ref('1')
const userData = ref({})
const openMenu = ref(false)

const changeLang = async () => {
    if (i18n.global.locale.value === 'en') {
        i18n.global.locale.value = 'ar'
        document.body.dir = 'rtl'
        localStorage.setItem('lang', i18n.global.locale.value)
        try {
            await router.replace({ params: { lang: i18n.global.locale.value } })
        } catch (error) {
            router.push('/')
        }
    } else {
        i18n.global.locale.value = 'en'
        document.body.dir = 'ltr'
        localStorage.setItem('lang', i18n.global.locale.value)
        // this is very important code for changing the fuckin value in the URL 
        try {
            await router.replace({ params: { lang: i18n.global.locale.value } })
        } catch (error) {
            router.push('/')
        }
    }
}


const logOut = () => {
    localStorage.clear()
    // router.push(`/${i18n.global.locale.value}/login`)
    router.push({
        name: "Clients Login",
        params: { lang: i18n.global.locale.value }
    })
}

watch(activeTabs, newVal => {
    activeTabs.value = newVal
    localStorage.setItem("activeTab", newVal)
})


onMounted(async () => {
    loading.value = true
    localStorage.getItem("activeTab") ? activeTabs.value = localStorage.getItem("activeTab") : '1'
    if (localStorage.getItem("login")) {
        const login = JSON.parse(localStorage.getItem("login"))
        router.push({
            name: 'Agent Dashboard',
            params: { lang: i18n.global.locale.value, userId: login.id }
        })
        await axios.get("https://seasonsge.com/ibrahim/appv1real/usersview").then(data => {
            data.data.forEach(el => {
                if (el.id == route.params.userId) {
                    userData.value = el
                    loading.value = false
                }
            })
        })
    } else {
        router.push({
            name: "Clients Login",
            params: { lang: i18n.global.locale.value }
        })
    }

})
</script>

<style lang="scss" scoped>
.agent-dashboard {
    .aside {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.123);
        height: 100%;
        z-index: 5555555;
        background-color: white;
        width: 290px;

        &::-webkit-scrollbar {
            appearance: none;
            width: 0;
        }

        h3 {
            color: var(--blue-color);
            position: relative;

            &::before {
                content: "";
                position: absolute;
                bottom: 0px;
                height: 5px;
                border-radius: 50px;
                width: 50%;
                left: 50%;
                transform: translateX(-50%);
                background-color: var(--blue-color);
            }
        }

        .tabs {

            li,
            a {
                transition: 0.2s;
                cursor: pointer;

                &:not(.history):hover {
                    background-color: var(--blue-color);
                    color: white !important;
                }

                &.active {
                    background-color: var(--blue-color);
                    color: white !important;
                }
            }
        }

        .other-butns {
            background-color: var(--blue-color);
            color: white;
            border-top: 3px solid var(--orange-color);

            i {
                cursor: pointer;
                transition: 0.2s;

                &.settings {
                    &.active {
                        color: var(--orange-color);
                        transform: rotate(90deg);
                    }
                }
            }
        }
    }

    .content {
        background-color: #f2f2f2;
        width: 100%;
        // width: calc(100% - 290px);
        position: absolute;
        right: 0;
        min-height: 100vh;

        &.arabic {
            right: initial;
            left: 0;

            .header .profile {
                border-left: 0;
                border-right: 1px solid var(--orange-color);
            }
        }

        .header {
            background-color: var(--blue-color);
            border-bottom: 3px solid var(--orange-color);

            .lang {
                color: white;
                cursor: pointer;
                transition: 0.2s;

                &:hover {
                    opacity: 0.5;
                }
            }

            .profile {
                cursor: pointer;
                border-left: 1px solid var(--orange-color);
                width: fit-content;

                img {
                    object-fit: cover;
                }

                h4 {
                    transition: 0.2s;
                }

                &:hover {
                    h4 {
                        opacity: 0.5;
                    }
                }
            }
        }

        .inner-content {
            .second-header {
                a {
                    transition: 0.2s;

                    &:hover {
                        color: var(--blue-color) !important;
                        text-decoration: underline !important;
                    }
                }
            }
        }
    }

    .mobile-menu,
    .mobile-close {
        display: block !important;
        cursor: pointer;
        font-size: 20px;
        transition: 0.2s;

        &:hover {
            opacity: 0.7;
        }
    }

    .mobile-close {
        width: fit-content;
        margin-left: auto;
    }

    .aside {
        transition: 0.2s;

        &.english {
            left: -150%;

            &.active {
                left: 0;
            }
        }

        &.arabic {
            right: -150%;

            &.active {
                right: 0;
            }
        }

        h3 {
            padding-left: 0 !important;
            padding-right: 0 !important;

            &::before {
                height: 3px;
            }
        }

        width: 300px;
    }

    @media (max-width: 767px) {

        .content {

            // width: calc(100% - 75px);
            // width: 100%;
            .header {

                .lang,
                .profile {
                    padding: 8px 10px !important;
                }

                .lang,
                i {
                    font-size: 13px !important;
                }

                .profile {
                    h4 {
                        font-size: 12px !important;
                    }
                }
            }

            .inner-content {
                .second-header {
                    padding: 15px 10px !important;

                    h4,
                    a {
                        font-size: 12px !important;
                    }
                }
            }
        }
    }
}
</style>