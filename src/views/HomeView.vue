<template>
    <div class="home-page w-100 min-vh-100">
        <HeaderNavbar></HeaderNavbar>
        <div class="box container d-flex align-items-end justify-content-between py-5 mt-5">
            <div class="text">
                <h5 class="text-uppercase mb-4">So, You want to travel to</h5>
                <h1 class="text-uppercase mb-0">Space</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
                    kind
                    of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
                    experience!
                </p>
            </div>
            <button class="explore-btn text-uppercase border-0 rounded-circle">Explore</button>
        </div>
    </div>
</template>
<script setup>
import HeaderNavbar from '../components/HeaderNavbar.vue';


</script>
<style lang="scss" scoped>
@import '../variables';

.home-page {
    background-image: url(../assets/home/background-home-desktop.jpg);
    background-size: cover;

    .text {
        h5 {
            color: $secondaryColor;
            letter-spacing: $heading5CharacterSpace;
        }

        h1 {
            color: $white;
            font-family: 'Bellefair', serif;
            font-size: $heading1;
        }

        p {
            width: 450px;
            color: $secondaryColor;
            line-height: 1.9;
        }
    }

    .explore-btn {
        position: relative;
        font-family: 'Bellefair';
        outline: none;
        background-color: $white;
        font-size: $heading4;
        width: 250px;
        height: 250px;

        &::before {
            content: '';
            position: absolute;
            background-color: #ffffff25;
            width: 0;
            height: 0;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            transition: 0.2s;

        }

        &:hover::before {
            width: 145%;
            height: 145%;
        }
    }

    @media (max-width: 991px) {
        background-image: url(../assets/home/background-home-tablet.jpg);
        .box {
            .text {
                text-align: center;
                margin-bottom: 50px;
            }
            
            flex-direction: column;
            align-items: center !important;
        }
    }
    
    @media (max-width: 767px) {
        background-image: url(../assets/home/background-home-mobile.jpg);
        .box {
            gap: 25px;
        }

        .text {
            h5 {
                font-size: $subHeading2;
            }

            h1 {
                font-size: $heading2;
                margin-bottom: 25px !important;
            }

            p {
                width: 100%;

            }
        }

        .explore-btn {
            width: 200px;
            height: 200px;

            &:hover::before {
                width: 130%;
                height: 130%;
            }
        }
    }
}
</style>