import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useConversationStore = defineStore('conversation', () => {
  const conversation = ref<string[]>([])

  const formattedConversation = computed(() => {
    return conversation.value.map((msg, index) => {
      return `${index % 2 === 0 ? 'Q: ' : 'A: '}${msg}`
    })
  })

  // function getConversation() {
  //   const length = conversation.value.length
  //   if (length < 3) {
  //     return length > 0 ? conversation.value[length - 1] : ''
  //   }
  //   const input =
  //     conversation.value[length - 3] +
  //     conversation.value[length - 2] +
  //     conversation.value[length - 1]
  //   return input
  // }

  function addMessage(message: string) {
    conversation.value.push(message)
  }

  function clearConversation() {
    conversation.value = []
  }

  return {
    conversation,
    formattedConversation,
    addMessage,
    clearConversation,
  }
})
