<template>
  <div>
    <h1>this page should prerender with all languages</h1>
    <div>{{ $pageContext.locale }}</div>
    <div>{{ t('hello') }}</div>
    <button @click="switchLocale('zh')">switch to zh</button>
    <button @click="switchLocale('en')">switch to en</button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { switchLocale } from '../../i18n/control'

const { t } = useI18n()
</script>
