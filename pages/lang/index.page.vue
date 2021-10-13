<template>
  <div>
    <h1>this page should prerender with all languages</h1>
    <div>{{ locale }}</div>
    <div class="hello">{{ t('hello') }}</div>
    <SwitchLocale />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import SwitchLocale from '~/components/SwitchLocale.vue'
import { usePageContext } from '~/renderer/usePageContext'

const { t } = useI18n()
const { locale } = usePageContext()
</script>

<style lang="scss">
.hello {
  display: inline-block;
  background: $bg;
}
</style>
