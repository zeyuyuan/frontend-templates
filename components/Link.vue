<template>
  <a
    :class="{ active: urlPathname === href }"
    :href="getPathWithLocale(href, targetLocale || locale)"
  >
    <slot />
  </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { getPathWithLocale } from '../i18n/control'
import { usePageContext } from '~/renderer/usePageContext'

defineProps({
  href: {
    type: String,
    required: true,
  },
  targetLocale: {
    type: String,
    required: false,
    default: '',
  },
})
const { urlPathname } = usePageContext()
const { locale } = useI18n()
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

a.active {
  color: green;
}
</style>
