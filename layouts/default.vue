<template>
  <div>
    <AppHeader></AppHeader>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>

<script>
import { defineComponent } from '@vue/composition-api';
import AppHeader from '@/components/organisms/AppHeader';
export default defineComponent({
  components: {
    AppHeader,
  },
});
</script>
