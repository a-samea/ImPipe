<script lang="ts" setup>
const props = defineProps<{
  connected?: boolean
  live?: boolean
}>()
const text = () => {
  if (!props.live) {
    return 'Offline'
  } else if (props.connected) {
    return 'Connected'
  } else {
    return 'Disconnected'
  }
}
</script>
<template>
  <span
    class="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full"
    :class="
      props.connected
        ? 'bg-green-200 text-green-950'
        : 'bg-red-200 text-red-950'
    "
  >
    <span class="relative flex h-2.5 w-2.5">
      <span
        v-if="live"
        class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
        :class="props.connected ? 'bg-green-600' : 'bg-red-600'"
      ></span>
      <span
        class="relative inline-flex rounded-full h-2.5 w-2.5"
        :class="{
          'bg-green-600': props.connected && props.live,
          'bg-red-600': !props.connected && props.live,
          'bg-gold-400': !props.live,
        }"
      ></span>
    </span>
    <span>{{ text() }}</span>
  </span>
</template>
