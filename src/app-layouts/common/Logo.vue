<template>
  <div class="logo" v-if="isDark && !mini">
    <img src="@/assets/images/logo.png?url" />
    <span style="margin-left: 3px; font-size: 28px">CPIN</span>
  </div>
  <div class="logo" v-else-if="isLight && !mini">
    <img src="@/assets/images/logo.png?url" />
    <span style="margin-left: 5px; font-size: 28px; font-weight: bold">CPIN</span>
  </div>
  <div class="logo" v-else-if="isDark && mini">
    <img src="@/assets/images/logo.png?url" />
    <span style="margin-left: 3px; font-size: 28px">CPIN</span>
  </div>
  <div class="logo" v-else-if="isLight && mini">
    <img src="@/assets/images/logo.png?url" />
    <span style="margin-left: 3px; font-size: 28px">CPIN</span>
  </div>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/stores/theme';
import { computed, toRefs } from 'vue';

defineOptions({
  name: 'Logo',
});

const props = withDefaults(
  defineProps<{
    mini: boolean;
    dark?: boolean;
  }>(),
  { dark: undefined },
);
const { mini, dark } = toRefs(props);

const themeStore = useThemeStore();

const isDark = computed<boolean>(() => dark.value ?? themeStore.isThemeDark);
const isLight = computed<boolean>(() => !dark.value || themeStore.isThemeLight);
</script>

<style lang="scss" scoped>
.logo {
  height: 100%;
  display: flex;
  align-items: center;

  img {
    max-height: 32px;
    display: block;
    height: 100%;
  }

  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity var(--sidebar-anim-ease) var(--sidebar-anim-duration);
  }

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
  }
}
</style>
