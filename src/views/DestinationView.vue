<template>
    <div class="dest-page w-100 min-vh-100">
        <HeaderNavbar></HeaderNavbar>
        <div class="container py-5">
            <h4 class="heading text-uppercase"><span class="me-2 fw-bold">01</span> Pick your destination</h4>
            <div class="content px-5 mt-5 d-flex align-items-center">
                <img class="planet img-fluid" :src="informations.images.png" alt="">
                <div class="info text-light">
                    <ul class="tabs d-flex aling-items-center gap-4 mb-4 text-uppercase">
                        <li :class="defaultIndex === index ? 'active' : ''" v-for="(tab, index) in tabs" :key="index"
                            @click="showIndex(index)">{{ tab.name }}</li>
                    </ul>
                    <h1 class="text-uppercase">{{ informations.name }}</h1>
                    <p>{{ informations.description }}</p>
                    <div class="second-info d-flex aling-items-center justify-content-between mt-5 pt-4 border-top">
                        <div>
                            <span class="text-uppercase d-block mb-2">Avg, Distance</span>
                            <h3 class="text-uppercase">{{ informations.distance }}</h3>
                        </div>
                        <div>
                            <span class="text-uppercase d-block mb-2">Est, Travel Time</span>
                            <h3 class="text-uppercase">{{ informations.travel }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import HeaderNavbar from '../components/HeaderNavbar.vue';
import { ref } from 'vue';

const tabs = ref([])
const destinations = ref([])
const informations = ref({})

const defaultIndex = ref(0)

let showIndex = (index) => {
    defaultIndex.value = index
    informations.value = destinations.value[defaultIndex.value]
}

fetch('data.json').then(response => response.json()).then(data => {
    data.destinations.forEach(el => {
        tabs.value.push({
            name: el.name
        })
    })
    destinations.value = data.destinations
    informations.value = destinations.value[defaultIndex.value]
})
</script>
<style lang="scss" scoped>
@import '../variables';

.dest-page {
    background-image: url(../assets/destination/background-destination-desktop.jpg);
    background-size: cover;

    .heading {
        color: $white;
        font-size: $subHeading1;
        letter-spacing: $heading5CharacterSpace;

        span {
            color: #707070;
        }
    }

    .content {
        gap: 150px;

        .info {
            .tabs {
                li {
                    position: relative;
                    cursor: pointer;
                    transition: 0.2s;
                    color: $secondaryColor;

                    &::before {
                        content: '';
                        position: absolute;
                        transition: 0.2s;
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: -5px;
                        width: 0;
                        background-color: $white;
                        height: 2px;
                    }

                    &:hover,
                    &.active {
                        &::before {
                            width: 100%;
                        }

                        color: $white;
                    }
                }
            }

            h1 {
                font-size: $heading2;
                font-family: 'Bellefair';
            }

            p {
                line-height: 1.8;
                min-height: 150px;
                color: $secondaryColor;
            }

            .second-info {
                border-color: #383B4B !important;

                span {
                    color: $secondaryColor;
                    font-size: $subHeading2;
                    letter-spacing: $subHeading2CharacterSpace;
                }

                h3 {
                    font-family: 'Bellefair';
                    font-size: $subHeading1;
                }
            }
        }
    }

    @media (max-width: 991px) {
        background-image: url(../assets/destination/background-destination-tablet.jpg);

        .content {
            flex-direction: column;
            gap: 100px;
            padding: 0 !important;
            text-align: center;

            .info {
                ul {
                    justify-content: center !important;
                }

                .second-info {
                    justify-content: space-around !important;
                }
            }
        }
    }

    @media (max-width: 767px) {
        background-image: url(../assets/destination/background-destination-mobile.jpg);

        h4 {
            text-align: center;
            font-size: $navText !important;
        }

        .planet {
            width: 75%;
        }

        .content {
            h1 {
                font-size: 80px !important;
            }

            .info {
                ul {
                    margin-bottom: 30px !important;
                }
                p {
                    min-height: 175px;
                }

                .second-info {
                    flex-direction: column;
                    gap: 25px;
                }
            }
        }
    }
}</style>