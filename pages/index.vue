<script setup>
    import AoHeader from '~/components/AoHeader.vue';
    import { useRoute } from 'vue-router'
    import { gsap } from "gsap";
    
</script>
    
<template>
    <main class="container-fluid">
        <div class="row">
            <div class="offset-lg-1 col-lg-10">
                <div class="ao-border-top">
                    <div class="big-text color-text-2">2024</div>
                    <h1 class="big-text">
                        <span class="color-text-2"> Portfólio</span> de <br>
                        André OIiveira <br>
                        <span>
                            <span>Designer de produto</span>
                        </span>
                    </h1>
                </div>
                <div class="ao-border-top list-summary">
                    <div class="row">
                        <div class="col-lg-4">
                            <p class="item-summary">
                                <span class="medium-text color-text-2 d-block">Localização</span>
                                <span class="medium-text color-text-1 d-block">São Paulo - SP <br>Zona Leste</span>
                            </p>
                        </div>
                        <div class="col-lg-4">
                            <p class="item-summary">
                                <span class="medium-text color-text-2 d-block">Formação</span>
                                <a class="medium-text color-text-1 d-block" href="https://www.belasartes.br/" target="_blank">Design gráfico</a>
                            </p>
                        </div>
                        <div class="col-lg-4">
                            <p class="item-summary">
                                <span class="medium-text color-text-2 d-block">Experiência</span>
                                <span class="medium-text color-text-1 d-block">De 10 anos com design</span>
                            </p>
                        </div>
                        <div class="col-lg-4">
                            <p class="item-summary">
                                <span class="medium-text color-text-2 d-block">Estilo músical</span>
                                <span class="medium-text color-text-1 d-block">Rap</span>
                            </p>
                        </div>
                        <div class="col-lg-4">
                            <p class="item-summary">
                                <span class="medium-text color-text-2 d-block">Esportes</span>
                                <span class="medium-text color-text-1 d-block">Crossfit, corrida e jiu-jitsu</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-lg-12 p-0">
                <iframe src="https://www.youtube.com/embed/9CkhldhysSA?si=0EnckZKkMq8MfLHP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> -->
        <div class="row">
            <div class="offset-lg-1 col-lg-10">
                <div class="ao-border-top">
                    <span class="medium-text color-text-2 mb-72 emphasis">Última experiência</span>
                    <p class="big-text color-text-2 mb-0">Designer de Interface do usuário na <a class="big-text color-text-1" href="https://www.innocean.com/br-en/" target="_blank" >@Innocean</a>, atendia a <a class="color-text-1" href="https://hyundai.com.br/" target="_blank">@Hyundai.</a></p>
                </div>
                <div class="ao-border-top">
                    <span class="medium-text color-text-2 mb-72 emphasis">Atualmente</span>
                    <p class="big-text"><span class="color-text-2">Freelancer</span> de marca e web design.</p>
                    <div class="row">
                        <div class="col-lg-6">
                            <p class="medium-text mt-72">
                                <span>
                                    <span class="color-text-2">Busco oportunidades em</span> <br>
                                    Startups <br>
                                    Estúdio de design<br>
                                    Agências de publicidade<br>
                                </span>
                            </p>
                        </div>
                        <div class="col-lg-6">
                            <p class="medium-text mt-72">
                                <span>
                                    <span class="color-text-2">Especializado em</span> <br>
                                    Design de produtos digitais<br>
                                    Web design<br>
                                    interface do usuário<br>
                                    Design de marca
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="ao-border-top pb-0">
                    <picture class="my-picture">
                        <NuxtImg
                            src="/andre-oliveira-designer.png"
                            sizes="100vw sm:50vw md:400px"
                            placeholder
                            quality="10"
                        />
                    </picture>
                    <p class="big-text mt-72" style="padding-bottom: 60vh;"><span class="color-text-2">Desenvolvo soluções criativas</span> para resolução de problemas.</p>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <p class="medium-text color-text-2 mt-72">Veja meu</p>
                        <nuxt-link class="medium-text color-text-1 ao-button" to="/cases">Trabalho aqui.</nuxt-link>
                    </div>
                    <div class="col-lg-6">
                        <p class="medium-text color-text-2 mt-72">Vamos trabalhar juntos,</p>
                        <a class="medium-text color-text-1 ao-button" href="mailto:andreoliveiradesigner@gmail.com">Me envie um e-mail.</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .my-picture{
        position: sticky;
        top: 20px;
        display: block;
        z-index: -1;
        width: 75%;

        @media (min-width: 993px) {
            width: 28%;
            top: 80px;
        }
    }

    .d-block-mobile{
        @media (max-width: 992px) {
            display: block;
        }
    }

    .pb-0-mobile{
        @media (max-width: 992px) {
            padding-bottom: 0;   
        }
    }
</style>
