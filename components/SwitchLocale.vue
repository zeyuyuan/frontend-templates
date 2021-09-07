<template>
  <ul>
    <li v-for="item in SUPPORTED_LANGUAGES" :key="item.locale">
      <a :href="getPathWithLocale($pageContext.urlPathname, item.locale)">
        {{ `switch to ${item.locale}` }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import { getPathWithLocale } from '../i18n/control'
import { SUPPORTED_LANGUAGES } from '../i18n/list'
</script>
