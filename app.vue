<script setup>
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
.layout-leave-active
.layout-leave-to{

    transition: all 1s;

    /* .ao-content-home{
        animation: hidden .6s forwards;
        transition: all 1s;
    } */

    /* .ao-content{
        animation: pageup .6s forwards;
        transition: all 1s;
    } */
}

.layout-enter-active,
.layout-enter-from{

    transition: all 1s;

    /* .ao-content-home{
        animation: show .8s forwards;
        transition: all 1s;
    } */
    
    /* .ao-content{
        animation: pagedown .6s forwards;
        transition: all 1s;
    }    */
}

@keyframes pageup {
    from{
        opacity: 1;
        translate: 0 0vh;
    }

    to{
        opacity: 0;
        translate: 0 100vh;
    }   
}

@keyframes pagedown {
    from{
        opacity: 1;
        translate: 0 100vh;
    }

    to{
        translate: 0 0vh;
    }   
}

@keyframes show {
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }   
}

@keyframes hidden {
    from{
        opacity: 1;
    }

    to{
        opacity: 0;
    }   
}
</style>
