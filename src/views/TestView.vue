<script setup lang="ts">
import { ref } from 'vue'
import MoveChat from '../components/MoveChat.vue'
import AnswerComponent from '../components/Question/AnswerComponent.vue'

const isOpenAnswerBox = ref(false)
const question = ref('')
function onClickQuestion(q: string) {
  console.log(q)
  question.value = q
  isOpenAnswerBox.value = !isOpenAnswerBox.value
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
          @click="onClickQuestion('매물인쇄는 어떻게 하나요?')"
        />
        <AnswerComponent
          :question="question"
          :isOpenAnswerBox="isOpenAnswerBox"
          v-if="isOpenAnswerBox"
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
