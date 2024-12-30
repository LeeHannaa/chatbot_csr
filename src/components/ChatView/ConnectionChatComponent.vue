<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { fetchChatbotResponse } from '../../api/chat_post'
import { useConversationStore } from '../../stores/conversation'

const conversationStore = useConversationStore()
const router = useRouter()
const prompt = ref('') // 서버에 넘겨줄 질문

async function quest(question: string) {
  console.log('선택한 질문:', question)
  conversationStore.addMessage(question)
  prompt.value = ''
  if (conversationStore.conversation.length === 1) {
    router.push({ name: 'chat2' })
  } else {
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
}
</script>

<template>
  <div class="qna">
    <input
      class="question"
      v-model="prompt"
      placeholder="디디하우스에 대해서 무엇이든 물어보세요!"
    />
    <button class="qnabutton" type="button" @click="quest(prompt)">🔍</button>
  </div>
</template>

<style>
.qna {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.question {
  width: 55%;
  height: 50px;
  margin-right: 20px;
  font-size: 12px;
  text-align: center;
  border: none;
  background: #fdf7edff;
  border-radius: 30px;
}

.qnabutton {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: #fdf7edff;
  cursor: pointer;
}
</style>
