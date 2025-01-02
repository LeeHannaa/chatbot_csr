<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useConversationStore } from '../../stores/conversation'

const conversationStore = useConversationStore()
const chatContainer = ref<HTMLDivElement | null>(null)

const handleScroll = () => {
  if (!chatContainer.value) return
}

onMounted(() => {
  if (chatContainer.value) {
    chatContainer.value.addEventListener('scroll', handleScroll)
  }
})

onBeforeUnmount(() => {
  if (chatContainer.value) {
    chatContainer.value.removeEventListener('scroll', handleScroll)
  }
})
watch(
  () => conversationStore.formattedConversation,
  () => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  },
)
defineProps<{
  toggleFAQ: () => void
  isFAQVisible: boolean
}>()
</script>

<template>
  <div class="room">
    <div class="chatroom" ref="chatContainer">
      <p v-for="(item, index) in conversationStore.formattedConversation" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<style>
.room {
  width: 98%;
  height: 88%;
  padding: 30px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  background: rgb(254, 254, 244);
}
.chatroom {
  width: 100%;
  max-height: 98%;
  overflow-y: auto;
  background: rgb(254, 254, 244);
}
</style>
