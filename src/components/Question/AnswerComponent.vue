<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { fetchQuestionResponse } from '../../api/chat_post'

const isLoading = ref(false)
const answer = ref('')

function formatAsHtml(text: string) {
  const urlRegex = /(https?:\/\/[^\s\)]+)(?=\s|\)|$)/g // URL 뒤에 공백, 괄호 또는 끝이 올 때만 매칭

  return text.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
  })
}

const props = defineProps<{
  questionId: string
  question: string
  isOpenAnswerBox: boolean
}>()

async function quest(questionId: string, question: string) {
  isLoading.value = true
  answer.value = ''
  try {
    const data = await fetchQuestionResponse(questionId, question)
    if (data) {
      console.log('성공적인 답변 확인 : ', data)
      answer.value = data
    }
  } catch (err) {
    alert('실패!')
    console.log(err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  if (props.isOpenAnswerBox && props.question) {
    console.log(`초기 상태에서 quest 호출: ${props.question}`)
    quest(props.questionId, props.question)
  }
})
</script>

<template>
  <div class="answerBox">
    <div class="textBox" v-if="isLoading">
      <p>'{{ question }}'에 대한 답변을 준비중입니다.</p>
      <img
        src="../../assets/loding.gif"
        style="width: 50px; height: 50px; margin-top: 20px; margin-left: 45%"
      />
    </div>
    <div class="textBox" v-else v-html="formatAsHtml(answer)"></div>
  </div>
</template>

<style>
.answerBox {
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 380px;
  height: 160px;
  padding: 12px;
  font-size: 12px;
  border: none;
  background: #fbffe6ff;
  box-shadow: 0 3px 10px rgba(102, 102, 102, 0.2);
  border-radius: 30px;
  z-index: 10;
  word-wrap: break-word;
}
.textBox {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
}
</style>
