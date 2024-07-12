<script setup>
    import AoHeader from '~/components/AoHeader.vue';
    import { useRoute } from 'vue-router'
    import { gsap } from "gsap";
    
</script>
    
<template>
    <main class="container-fluid">
        <div class="row">
            <div class="offset-lg-2 col-lg-8">
                <div class="hero"> 
                    <p class="d-sm-block d-md-block d-lg-none">Olá, seja bem vindo.</p>
                    <h1 class="my-title">Designer de produtos digitais com experiência em criação de marca e desenvolvimento.</h1>
                    <div class="ao-link anchor">
                        <a href="#meet-andre">
                            <span>Conheça o André Oliveira</span>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2L8 8H6V4H4V2H0V0ZM2 6H4V4H2V6ZM2 6V8H0V6H2Z" fill="#3E5FAA"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="meet-andre">
            <div class="row">
                <div class="offset-lg-2 col-lg-4">
                    <p>Experiência profissional de mais de 10 anos no digital em visual design. Trabalhou em times gerenciados com base em metodologias ágeis e produtos escaláveis, participou do processo end-to-end. Contribuiu em agência, startups e
e-commerce.</p>
                </div>
            </div>
            <div class="row">
                <div class="offset-lg-2 col-lg-2 order-lg-2">
                    <div class="wrap-details">
                        <div class="skills">
                            <picture>
                                <NuxtImg
                                    src="/andre-oliveira-designer.png"
                                    sizes="100vw sm:50vw md:400px"
                                    placeholder
                                    quality="8"
                                />
                            </picture>
                            <div>
                                <b>Habilidades</b>
                                <p>Design de interface.</p>
                                <p>HTML, CSS e Javscript.</p>
                                <p class="mb-0">Identidade visual.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="offset-lg-2 col-lg-4">
                    <h2 class="my-subtitle" style="margin-top: 120px;">Experiência diversificada no design</h2>
                    <p>Possui experiência com criação de identidade visual. Última experiência profissional na <a href="https://www.innocean.com/br-en/" target="_blank">Innocean</a>, uma agência de publicidade, onde eu atendia a <a href="https://hyundai.com.br/" target="_blank">Hyundai</a>, junto do time de Digital.</p>
                    <h2 class="my-subtitle" style="margin-top: 120px;">Conhecimento em programação</h2>
                    <p>A capacidade de desenvolver o front-end se deu com a necessidade de entregar além dos projetos de interfaces e com aprendizados com desenvolvedores incríveis.Como forma de estudo esse portfólio foi desenvolvido com <a href="https://nuxt.com/" target="_blank">Nuxt</a>.</p>
                    <h2 class="my-subtitle" style="margin-top: 120px;">Além do trabalho e para o trabalho.</h2>
                    <p>Treino Crossfit e jiu-jitsu. Atualmente estou tentando encontrar a melhor forma de conciliar os dois treinos durante a semana. Correr ou caminhar no parque, para mim, é uma terapia.</p>
                    <p class="mb-0">Sou apreciador de carros, seja antigo (lazanhona) ou novo. O céu com sua imensidão e cores me hipnotiza. Eu tenho algo platônico pelos cachorros de rua que não sei explicar.</p>
                </div>
            </div>
        </div>

    </main>
</template>

<style scoped>

</style>
