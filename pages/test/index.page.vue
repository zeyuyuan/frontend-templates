<template>
  <div class="container">
    <h1 class="title">this page should be render in build time</h1>
    <div>{{ t('hello') }}</div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.container {
  max-width: 900px;
  margin: 0 auto;

  .title {
    font-size: 20px;
  }
}
</style>
