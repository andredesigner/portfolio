<script setup>
    import { onMounted } from "vue";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    const links = [
        {href: 'https://www.linkedin.com/in/andreoliveiradesigner/', text: 'Linkedin'},
        {href: 'https://www.dropbox.com/scl/fi/hb1syvsmrbnknvf3fb7x7/andre-oliveira-curriculo.pdf?rlkey=sda5kzkh6d20gf1clm63j68my&st=92yk43ks&dl=0', text: 'CV'},
        {href: 'https://dribbble.com/andreoliveiradesigner', text: 'Dribbble'},
        {href: 'https://www.instagram.com/andreoliveira.des.br/', text: 'Instragram'},
        {href: 'https://github.com/andredesigner?tab=repositories', text: 'Github'}
    ]

    onMounted(() => {
        console.log("teste");
    });
</script>

<template>
    <div class="ao-link anchor">
        <a href="#meet-andre">
            <span>Conheça o André Oliveira</span>
            <svg v-for="n in 8" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 0H0.75V2H2.75V4H4.75V6H6.75V8H4.75V10H2.75V12H0.75V14H2.75V12H4.75V10H6.75V8H8.75V6H6.75V4H4.75V2H2.75V0Z" fill="#3E5FAA"/>
            </svg>            
        </a>
    </div>
</template>


<style lang="scss">
    .ao-link{
        margin-top: 40px;
        margin-bottom: 80px;

        a{
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-decoration: none;
        }
        
        &.anchor{

            svg{
                rotate: 90deg;
            }
        }
    }
</style>