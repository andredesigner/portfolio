<script setup>
    import AoHeader from '~/components/AoHeader.vue';
    import { useRoute } from 'vue-router'
    import { gsap } from "gsap";
    
</script>
    
<template>
    <main class="container-fluid">
        <!-- <div class="row">
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
        </div> -->
        <!-- <div class="row">
            <div class="col-lg-12 p-0">
                <iframe src="https://www.youtube.com/embed/9CkhldhysSA?si=0EnckZKkMq8MfLHP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> -->
        <!-- <div class="row">
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
    </main> -->
    <div class="temporario">
        <div class="logo">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_11670_69)">
                <path d="M45.0184 31.468C45.0184 19.0412 34.9194 8.92676 22.5044 8.92676C10.0893 8.92676 0 19.0412 0 31.468C0 38.0684 0.829589 42.5968 2.69017 46.135C4.57473 49.7212 8.51647 53.9997 16.5966 53.9997C22.3605 53.9997 29.8412 50.6154 34.4927 45.5821C42.1891 36.4243 33.1068 50.399 34.4927 52.2594H45.0136L45.0232 31.468H45.0184ZM29.3329 40.4865C24.95 43.4766 20.1739 44.1063 16.2801 44.1063C12.9617 44.1063 12.0458 42.8997 11.4464 41.7556C10.401 39.7606 9.89272 36.3955 9.89272 31.468C9.89272 24.5023 15.5512 18.8345 22.5092 18.8345C29.4672 18.8345 35.1256 24.5023 35.1256 31.468C35.1256 34.0784 32.9821 38.0011 29.3329 40.4865Z" fill="#FFB607"/>
                <path d="M22.5043 36.4241C25.2425 36.4241 27.4579 34.2032 27.4579 31.463C27.4579 28.7229 25.2377 26.502 22.5043 26.502C19.771 26.502 17.5508 28.7229 17.5508 31.463C17.5508 34.2032 19.771 36.4241 22.5043 36.4241Z" fill="black"/>
                <path d="M22.5188 0H43.0859C49.1136 0 53.9952 4.8986 53.9952 10.9365V12.5566C53.9952 14.5804 51.5544 15.59 50.1302 14.1574C46.7831 10.7971 42.5872 8.41271 37.9885 7.25897L22.116 3.28336C20.2122 2.80744 20.5575 0 22.5188 0Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_11670_69">
                <rect width="54" height="54" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
        <div class="aviso">

        </div>
    </div>
</template>

<style scoped>
    .temporario{
        display: grid;
        grid-template-columns: repeat(6, 1fr);  
    }

    .logo{
        grid-column: 1 / 5;
    }

    .aviso{
        grid-column: 5 / 7;
    }


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
