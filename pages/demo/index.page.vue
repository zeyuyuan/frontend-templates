<template>
  <h1>This page should render in request-time</h1>
  <div>{{ mock }}</div>
  <div>{{ t('hello') }}</div>
</template>

<script setup>
import { useAttrs } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { mock } = useAttrs()
</script>
