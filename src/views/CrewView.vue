<template>
    <div class="crew-page w-100 min-vh-100">
        <HeaderNavbar></HeaderNavbar>
        <div class="container pt-5">
            <h4 class="heading text-uppercase"><span class="me-2 fw-bold">02</span> Meet You Crew</h4>
            <div class="content mt-5 d-flex align-items-end justify-content-between">
                <div class="info mb-5 pb-5">
                    <div>
                        <h4 class="text-uppercase mb-3">{{ informations.role }}</h4>
                        <h1 class="text-uppercase mb-4">{{ informations.name }}</h1>
                        <p>{{ informations.bio }}</p>
                    </div>
                    <ul class="bullets d-flex align-items-center gap-4 mt-5">
                        <li :class="defaultIndex === index ? 'active' : ''" v-for="(bullet, index) in crew" :key="index"
                            @click="getData(index)"></li>
                    </ul>
                </div>
                <img class="img-fluid" :src="informations.images.png" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
import HeaderNavbar from '../components/HeaderNavbar.vue';
import { ref } from 'vue';
const crew = ref([])
const informations = ref({})

const defaultIndex = ref(0)

const getData = (index) => {
    console.log(index);
    defaultIndex.value = index
    informations.value = crew.value[defaultIndex.value]
}

fetch('data.json').then(response => response.json()).then(data => {
    console.log(data.crew);
    crew.value = data.crew
    informations.value = crew.value[defaultIndex.value]
})

</script>
<style lang="scss" scoped>
@import '../variables';

.crew-page {
    background-image: url(../assets/crew/background-crew-desktop.jpg);
    background-size: cover;
    background-position: 0 100%;

    .heading {
        color: $white;
        font-size: $subHeading1;
        letter-spacing: $heading5CharacterSpace;

        span {
            color: #707070;
        }
    }

    .content {
        .info {

            h4,
            h1 {
                font-family: 'Bellefair';
            }

            h4 {
                font-size: $heading4;
                color: #707070;
            }
            
            h1 {
                letter-spacing: $subHeading2CharacterSpace;
                font-size: $heading3;
                color: $white;
            }

            p {
                color: $secondaryColor;
                line-height: 1.8;
                font-size: 18px;
                max-width: 450px;
            }

            .bullets {
                li {
                    width: 15px;
                    height: 15px;
                    background-color: #979797;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: 0.2s;

                    &.active,
                    &:hover {
                        background-color: $white;
                    }
                }
            }
        }
    }

    @media (max-width: 991px) {
        background-image: url(../assets/crew/background-crew-tablet.jpg);
        .content {
            flex-direction: column;
            text-align: center;
            align-items: center !important;

            .info {
                p {
                    max-width: 100%;
                    min-height: 100px;
                }
            }

            .bullets {
                justify-content: center;
            }
        }
    }
    @media (max-width: 767px) {
        background-image: url(../assets/crew/background-crew-mobile.jpg);
        h4 {
            text-align: center;
            font-size: $navText !important;
            margin-bottom: 25px !important;
        }
        .content {
            flex-direction: column-reverse;
            img {
                width: 75%;
            }
            .info {
                border-top: 2px solid #383B4B;
                display: flex;
                flex-direction: column-reverse;
                gap: 50px;
                h4 {
                    font-size: $navText;
                    margin-bottom: 10px !important;
                }
                h1 {
                    font-size: 24px;
                }
                p {
                    font-size: 15px;
                    min-height: 150px;
                }
            }
        }
    }
}
</style>