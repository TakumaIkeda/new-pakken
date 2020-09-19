<template>
  <header class="header"></header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export class AppHeader extends Vue {}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.header {
  height: 4rem;
  background-color: $primary;
  display: flex;
}
</style>
