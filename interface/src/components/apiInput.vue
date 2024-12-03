<!-- Done -->
<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  modelValue: string
  error?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const focused = ref(false)
const showKey = ref(false)

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div>
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <span
          class="mi text-xl transition-colors duration-200"
          :class="{
            'text-rorange-50': !focused && !props.error,
            'text-rorange-500': focused && !props.error,
            'text-yorange-800': props.error,
          }"
          >key</span
        >
      </div>
      <input
        id="api-key"
        :type="showKey ? 'text' : 'password'"
        class="block w-full px-10 py-3 bg-shark-950 border rounded-lg font-mono text-cyan-50 focus:text-rorange-500 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-rorange-500/50 focus:border-rorange-500 transition-colors duration-200 placeholder-transparent border-rorange-50 peer shadow-sm shadow-cyan-950/50"
        @focus="focused = true"
        @blur="focused = false"
        placeholder="API Key"
        :class="{
          'border-yorange-800 focus:border-yorange-800 focus:ring-yorange-800/50, focus:text-yorange-800 text-yorange-800':
            props.error,
        }"
        @input="updateValue"
      />
      <label
        class="absolute text-sm duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-9 peer-[&:not(:placeholder-shown)]:bg-shark-950 peer-[&:not(:placeholder-shown)]:px-2 peer-focus:bg-shark-950 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 start-2.5 pointer-events-none transition-all peer"
        :class="{
          'text-rorange-50': !focused && !props.error,
          'text-rorange-500': focused && !props.error,
          'text-yorange-800': props.error,
        }"
        for="api-key"
        >API Key</label
      >
      <button
        type="button"
        @click="showKey = !showKey"
        class="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
      >
        <span
          class="mi text-xl transition-colors duration-200"
          :class="{
            'text-rorange-50': !focused && !props.error,
            'text-rorange-500': focused && !props.error,
            'text-yorange-800': props.error,
          }"
        >
          {{ showKey ? 'visibility' : 'visibility_off' }}
        </span>
      </button>
      <p
        v-if="props.error"
        class="absolute -top-1.5 right-2.5 text-sm text-yorange-800 font-sans flex items-center gap-1 transform scale-75 origin-top-right bg-shark-950 px-2 z-20"
      >
        <span class="mi text-lg">error</span>
        <span>Please input a valid API key</span>
      </p>
    </div>
  </div>
</template>
