<script setup lang="ts">
import { ref } from 'vue'
import { fetchChatbotResponse } from '../../api/chat_post'
import { useConversationStore } from '../../stores/conversation'

const conversationStore = useConversationStore()
const prompt = ref('') // 서버에 넘겨줄 질문

async function quest(question: string) {
  if (!question.trim()) {
    alert('질문을 입력해주세요!')
    console.log('질문이 입력되지 않았습니다.')
    return
  }
  console.log('선택한 질문:', question)
  conversationStore.addMessage(question)
  prompt.value = ''
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
function reload() {
  conversationStore.clearConversation()
}
defineProps<{
  toggleFAQ: () => void
  isFAQVisible: boolean
}>()
</script>

<template>
  <div class="qna">
    <input
      class="question"
      v-model="prompt"
      placeholder="디디하우스에 대해서 무엇이든 물어보세요!"
      @keyup.enter="prompt.trim() && quest(prompt)"
    />
    <button class="qnabutton" type="button" @click="quest(prompt)">🔍</button>
    <button class="faqBT" @click="toggleFAQ">
      {{ isFAQVisible ? 'FAQ' : 'FAQ' }}
    </button>
    <button class="reloadbutton" type="button" @click="reload">
      <img src="../../assets/refresh.svg" style="width: 30px; height: 30px" />
    </button>
  </div>
</template>

<style>
.qna {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.question {
  width: 70%;
  height: 50px;
  margin-right: 5px;
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
  margin-right: 8px;
}
.faqBT {
  width: 45px;
  height: 40px;
  border-radius: 15px;
  border: none;
  background: #ebf6f2;
  color: rgb(43, 77, 37);
  cursor: pointer;
  font-size: 12px;
  margin-right: 8px;
}
.reloadbutton {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: #ebf6f2;
  color: rgb(43, 77, 37);
  cursor: pointer;
  font-size: 12px;
}
</style>
