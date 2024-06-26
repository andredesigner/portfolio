<script setup>
  
</script>

<template>
  <main class="container-fluid my-content">
    <div class="row">
      <div class="offset-lg-2 col-lg-3">
        <h1>Muito obrigado pela visita.</h1>
      </div>
      <div class="offset-lg-1 col-lg-4">
        <p>Fique a vontade para me mandar mensagem e marcar uma conversa ou um café, será um prazer conhece-lo e me apresentar.</p>
        <form>
          <div class="ao-input radius-top-left-right-10">
            <input type="text" class="ao-form-control form-control shadow-none" id="name" required>
            <label for="name" class="ao-form-label form-label">Como costumam te chamar</label>
            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
          </div>
          <div class="ao-input">
            <input type="email" class="ao-form-control form-control shadow-none" id="e-mail" required>
            <label for="e-mail" class="ao-form-label form-label">Um e-mail para eu retornar</label>
            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
          </div>
          <div class="ao-input radius-bottom-left-right-10">
            <textarea for="message" class="ao-form-control ao-textarea form-control shadow-none" id="message" contenteditable required></textarea>
            <label for="message" class="ao-form-label form-label">Você gosta de café?</label>
            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
          </div>
          <button type="submit" class="btn ao-btn">Enviar</button>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .ao-btn{
    margin-top: 40px;
  }
</style>