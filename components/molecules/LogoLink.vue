<template>
  <nuxt-link to="/">
    <Logo width="100rem"></Logo>
  </nuxt-link>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Logo from '@/components/atoms/Logo';
export default defineComponent({
  components: {
    Logo,
  },
});
</script>

<style></style>
