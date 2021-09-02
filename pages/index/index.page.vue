<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
  <div>{{ $pageContext.locale }}</div>
</template>

<script setup>
import Counter from '../../components/Counter.vue'
</script>
