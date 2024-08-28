<script setup>
    const isActive = ref(false);

    function toggleActive(event) {
        event.target.classList.toggle('active');
    }
    
</script>

<template>
    <header class="ao-header">
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-1 col-lg-10">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex w-100 justify-content-between-mobile">
                            <NuxtLink class="ao-logo d-flex align-items-center" to="/">
                                <AoLogo></AoLogo>
                            </NuxtLink>
                            <ul>
                                <li>
                                    <nuxt-link to="/">Início</nuxt-link>
                                </li>
                                <li>
                                <nuxt-link to="/cases">Cases</nuxt-link>
                                </li>
                            </ul>
                        </div>
                        <ul v-bind:class="{ active: isActive }" 
                            class="social-media">
                            <li>
                                <nuxt-link to="https://instagram.com/andreoliveira.des.br" target="_blank">Instagram</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="https://www.linkedin.com/in/andreoliveiradesigner/" target="_blank">Linkedin</nuxt-link>
                            </li>
                        </ul>
                        <span v-on:click="toggleActive" @click="isActive=!isActive" class="view-social-media">+</span>
                    </div>
                </div>
            </div>
        </div>
    </header>    
    
    
</template>

<style scoped lang="scss">
    .social-media{
        @media (max-width: 992px) {
            translate: 0 100%;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
            flex-direction: column;
            gap: 24px !important;
            padding: 24px 0 !important;
            text-align: center;
            background: rgba(217, 217, 217, 0.4);
            -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
            transition: all .2s ease-in;

            &.active{
                translate: 0 0;
                transition: all .2s ease-out;
            }
        }
    }

    .view-social-media{
        width: 44px;
        height: 44px;
        font-size: 36px;
        padding: 0;
        margin: 0;
        line-height: 1;
        text-align: center;
        transition: all 0.2s ease-in-out;
        position: fixed;
        bottom: 40px;
        right: 40px;
        display: inline-block;
        background-color: #FFB607;
        border-radius: 44px;

        @media (min-width: 993px) {
            display: none;
        }

        &.active{
            transform: rotate(45deg);
            transform-origin: center;
            transition: all .2s ease-in-out;
        }
    }

    .ao-header{
        .ao-logo{
            margin-right: 120px;

            @media (max-width: 992px){
                margin-right: 20px;
            }
        }

        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            gap: 120px;
            padding: 72px 0;

            @media (max-width: 992px){
                gap: 20px;
            }

            a{
                display: block;
                font-size: 24px;
                font-weight: 400;
                text-decoration: none;
                color: #5C4A20;
                translate: 0 0;
                transition: all .3s ease-in;
                padding: 8px 24px;
                border-radius: 8px;

                &.router-link-active{
                    background-color: #330707;
                    color: #FFFCF5;
                }

                &:hover{
                    translate: 0 -2px;
                    color: #949494;
                    transition: all .2s ease-out;
                }
            }
        }
    }
</style>