<template>
  <h1>This page should render in request-time</h1>
  <p>news id {{ props.id }}</p>
  <div>{{ mock }}</div>
</template>

<script setup>
import { useAttrs } from 'vue'

const props = defineProps({
  id: String,
})
const { mock } = useAttrs()
</script>
