<template>
  <img src="@/assets/images.logo.png" :width="width" alt="ロゴ" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export class Logo extends Vue {
  @Prop({ default: '100rem' }) readonly width!: string;
}
</script>

<style lang="scss"></style>
