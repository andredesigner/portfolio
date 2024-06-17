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
      <div class="col-lg-3">
        <h1>Muito obrigado pela visita.</h1>
      </div>
      <div class="offset-lg-1 col-lg-4">
        <p>Fique a vontade para me mandar mensagem e marcar uma conversa ou um café, será um prazer conhece-lo e me apresentar.</p>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>