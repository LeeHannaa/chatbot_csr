<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useConversationStore } from '../../stores/conversation'
import InputChatComponent from '../ChatView/InputChatComponent.vue'

const chatContainer = ref<HTMLElement | null>(null)
onMounted(() => {
  // 컴포넌트가 마운트되었을 때 스크롤을 맨 아래로 설정
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
})
// 대화 내용이 업데이트될 때마다 스크롤을 아래로 이동
watch(
  () => conversationStore.formattedConversation,
  () => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  },
)
const conversationStore = useConversationStore()
defineProps<{
  toggleFAQ: () => void
  isFAQVisible: boolean
}>()
</script>

<template>
  <div class="room">
    <div class="chatroom">
      <p v-for="(item, index) in conversationStore.formattedConversation" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
  <InputChatComponent :isFAQVisible="isFAQVisible" :toggleFAQ="toggleFAQ" />
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
  max-height: 500px;
  overflow-y: auto;
  background: rgb(254, 254, 244);
}
</style>
