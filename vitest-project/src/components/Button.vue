<!-- src/components/Button.vue -->
<template>
  <button class="btn primary">{{ label }}!</button>  <!-- Added '!' and new class -->
</template>

<script setup>
defineProps({ label: String });
</script>