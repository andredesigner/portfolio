<script setup>

</script>

<template>
    <div class="portfolio">
        <!-- <div class="ao-cursor"></div> -->
        <AoHeader></AoHeader>
        <slot />
        <AoFooter></AoFooter>
    </div>
  </template>
  
  <style scoped lang="scss">
    .ao-cursor{
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: #FFB607;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      pointer-events: none;
      translate: -50% -50%;
      transform-origin: 100% 100%;
      transition-property: transform;
      z-index: 999;
      cursor: none;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: width .3s ease-out, height .3s ease-out;

      @media (max-width: 992px) {
          display: none;
      }

      &.active-link{
          width: 52px;
          height: 52px;
          transition: width .2s ease-in, height .2s ease-in;
          // transition: width .3s ease-out;
      }
    }
  </style>