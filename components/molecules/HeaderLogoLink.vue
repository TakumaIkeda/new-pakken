<template>
  <nuxt-link>
    <Logo width="100rem" />
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Logo } from '@/components/atoms/Logo.vue';

@Component({
  components: { Logo },
})
export class HeaderLogoLink extends Vue {}
</script>

<style lang="scss"></style>
