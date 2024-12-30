<script setup lang="ts">
import FAQComponent from './FAQComponent.vue'
import { fetchChatbotResponse } from '../../api/chat_post'
import { useConversationStore } from '../../stores/conversation'
import { ref, onMounted } from 'vue'

// FAQ 컴포넌트 표시/숨기기 상태 관리
const isFAQVisible = ref(false)

// FAQ 보기/숨기기 버튼 클릭 시, isFAQVisible 값을 토글합니다.
function toggleFAQ() {
  isFAQVisible.value = !isFAQVisible.value
}

const conversationStore = useConversationStore()

async function quest(question: string) {
  console.log('선택한 질문:', question)
  try {
    const data = await fetchChatbotResponse(question)

    if (data) {
      console.log('성공적인 답변 확인 : ', data)
      conversationStore.addMessage(data)
    }
  } catch (err) {
    alert('실패!')
    console.log(err)
  }
}

onMounted(() => {
  const firstQuestion = conversationStore.conversation[0]
  if (firstQuestion) {
    quest(firstQuestion)
  }
})
</script>

<template>
  <div class="room">
    <div class="chatroom">
      <p v-for="(item, index) in conversationStore.formattedConversation" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
  <button class="faqBT" @click="toggleFAQ">
    {{ isFAQVisible ? 'FAQ 숨기기' : 'FAQ 보기' }}
  </button>
  <FAQComponent v-if="isFAQVisible" />
</template>

<style>
.room {
  width: 80%;
  margin-top: 20px;
  height: 400px;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  background: rgb(254, 254, 244);
}
.chatroom {
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: rgb(254, 254, 244);
}
.faqBT {
  width: 150px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background: #ebf6f2;
  color: rgb(43, 77, 37);
  cursor: pointer;
  margin-bottom: 10px;
}
</style>
