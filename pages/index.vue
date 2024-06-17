<script setup>
    import AoHeader from '~/components/AoHeader.vue';
    import { useRoute } from 'vue-router'
    import { gsap } from "gsap";

    const links = [
        {href: '/sobre', text: 'Sobre'},
        {href: '/projetos', text: 'Projetos'}
    ]
</script>
    
<template>
    <main class="container-fluid">
        <div class="row">
            <div class="offset-lg-2 col-lg-9">
                <div class="hero"> 
                    <h1 class="title">Designer de produtos digitais com experiência em criação de marca e desenvolvimento.</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="offset-lg-1 col-lg-1">
                <p>Menu</p>
            </div>
            <nav class="col-lg-9">
                <ul class="ao-nav">
                    <li v-for="link in links">
                        <nuxt-link :to="link.href">
                            {{ link.text }}
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
</template>

<style >
    #mandado{
        top: -150vh !important;
        rotate: -55deg !important;
        right: 70vw !important;
    }
</style>
