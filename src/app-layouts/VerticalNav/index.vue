<template>
  <div class="layout flex">
    <Sidebar />
    <MainContainer class="grow">
      <slot></slot>
    </MainContainer>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './Sidebar.vue';
import MainContainer from './MainContainer.vue';

defineOptions({
  name: 'VerticalNav',
});
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  perspective: 1000px;
}
</style>
