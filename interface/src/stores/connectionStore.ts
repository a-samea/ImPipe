import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// TODO: incomplete
export const useConnectionStore = defineStore('connection', () => {
  const IP_REGEX = /^(\d{1,3}\.){3}\d{1,3}$/
  const API_KEY_REGEX = /^[a-f0-9]{32}$/
  const IP_INPUT = ref('')
  const API_KEY_INPUT = ref('')
  const isIPInvalid = ref(false)
  const isApiKeyInvalid = ref(false)
  const isConnected = ref(true)
  const isLoading = ref(false)
  const isWaiting = ref(false)


  const serverIp = ref('')

  const apiKey = ref('')


  const websocket = ref<WebSocket | null>(null)
  const connectionError = ref<string | null>(null)
  const heartbeatInterval = ref<number | null>(null)

  // Connection method
  function connect() {
    // Validate inputs first
    if (!serverIp.value || !apiKey.value) {
      connectionError.value = 'IP and API key are required'
      return
    }

    // Construct WebSocket URL with authentication
    const wsUrl = `ws://${serverIp.value}/api?key=${apiKey.value}`

    try {
      // Create WebSocket connection
      websocket.value = new WebSocket(wsUrl)

      // Connection event handlers
      websocket.value.onopen = () => {
        isConnected.value = true
        connectionError.value = null
        startHeartbeat()
      }

      websocket.value.onclose = () => {
        isConnected.value = false
        stopHeartbeat()
      }

      websocket.value.onerror = () => {
        connectionError.value = 'Connection failed'
        isConnected.value = false
      }
    } catch  {
      connectionError.value = 'Failed to establish connection'
    }
  }

  // Heartbeat mechanism
  function startHeartbeat() {
    // Send periodic ping to confirm connection
    heartbeatInterval.value = setInterval(() => {
      if (websocket.value?.readyState === WebSocket.OPEN) {
        websocket.value.send(JSON.stringify({ type: 'heartbeat' }))
      }
    }, 30000) // Every 30 seconds
  }

  function stopHeartbeat() {
    if (heartbeatInterval.value) {
      clearInterval(heartbeatInterval.value)
      heartbeatInterval.value = null
    }
  }

  function message() {
    console.log('message')
  }

  // Disconnect method
  function disconnect() {
    if (websocket.value) {
      websocket.value.close()
      websocket.value = null
    }
    stopHeartbeat()
    isConnected.value = false
  }

  // Computed properties for easy access
  const connectionStatus = computed(() => ({
    connected: isConnected.value,
    error: connectionError.value
  }))

  return {
    IP_INPUT,
    API_KEY_INPUT,
    isIPInvalid,
    isApiKeyInvalid,
    isConnected,
    isLoading,
    isWaiting,



    // Reactive state
    serverIp,
    apiKey,


    // Methods
    connect,
    disconnect,
    message,

    // Computed
    connectionStatus
  }
})
