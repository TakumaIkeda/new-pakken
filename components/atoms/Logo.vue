<template>
  <img src="@/assets/logo.png" :width="width" alt="ロゴ" />
</template>
<script>
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  props: {
    width: {
      type: String,
      required: false,
    },
  },
});
</script>
<style lang="scss"></style>
