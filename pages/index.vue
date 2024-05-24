<script setup>

</script>

<template>
    <div class="portfolio">
        <Header></Header>
        <ul class="connection-with-me header">
            <li>
                <a href="https://www.linkedin.com/in/andreoliveiradesigner/" target="_blank">Linkedin</a>
            </li>
            <li>
                <a href="https://dribbble.com/andreoliveiradesigner" target="_blank">Dribble</a>
            </li>
            <li>
                <a href="https://www.dropbox.com/scl/fi/hb1syvsmrbnknvf3fb7x7/andre-oliveira-curriculo.pdf?rlkey=sda5kzkh6d20gf1clm63j68my&st=uxnkj8go&dl=0" target="_blank">CV</a>
            </li>
            <li>
                <a href="mailto:email@provedor.com.br?subject=Contato através do portfólio">E-mail</a>
            </li>
        </ul>
        <main class="container-fluid">
            <div class="intro-page">
                <div class="row h-100">
                    <div class="offset-2 col-10 offset-lg-3 col-lg-6 align-items-center d-flex">
                        <p>Designer de produtos digitais</p>
                    </div>
                </div>
            </div>
            <div class="hero">
                <div class="w-100">
                    <div class="row">
                        <div class="offset-lg-3 col-lg-9">
                            <p>Projetos selecionados</p>
                            <article>
                                <NuxtLink class="title-1" to="/grupopaes">Título do projeto.</Nuxtlink>
                            </article>
                            <article>
                                <NuxtLink class="title-1" to="/grupopaes">Algum nome qualquer para o projeto.</Nuxtlink>
                            </article>
                            <article>
                                <NuxtLink class="title-1" to="/grupopaes">Chamada do projeto.</Nuxtlink>
                            </article>
                            <article>
                                <NuxtLink class="title-1" to="/grupopaes">Algum nome.</Nuxtlink>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="offset-2 col-10 offset-lg-6 col-lg-3">
                    <NuxtImg 
                        src="foto-andre-oliveira-designer.png" 
                        class="professional-photo" 
                        sizes="sm:50vw md:25vw"
                        densities="x2 x2"
                        placeholder
                        preload
                    />
                </div>
            </div>
            <div class="wrap-text">
                <div class="row">
                    <div class="offset-2 offset-lg-2 col-10 col-lg-3">
                        <h1>Designer de produtos digitais com experiência em criação de marca e desenvolvimento.</h1>
                    </div>
                    <div class="offset-2 offset-lg-0 col-10 col-lg-4">
                        <p>Experiência profissional de mais de 10 anos no digital em visual design. Trabalhou em times gerenciados com base em metodologias ágeis e produtos escaláveis, participou do processo end-to-end. Contribuiu em agência, startups e ecommerce.</p>
                        <p>A capacidade de desenvolver o front-end se deu com a necessidade de entregar além dos desenhos de interfaces e com aprendizados com desenvolvedores incríveis.Como forma de estudo esse portfólio foi desenvolvido com <a href="https://nuxt.com/" target="_blank" data-link="Nuxt">Nuxt</a>.</p>
                        <p>Possui experiência com criação de identidade visual.</p>
                        <p>Última experiência profissional na <a href="https://www.innocean.com/br-en/" target="_blank" data-link="Innocean">Innocean</a>, uma agência de publicidade, onde eu atendia a <a href="https://hyundai.com.br/" target="_blank" data-link="Hyundai">Hyundai</a>, junto do time de digital</p>
                    </div>
                </div>
            </div>
            <div class="wrap-text">
                <div class="row">
                    <div class="offset-2 offset-lg-2 col-lg-3 col-10 col-lg-3">
                        <h2>Além do trabalho e para o trabalho.</h2>
                    </div>
                    <div class="offset-2 offset-lg-0 col-10 col-lg-4">
                        <p>Treino Crossfit e jiu-jitsu. Atualmente estou tentando encontrar a melhor forma de conciliar os dois treinos durante a semana. Correr ou caminhar no parque, para mim, é uma terapia.</p>
                        <p>Sou apreciador de carros, seja antigo (lazanhona) ou novo. O céu com sua imensidão e cores me hipnotiza. Eu tenho algo platônico pelos cachorros de rua que não sei explicar.</p>
                    </div>
                </div>
            </div>
        </main>
       <Footer></Footer>
    </div>
</template>

<style>
    .hero{
        height: calc(100dvh - 65px);
        display: flex;
        align-items: flex-end;
        padding-bottom: 20dvh;
        position: relative;
    }

    .professional-photo{
        margin-bottom: 16vh;
        border-radius: var(--radius);
    }
</style>