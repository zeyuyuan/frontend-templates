<template>
  <h1>This page should render in request-time</h1>
  <p>news id {{ props.id }}</p>
  <div>{{ mock }}</div>
  <div>{{ locale }}</div>
</template>

<script setup>
import { useAttrs } from 'vue'
import { usePageContext } from '~/renderer/usePageContext'

const props = defineProps({
  id: String,
})
const { mock } = useAttrs()
const { locale } = usePageContext()
</script>
