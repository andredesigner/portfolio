<script setup>
import Index from './index.vue';

</script>

<template>
    <div class="project-detail">
        <div class="container-fluid">
            <div class="row">
                <div class="hero">
                    <div class="row">
                        <div class="col-md-3">
                            <NuxtLink class="button return" to="/">Voltar</Nuxtlink>
                        </div>
                        <div class="col-md-9">
                            <span class="text-border">Detalhe do projeto</span>
                        </div>
                        <div class="offset-lg-3 col-md-8">
                            <h1 class="title">Grupo Paes</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="offset-lg-3 col-md-8">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="">
                                        <p>Lorem ipsum dolor sit amet consectetur. Facilisis tellus non ut leo aliquet consequat. At nisl quisque vitae magna duis. Lacus. Lorem ipsum dolor sit amet consectetur. Facilisis tellus non ut leo aliquet consequat. At nisl quisque vitae magna duis. Lacus.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur. Facilisis tellus non ut leo aliquet consequat. At nisl quisque vitae magna duis. Lacus.</p>
                                    </div>
                                    <div class="">
                                        <p>Identidade visual</p>
                                        <p>Interface do usuário</p>
                                        <p>Desenvolvimento</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid wrap-imgs">
            <div class="row">
                <div class="col-12 p-0">
                    <NuxtImg src="img-project-g.png" />
                </div>
                <div class="col-12 p-0">
                    <NuxtImg src="img-project-g-2.png" />
                </div>
                <div class="col-12 p-0">
                    <div class="row">

                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <footer class="d-flex justify-content-between flex-column">
                        <div class="row">
                            <div class="offset-md-3 col-md-9">
                                <p class="title">Muito obrigado pela visita.</p>
                            </div>
                            <div class="offset-md-3 col-md-3">
                                <div class="wrap-text ">
                                    <p>Fique a vontade para me mandar mensagem e marcar uma conversa  ou um café, seria um prazer.</p>
                                </div>
                            </div>
                        </div>
                        <ul class="external-link-group row">
                            <li class="col-md-3 d-flex align-items-center">©2024</li>
                            <li class="col-md-3"><a href="https://www.linkedin.com/in/andreoliveiradesigner/" target="_blank" class="button">Linkedin</a></li>
                            <li class="col-md-3"><a href="https://www.dropbox.com/scl/fi/hb1syvsmrbnknvf3fb7x7/andre-oliveira-curriculo.pdf?rlkey=sda5kzkh6d20gf1clm63j68my&dl=0" target="_blank" class="button">CV</a></li>
                            <li class="col-md-3"><a href="mailto:andreoliveiradesigner@gmail.com?subject=Contato através do portƒolio" class="button">Enviar e-mail</a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.project-detail{

    .hero{
        display: flex;
        flex-direction: column;
        padding-bottom: 24px;
        height: auto;

        .title{
            margin-top: 0;
        }
    }

    .fixed-bottom{
        z-index: 0;
    }

    .wrap-imgs{
        background: var(--brandcolor3);
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);
        position: relative;
        z-index: 1;

        img{
            width: 100%;
        }
    }

    footer{
        margin-top: inherit;
        z-index: 1;
        position: relative;
        background-color: var(--brandcolor3);
    }
}

.wrap-text{
    border-bottom: 0;
}

footer{
    height: 100vh;
    padding: 40px 0;
    margin-top: -10vh;

    .external-link-group{
        position: relative;
    }

    .wrap-text{
        margin-top: 120px;
    }
}
</style>