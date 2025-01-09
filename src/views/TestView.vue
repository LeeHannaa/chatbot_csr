<script setup lang="ts">
import { ref } from 'vue'
import MoveChat from '../components/MoveChat.vue'
import AnswerComponent from '../components/Question/AnswerComponent.vue'
import { Question, QuestionData } from '../stores/questionData'

const openQuestionId = ref<string | null>(null) // 현재 열려있는 질문의 id를 저장

function onClickQuestion(questionId: string) {
  if (openQuestionId.value === questionId) {
    openQuestionId.value = null
  } else {
    openQuestionId.value = questionId
  }
}
function getQuestionText(questionId: string) {
  const question = QuestionData.find((q: Question) => q.id === questionId)
  return question ? question.text : ''
}
</script>

<template>
  <main>
    <div class="test">
      <h1>그냥 테스트 페이지</h1>
      <div>
        인쇄
        <img
          src="../assets/question.png"
          style="width: 20px; height: 20px; cursor: pointer"
          @click="onClickQuestion('print')"
        />
        <AnswerComponent
          :question="getQuestionText('print')"
          :isOpenAnswerBox="openQuestionId === 'print'"
          v-if="openQuestionId === 'print'"
        />
      </div>
      <img src="../assets/openChat.png" style="width: 100%" />
    </div>
    <MoveChat />
  </main>
</template>

<style>
.test {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
