<script setup>
import Index from './index.vue';

</script>

<template>
    <div class="portfolio">
        <Header></Header>
        <main class="container-fluid">
            <div class="intro-page">
                <div class="row h-100">
                    <div class="offset-2 col-10 offset-lg-3 col-lg-9 align-items-center d-flex">
                        <p>Algum nome qualquer para o projeto</p>
                    </div>
                </div>
            </div>
            <div class="hero">
                <div class="wrap-text mb-0">
                    <div class="row">
                        <div class="col-lg-3">
                            <NuxtLink to="/">Voltar </Nuxtlink>
                        </div>
                        <div class="col-lg-3">
                            <p>Maecenas a ipsum tortor hac duis tristique est elementum. Experiência profissional de mais de 10 anos no digital em visual design. Trabalhou em times gerenciados com base em metodologias ágeis e produtos escaláveis, participou do processo end-to-end. Contribuiu em agência, startups e ecommerce.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap-imgs">
                <div class="row">
                    <div class="col-12">
                        <NuxtImg src="img-project-g.png" />
                    </div>
                </div>
                <div class="row mb-5 mt-5">
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-6">
                                <h2>Eget est feugiat blandit dui amet</h2>
                            </div>
                            <div class="col-lg-6">
                                <p>Id nunc lectus nibh lectus a id nullam volutpat elit. Mattis quis porta viverra dui tincidunt non fringilla. Leo massa sed arcu dictumst lobortis amet turpis. Sed mattis pretium amet blandit. Eget est feugiat blandit dui amet. Curabitur viverra mollis cras tempor vitae.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <NuxtImg src="img-project-m.png" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <NuxtImg class="mb-5" src="img-project-p.png" />
                        <NuxtImg src="img-project-p.png" />
                    </div>
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-6">
                                <h2>Eget est feugiat blandit dui amet</h2>
                            </div>
                            <div class="col-lg-6">
                                <p>Id nunc lectus nibh lectus a id nullam volutpat elit. Mattis quis porta viverra dui tincidunt non fringilla. Leo massa sed arcu dictumst lobortis amet turpis. Sed mattis pretium amet blandit. Eget est feugiat blandit dui amet. Curabitur viverra mollis cras tempor vitae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="next-project">
                <div class="row">
                    <div class="offset-lg-6 col-lg-3">
                        <h3>Próximo projeto</h3>
                    </div>
                    <div class="col-lg-3">
                        <p>
                            <a href="" data-link="Algum nome qualquer para o projeto">Algum nome qualquer para o projeto</a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<style scoped>
    
</style>