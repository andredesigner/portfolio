<script setup>

</script>

<template>
  <main class="container-fluid my-content">
    <div class="row">
      <div class="order-lg-1 offset-lg-1 col-lg-5">
        <h1>Designer de produtos digitais com experiência em criação de marca e desenvolvimento.</h1>
        <p>
          Experiência profissional de mais de 10 anos no digital em visual design. Trabalhou em times gerenciados com base em metodologias ágeis e produtos escaláveis, participou do processo end-to-end. Contribuiu em agência, startups e e-commerce.
          <br><br>A capacidade de desenvolver o front-end se deu com a necessidade de entregar além dos desenhos de interfaces e com aprendizados com desenvolvedores incríveis.Como forma de estudo esse portfólio foi desenvolvido com <a href="https://nuxt.com/" target="_blank">Nuxt</a>.
          <br><br>Possui experiência com criação de identidade visual. Última experiência profissional na <a href="https://www.innocean.com/br-en/" target="_blank">Innocean</a>, uma agência de publicidade, onde eu atendia a <a href="https://hyundai.com.br/" target="_blank"> Hyundai</a>, junto do time de digital.
          <br><br>Veja os meus projetos.
        </p>
        <nuxt-link class="ao-btn ao-btn-border" to="/projetos">Projetos</nuxt-link>
        <h1>Além do trabalho e para o trabalho.</h1>
        <p>
          Treino Crossfit e jiu-jitsu. Atualmente estou tentando encontrar a melhor forma de conciliar os dois treinos durante a semana. Correr ou caminhar no parque, para mim, é uma terapia.
          <br><br>Sou apreciador de carros, seja antigo (lazanhona) ou novo. O céu com sua imensidão e cores me hipnotiza. Eu tenho algo platônico pelos cachorros de rua que não sei explicar.
        </p>
      </div>
      <div class="offset-lg-2 col-lg-2">
        <picture>
          <NuxtImg
            src="/andre-oliveira-designer.png"
            class="in-up"
          />
        </picture>
      </div>
    </div>
  </main>
</template>

<style scoped>
  img{
    margin-bottom: 10vh;
  }

  #mandado{
    top: -150vh;
    rotate: -55deg;
    right: 70vw;
  }

  .ao-btn{
    margin-bottom: 10vh;
  }

  picture{
    position: sticky;
    display: block;
    top: 140px;
  }

</style>