<script setup>
import AoLogo from './AoLogo.vue';


</script>

<template>
    <header>
        <NuxtLink class="my-logo" to="/">
            <AoLogo></AoLogo>
        </Nuxtlink>
        <NuxtLink id="talk-to-me" to="/fale-comigo">Fale comigo</NuxtLink>
    </header>
    <div class="container-fluid">
        <div class="row">
            <div class="offset-lg-2 col-lg-9">
                <nuxt-link
                    v-if="$route.name != 'index'" 
                    class="first-element-page"
                    to="/" > 
                    Página inicial
                </nuxt-link>
                <p
                    v-else
                    class="first-element-page">
                    Olá, seja bem vindo.
                </p>
            </div>
        </div>
    </div>
</template>

<style>
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top: 15.6px;
        padding-right: 24px;
        padding-left: 24px;
        z-index: 0;
    }
</style>