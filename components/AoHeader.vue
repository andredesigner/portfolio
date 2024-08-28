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
                        <div v-on:click="toggleActive" @click="isActive=!isActive" class="view-social-media"></div>
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
        width: 52px;
        height: 52px;
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2252%22%20height%3D%2252%22%20viewBox%3D%220%200%2052%2052%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%2252%22%20height%3D%2252%22%20rx%3D%2226%22%20fill%3D%22%23FFB607%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M28%2018C28%2016.8954%2027.1046%2016%2026%2016V16C24.8954%2016%2024%2016.8954%2024%2018V20C24%2022.2091%2022.2091%2024%2020%2024L18%2024C16.8954%2024%2016%2024.8954%2016%2026V26C16%2027.1046%2016.8954%2028%2018%2028H20C22.2091%2028%2024%2029.7909%2024%2032V34C24%2035.1046%2024.8954%2036%2026%2036V36C27.1046%2036%2028%2035.1046%2028%2034V32C28%2029.7909%2029.7909%2028%2032%2028H34C35.1046%2028%2036%2027.1046%2036%2026V26C36%2024.8954%2035.1046%2024%2034%2024L32%2024C29.7909%2024%2028%2022.2091%2028%2020V18Z%22%20fill%3D%22%235B4A20%22%2F%3E%3C%2Fsvg%3E");
        padding: 0;
        margin: 0;
        transition: all 0.2s ease-in-out;
        position: fixed;
        bottom: 40px;
        right: 40px;
        display: block;

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