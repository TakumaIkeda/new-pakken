<template>
  <div>
    <header class="header">
      <nuxt-link to="/">
        <img src="@/assets/images/logo.png" alt="ロゴ" class="header-logo" />
      </nuxt-link>
    </header>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.header {
  padding: 1rem;
  background-color: $primary;
}

.header-logo {
  width: 5rem;
}
</style>

<script>
export default {};
</script>
