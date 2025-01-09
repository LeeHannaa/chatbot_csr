<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MoveChat from '../components/MoveChat.vue'
import AnswerComponent from '../components/Question/AnswerComponent.vue'
import { Question, QuestionData } from '../stores/questionData'

const router = useRouter()
function moveTest() {
  router.push('/test')
}

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
    <button class="testBT" @click="moveTest">test 페이지 이동</button>
    <MoveChat />
    <div style="margin-left: 50%">
      📷 📝 ❤️
      <img
        src="../assets/question.png"
        style="width: 20px; height: 20px; cursor: pointer"
        @click="onClickQuestion('icon')"
      />
      <AnswerComponent
        :question="getQuestionText('icon')"
        :isOpenAnswerBox="openQuestionId === 'icon'"
        v-if="openQuestionId === 'icon'"
      />
    </div>

    <div style="margin-left: 30%">
      매물 등록하기
      <img
        src="../assets/question.png"
        style="width: 20px; height: 20px; cursor: pointer"
        @click="onClickQuestion('property')"
      />
      <AnswerComponent
        :question="getQuestionText('property')"
        :isOpenAnswerBox="openQuestionId === 'property'"
        v-if="openQuestionId === 'property'"
      />
    </div>
  </main>
</template>

<style>
.testBT {
  width: 160px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background: #17ffaa;
  color: rgb(43, 77, 37);
  cursor: pointer;
}
</style>
