<template>
    <div class="technology-page w-100 min-vh-100">
        <HeaderNavbar></HeaderNavbar>
        <div class="container py-5">
            <h4 class="heading text-uppercase"><span class="me-2 fw-bold">03</span> Space launch 101</h4>
            <div class="content mt-5 d-flex aling-items-center gap-5">
                <div class="right-side text-light d-flex align-items-center">
                    <ul class="bullets d-flex flex-column align-items-center gap-4">
                        <li :class="defaultIndex === index ? 'active' : ''" v-for="(item, index) in technologies"
                            :key="index" @click="getTechnologies(index)">{{ index + 1 }}</li>
                    </ul>
                    <div class="info">
                        <span class="text-uppercase">The terminology ...</span>
                        <h1 class="text-uppercase mb-4">{{ info.name }}</h1>
                        <p>{{ info.description }}</p>
                    </div>
                </div>
                <img class="img-fluid" :src="image" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
import HeaderNavbar from '../components/HeaderNavbar.vue';
import { ref } from 'vue';

const technologies = ref([])
const info = ref([])
const image = ref('')
const defaultIndex = ref(0)


let getTechnologies = (index) => {
    defaultIndex.value = index
    info.value = technologies.value[defaultIndex.value]
    if (window.innerWidth > 991) {
        image.value = info.value.images.portrait
    } else image.value = info.value.images.landscape
}


fetch('data.json').then(response => response.json()).then(data => {
    technologies.value = data.technology
    info.value = technologies.value[defaultIndex.value]
    if (window.innerWidth > 991) {
        image.value = info.value.images.portrait
    } else image.value = info.value.images.landscape
})


window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
        image.value = info.value.images.portrait
    } else image.value = info.value.images.landscape
})
</script>
<style lang="scss" scoped>
@import '../variables';

.technology-page {
    background-image: url(../assets/technology/background-technology-desktop.jpg);
    background-size: cover;

    .heading {
        color: $white;
        font-size: $subHeading1;
        letter-spacing: $heading5CharacterSpace;

        span {
            color: #707070;
        }
    }

    .container {
        padding-right: 0px;
        margin-right: 0px;
        max-width: 100%;
        padding-left: 100px;
    }

    .content {
        .right-side {
            gap: 75px !important;

            .bullets {
                li {
                    border: 1px solid $white;
                    width: 75px;
                    height: 75px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Bellifair';
                    font-size: $heading4;

                    &:hover,
                    &.active {
                        color: $primaryColor;
                        background-color: $white;
                    }
                }
            }

            .info {
                span {
                    font-size: $navText;
                    color: $secondaryColor;
                    letter-spacing: $subHeading2CharacterSpace;
                }

                h1 {
                    font-size: $heading3;
                    font-family: 'Bellifair';
                    letter-spacing: $subHeading2CharacterSpace;
                }

                p {
                    color: $secondaryColor;
                    line-height: 1.9;
                    margin-bottom: 0;
                }
            }
        }
    }

    @media (max-width: 991px) {
        background-image: url(../assets/technology/background-technology-tablet.jpg);

        .container {
            padding-left: 0 !important;
            max-width: 100%;
            margin-left: 0 !important;
            padding-right: 0 !important;
            margin-right: 0 !important;

            .heading {
                padding-left: 50px;
            }

            .content {
                flex-direction: column-reverse;
                width: 100% !important;
                gap: 100px !important;

                .right-side {
                    margin: 0 150px;
                    padding: 0 15px;
                    text-align: center;
                    flex-direction: column;

                    .bullets {
                        flex-direction: row !important;

                        li {
                            font-size: 24px;
                            width: 65px;
                            height: 65px;
                        }
                    }
                }

                img {
                    width: 100% !important;
                }
            }
        }
    }

    @media (max-width: 767px) {
        background-image: url(../assets/technology/background-technology-mobile.jpg);

        .container {
            .heading {
                font-size: $navText;
                padding-left: 0;
                text-align: center;
            }

            .content {
                gap: 50px !important;
                .right-side {
                    margin: 0 10px;
                    gap: 50px !important;

                    .info {
                        h1 {
                            font-size: $subHeading1;
                            margin-top: 20px;
                            font-family: 'Bellefair';
                            letter-spacing: $subHeading2CharacterSpace;
                        }
                    }
                }
            }
        }
    }
}</style>