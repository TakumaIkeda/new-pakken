<template>
  <header>
    <div class="header">
      <LogoLink></LogoLink>
    </div>
  </header>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import LogoLink from '@/components/molecules/LogoLink';
export default defineComponent({
  components: {
    LogoLink,
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
header {
  background-color: $primary;
  padding: 1rem;
  width: 100%;
}

.header {
  display: inline-flex;
}
</style>
