<template>
    <div class="nav-bar py-4">
        <div class="head-cont d-flex align-items-center justify-content-between">
            <div class="logo ms-md-5 ms-4 d-flex align-items-center">
                <img src="../assets/shared/logo.svg" alt="">
            </div>
            <img :class="`hamburger me-4 ${isOpen ? 'close-menu' : 'd-block'}`" @click="isOpen = true"
                src="../assets/shared/icon-hamburger.svg" alt="">
            <img :class="`close ${isOpen ? 'open' : ''}`" @click="isOpen = false" src="../assets/shared/icon-close.svg"
                alt="">
            <ul :class="`d-flex align-items-center p-4 w-50 gap-5 ${isOpen ? 'open' : ''}`">
                <li><router-link exact to="/Space-tourism-multi-page-website/"><span class="text-light fw-bold">00</span> Home</router-link></li>
                <li><router-link to="/Space-tourism-multi-page-website/destination"><span class="text-light fw-bold">01</span> Destination</router-link></li>
                <li><router-link to="/Space-tourism-multi-page-website/crew"><span class="text-light fw-bold">02</span> Crew</router-link></li>
                <li><router-link to="/Space-tourism-multi-page-website/technology"><span class="text-light fw-bold">03</span> Technology</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const isOpen = ref(false)

</script>
<style lang="scss" scoped>
@import '../_variables.scss';

.close,
.hamburger {
    display: none !important;
}

.nav-bar {
    ul {
        position: relative;
        background-color: #d0d6f915;
        backdrop-filter: blur(20px);
        padding-left: 75px !important;

        &::before {
            content: '';
            position: absolute;
            background-color: #d0d6f92c;
            backdrop-filter: blur(20px);
            width: 80%;
            left: -75%;
            height: 2px;
        }

        li {
            position: relative;
            letter-spacing: $navTextCharacterSpace;

            a {
                font-weight: normal;
                font-size: $navText;
                text-transform: uppercase;

                &::before {
                    content: "";
                    position: absolute;
                    width: 0;
                    height: 2px;
                    transition: 0.2s;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: $white;
                    bottom: -25px;
                }

                &.router-link-exact-active::before {
                    width: 100%;
                }

                &:hover::before {
                    width: 100%;
                }
            }

        }
    }

    @media (max-width: 991px) {
        padding-top: 0 !important;

        ul {
            gap: 0px !important;
            justify-content: space-between;
            padding-left: 50px !important;
            padding-right: 50px !important;

            span {
                display: none;
            }

            &::before {
                height: 0;
            }
        }
    }

    @media (max-width: 767px) {
        .hamburger {
            display: block !important;
            width: 30px;
            height: 25px;
            cursor: pointer;

            &.close-menu {
                display: none !important;
            }
        }

        .close {
            position: fixed;
            width: 25px;
            height: 30px;
            right: 25px;
            cursor: pointer;
            z-index: 5555555;
            transform: translateX(1500%);
            display: block !important;
            transition: 0.2s;

            &.open {
                transform: translateX(0);
            }
        }

        .head-cont {
            padding-top: 25px;
        }

        ul {
            transform: translateX(100%);
            flex-direction: column;
            position: fixed;
            transition: 0.2s;
            right: 0;
            top: 0;
            width: 70% !important;
            gap: 25px !important;
            height: 100%;
            align-items: flex-start !important;
            justify-content: flex-start !important;
            padding-top: 150px !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            z-index: 555;

            &.open {
                transform: translateX(0);
            }

            li {
                width: 100%;
                padding-left: 25px;

                a {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: $navText !important;

                    &.router-link-exact-active::before {
                        height: 100%;
                    }

                    &::before {
                        height: 0;
                        width: 3px !important;
                        top: 0;
                        left: 99%;
                    }

                    span {
                        display: block !important;
                    }
                }
            }
        }
    }
}</style>