<template>
  <div>
    <h1>this page should prerender with all languages</h1>
    <div>{{ $pageContext.locale }}</div>
    <div>{{ t('hello') }}</div>
    <SwitchLocale />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import SwitchLocale from '../../components/SwitchLocale.vue'

const { t } = useI18n()
</script>
