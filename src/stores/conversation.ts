import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useConversationStore = defineStore('conversation', () => {
  const conversation = ref<string[]>([])

  const formattedConversation = computed(() => {
    return conversation.value.map((msg, index) => {
      return `${index % 2 === 0 ? 'Q: ' : 'A: '}${msg}`
    })
  })

  function addMessage(message: string) {
    conversation.value.push(message)
  }

  return {
    conversation,
    formattedConversation,
    addMessage,
  }
})
