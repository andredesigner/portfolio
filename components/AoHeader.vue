<script>
    import AoLogo from './AoLogo.vue';
    import { useRoute } from 'vue-router';

    export default {
        data() {
            return {
                isModalVisible: false,
                isModalProjects: true,
            }
        },
        methods: {
            showModal(type) {
                this.isModalVisible = true;
                document.body.style.overflowY = "hidden";

                if(type === "projetos"){
                    this.isModalProjects = true;
                }else{
                    this.isModalProjects = false;
                }
            },
            closeModal() {
                this.isModalVisible = false;
                document.body.style.overflowY = "auto";
            }
        },
    }
        
</script>

<template>
    <header class="ao-nav">
        <div class="container-fluid">
            <div class="row align-items-center justify-content-between">
                <div class="col-auto col-lg-1">
                    <NuxtLink v-if="$route.name == 'index'" to="/">
                        <AoLogo class="in-left"></AoLogo>
                    </NuxtLink>
                    <div v-else class="nav-links in-left">
                        <NuxtLink class="go-back" to="/">Início</NuxtLink>
                    </div>
                </div>
                <div class="offset-lg-1 col-lg-6 d-none d-sm-none d-md-block d-lg-block">
                    <p v-if="$route.name == 'index'" class="">Olá, seja bem vindo.</p>
                </div>
                <div class="col-auto col-lg-4">
                    <ul class="nav-links">
                        <li>
                            <a href="#" ref="projetos" @click="showModal('projetos')">Projetos</a>
                        </li>
                        <li>
                            <!-- <a href="malito:andreoliveiradesigner@gmail.com">E-mail</a> -->
                            <a class="external-link" href="mailto:andreoliveiradesigner@gmail.com?subject=Acessei seu portfólio">E-mail</a>
                        </li>
                        <!-- <li>
                            <a href="#" ref="fale-comigo" @click="showModal('fale-comigo')">Fale comigo</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <div class="ao-modal" v-if="isModalVisible">
        <!-- Projetos -->
        <div class="ao-modal-dialog radius-top-left-10 radius-top-right-10 in-up" v-if="isModalProjects">
            <div class="ao-modal-header">
                <span>Projetos</span>
                <a href="#" @click="closeModal">Fechar</a>
            </div>
            <div class="ao-modal-content">
                <p>Projetos de criação ou participação do André Oliveira com foco no visual design.</p>
                <ul class="ao-list-projects">
                    <li v-for="n in 4">
                        <nuxt-link class="item-project" to="/projetos/grupo-paes" @click="closeModal">
                            <div class="name-project">
                                Zeferina
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 0H0.75V2H2.75V4H4.75V6H6.75V8H4.75V10H2.75V12H0.75V14H2.75V12H4.75V10H6.75V8H8.75V6H6.75V4H4.75V2H2.75V0Z" fill="#3E5FAA"/>
                                </svg>
                            </div>
                            <NuxtImg
                                src="/project-1.png"
                                sizes="100vw sm:50vw md:400px"
                                placeholder
                                quality="8"
                            />
                        </nuxt-link>
                    </li>
                </ul>
                <!-- <a class="tell-me" href="#">
                    Me diga o que achou 
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-inspector="components/AoHeader.vue:44:33" data-v-fc12bfe7="">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 0H0.75V2H2.75V4H4.75V6H6.75V8H4.75V10H2.75V12H0.75V14H2.75V12H4.75V10H6.75V8H8.75V6H6.75V4H4.75V2H2.75V0Z" fill="#3E5FAA" data-v-fc12bfe7="">
                        </path>
                    </svg>
                </a> -->
            </div>
        </div>

        <!-- Fale comigo -->
        <div class="ao-modal-dialog in-left" v-if="!isModalProjects">
            <div class="ao-modal-header">
                <span>Fale comigo</span>
                <a href="#" v-on:click="closeModal">Fechar</a>
            </div>
            <div class="ao-modal-content">
                <p>Fique a vontade para me mandar mensagem, marcar uma conversa ou um café, será um prazer ouvi-lo.</p>
                <form>
                    <div class="wrap-form">
                        <div class="first">
                            <div class="ao-input">
                                <input type="text" class="ao-form-control form-control shadow-none" id="name" required>
                                <label for="name" class="ao-form-label form-label">Como costumam te chamar</label>
                                <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                            </div>
                            <div class="ao-input">
                                <input type="email" class="ao-form-control form-control shadow-none" id="e-mail" required>
                                <label for="e-mail" class="ao-form-label form-label">Um e-mail para eu retornar</label>
                                <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                            </div>
                        </div>
                        <div class="before">
                            <div class="ao-input ao-text-area">
                                <textarea for="message" class="ao-form-control ao-textarea form-control shadow-none" id="message" contenteditable required></textarea>
                                <label for="message" class="ao-form-label form-label">Sua mensagem</label>
                                <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn ao-btn ao-btn-fill">Enviar</button>
                </form>
                <p class="mt-5">Meu e-mail: <br> <a class="external-link" href="malito:andreoliveiradesigner@gmail.com">andreoliveiradesigner@gmail.com</a></p>
            </div>
        </div>
    </div>
</template>

<style scoped>

    

    button{
        margin-top: 40px;
    }
</style>