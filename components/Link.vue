<template>
  <a
    :class="{ active: $pageContext.urlPathname === $attrs.href }"
    :href="getPathWithLocale(href, targetLocale || locale)"
  >
    <slot />
  </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { getPathWithLocale } from '../i18n/control'

const { locale } = useI18n()

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
</script>

<style scoped>
a {
  padding: 3px 10px;
}
a.active {
  background-color: #eee;
}
</style>
