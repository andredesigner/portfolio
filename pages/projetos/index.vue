<script setup>
    import { useRoute } from 'vue-router';

    const links = [
        {href: '/grupo-paes', text: 'Grupo Paes.'},
        {href: '/hyundai', text: 'Hyundai.'},
        {href: '/paraiso-feminino', text: 'Paraíso Feminino.'},
        {href: '/pratic-app', text: 'Pratic App'}
    ]
</script>

<template>
    <main class="container-fluid my-content">
        <div class="row">
            <div class="offset-lg-5 col-lg-5">
                <h1>Design de interface e marca</h1>
                <p>Aplicações com foco está em mosrar o design visual.</p>
                <ul class="ao-nav">
                    <li v-for="link in links">
                        <nuxt-link :to="'projetos' + link.href">
                            {{ link.text }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<style>
    /* #mandado{
        top: -50vh;
        rotate: -15deg;
        right: 94vw;
    } */
</style>