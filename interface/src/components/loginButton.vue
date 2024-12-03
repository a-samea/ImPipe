<!--Done-->
<script lang="ts" setup>
import { defineProps } from 'vue'
import { defineEmits } from 'vue'

const props = defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    class="w-5/12 py-3 px-2 rounded-lg flex items-center justify-start bg-rorange-600 hover:bg-yorange-700 active:bg-yorange-600 text-rorange-50 hover:text-white shadow-sm shadow-yorange-950 disabled:shadow-none disabled:cursor-wait disabled:opacity-50 disabled:active:transform-none disabled:hover:bg-rorange-600 focus:outline-none focus:ring-2 focus:ring-rorange-500 hover:focus:ring-yorange-600"
    type="submit"
    :disabled="props.loading || false"
    @click="!props.loading && emit('click')"
  >
    <span v-if="!props.loading" class="mi text-3xl transition-opacity">login</span>
    <span v-else class="mi text-3xl animate-spin">progress_activity</span>
    <span class="flex-grow align-baseline text-center font-sans text-md">Login</span>
  </button>
</template>
