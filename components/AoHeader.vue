<script setup>
    import AoLogo from './AoLogo.vue';
</script>

<template>
    <header>
        <NuxtLink class="my-logo" to="/">
            <AoLogo class="in-top-bottom"></AoLogo>
        </Nuxtlink>
        <NuxtLink class="in-top-bottom ao-btn ao-btn-border" id="talk-to-me" to="/fale-comigo" v-if="$route.name != 'fale-comigo'">Fale comigo</NuxtLink>
    </header>
    <div class="container-fluid" v-if="$route.name == 'index'">
        <div class="row">
            <div class="col offset-lg-2 col-lg-7">
                <p class="first-element-page in-down">
                    Olá, <br> seja bem vindo.
                </p>                
            </div>
        </div>
    </div>
    <div class="container-fluid" v-else>
        <div class="row">
            <div class="offset-2 col offset-lg-2 col-lg-9">
                <div class="first-element-page with-link in-down">
                    <nuxt-link
                        class="d-inline-block mr-3"
                        to="/" >
                        Início
                    </nuxt-link>
                    <span>/</span>
                    <span class="current-page">{{$route.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top: 15.6px;
        padding-right: 24px;
        padding-left: 24px;
        z-index: 10;

        @media(max-width: 992px){
            padding-right: 12px;
            padding-left: 12px;
        }
    }
</style>