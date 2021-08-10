<template>
  <div>
    <h1>this page should prerender with all languages</h1>
    <p></p>
  </div>
  <div>{{ t('hello') }}</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
