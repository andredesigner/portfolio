<script setup>

</script>

<template>
    <main class="container-fluid">
        <div class="row">
            <div class="offset-lg-1 col-lg-11">
                <div class="d-flex justify-content-end">
                <nuxt-link to="/">
                    <Close></Close>
                </nuxt-link>
                </div>
            </div>
            <div class="offset-lg-1 col-lg-1">
                <p class="text-capitalize">{{ $route.name }}</p>
            </div>
            <div class="col-lg-4">
                <ul class="ao-project-list">
                    <li>
                        <nuxt-link to="/">Título do projeto.</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="">Algum nome qualquer.</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="">Chamada do projeto.</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="">Algum nome.</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<style>
    #mandado{
        top: -50vh;
        rotate: -15deg;
        right: 94vw;
    }
</style>