<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { nextTick } from 'vue'
import { useConversationStore } from '../../stores/conversation'

const conversationStore = useConversationStore()
const chatContainer = ref<HTMLDivElement | null>(null)

function formatAsHtml(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  return text.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
  })
}

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
  async () => {
    if (chatContainer.value !== null) {
      await nextTick()
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
      <div
        v-for="(item, index) in conversationStore.formattedConversation"
        :key="index"
        :class="{ user: item.startsWith('Q:'), ai: item.startsWith('A:') }"
      >
        <!-- AI 메시지인 경우 링크 처리 -->
        <span v-if="item.startsWith('A:')" v-html="formatAsHtml(item)"></span>
        <!-- 사용자 메시지인 경우 일반 텍스트 출력 -->
        <span v-else>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.room {
  width: 98%;
  height: 88%;
  padding: 20px;
  padding-right: 5px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  background: rgb(255, 244, 233);
  border-radius: 10px;
}
.chatroom {
  width: 100%;
  max-height: 98%;
  overflow-y: auto;
  background: rgb(255, 244, 233);
  border-radius: 10px;
}
.chatroom a {
  color: #3498db; /* 링크 색상 */
  text-decoration: underline;
  cursor: pointer;
}

.chatroom a:hover {
  color: #2c80b4; /* 마우스 오버 시 색상 */
}
.user {
  width: 80%;
  background-color: rgb(177, 177, 255);
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: 5px;
}
.ai {
  width: 80%;
  background-color: rgb(255, 182, 182);
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}
</style>
