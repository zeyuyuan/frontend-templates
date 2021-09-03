<template>
  <div>
    <h1>this page should prerender with all languages</h1>
    <div>{{ $pageContext.locale }}</div>
    <div>{{ t('hello') }}</div>
    <button @click="switchHandler('zh')">switch to zh</button>
    <button @click="switchHandler('en')">switch to en</button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { switchHandler } from '../../i18n/control'

const { t } = useI18n()
</script>
