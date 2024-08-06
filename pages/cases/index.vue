<script setup>
    import { useRoute } from 'vue-router';

</script>

<template>
    <main class="container-fluid">
        <div class="row">
            <div class="offset-lg-1 col-lg-10">
                <div class="ao-border-top pb-0">
                    <h1 class="big-text color-text-2">Cases</h1>
                </div>
                <ul class="list-cases">
                    <li>
                        <a href="#">
                            <h3 class="medium-text color-text-2">@Grupo Paes</h3>
                            <p class="color-text-1">Ajudando seus clientes a terem fácil acesso ao necessário</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <h3 class="medium-text color-text-2">Innocean@Hyundai</h3>
                            <p class="color-text-1">Permitindo que os usuários façam reservas e financiem carros pela web</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <h3 class="medium-text color-text-2">@PraticApp</h3>
                            <p class="color-text-1">Ajudando a mudar o índice de obesidade do Brasil</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
    .list-cases{
        padding: 0;
        margin: 0;
        list-style: none;

        li:last-child{
            a{
                border-bottom: 0;
            }
        }

        a{
            display: block;
            text-decoration: none;
            padding: 72px 0;
            border-bottom: 1px solid rgba(92, 74, 32, .4);

            p{
                font-size: 64px;
                line-height: 100%;
                font-weight: 400;
                margin-top: 24px;
                margin-bottom: 0;

                @media (max-width: 992px) {
                    font-size: 36px;
                }
            }
        }
    }
</style>