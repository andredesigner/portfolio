<script setup>
    import AoHeader from '~/components/AoHeader.vue';
    import { useRoute } from 'vue-router'
    import { gsap } from "gsap";

    const links = [
        {href: '/sobre', text: 'Sobre'},
        {href: '/projetos', text: 'Projetos'},
        {href: '/fale-comigo', text: 'Fale comigo'}
    ]
</script>
    
<template>
    <main class="container-fluid">
        <div class="row">
            <div class="offset-lg-2 col-lg-8">
                <div class="hero in-up"> 
                    <h1 class="title in-top-bottom">Designer de produtos digitais com experiência em criação de marca e desenvolvimento.</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <nav class="offset-lg-2 col-lg-8">
                <p class="mb-3">Menu</p>
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

<style scoped>
</style>
