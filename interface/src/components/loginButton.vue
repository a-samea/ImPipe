<!--Done-->
<script lang="ts" setup>
const props = defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    class="w-5/12 py-3 px-2 rounded-lg flex items-center justify-start bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-bgray-50 hover:text-blue-50 shadow-sm shadow-bgray-950 disabled:shadow-none disabled:transform-none disabled:cursor-wait disabled:opacity-50 disabled:active:transform-none focus:outline-none focus:ring-2 focus:ring-blue-600 hover:focus:ring-blue-700"
    type="submit"
    :disabled="props.loading || false"
    @click="!props.loading && emit('click')"
  >
    <span v-if="!props.loading" class="mi text-3xl transition-opacity">login</span>
    <span v-else class="mi text-3xl animate-spin">progress_activity</span>
    <span class="flex-grow align-baseline text-center font-normal text-lg">Login</span>
  </button>
</template>
