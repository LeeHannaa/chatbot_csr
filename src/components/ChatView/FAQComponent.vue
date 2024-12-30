<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { fetchChatbotResponse } from '../../api/chat_post'
import { useConversationStore } from '../../stores/conversation'

const router = useRouter()
const conversationStore = useConversationStore()

const faqData1 = ref([
  { id: 1, question: '디디하우스를 처음 이용하려고 합니다. 비용은 얼마인가요?' },
  { id: 2, question: '광고용 전화번호를 어떻게 변경하나요?' },
  { id: 3, question: '아파트 가격 수정은 어떻게 하나요?' },
  { id: 4, question: '매물의 광고 날짜를 어떻게 바꿀 수 있나요?' },
  { id: 5, question: '내 광고가 상단에 노출되려면 어떻게 해야 되나요?' },
])
const faqData2 = ref([
  { id: 6, question: '광고중이었던 내 매물이 비공개로 전환되어 있어요.' },
  { id: 7, question: '아파트 관리사무소 전화번호는 어디에 있나요?' },
  { id: 8, question: '광고에 사진을 등록했는데 바로 노출이 안되요.' },
  { id: 9, question: '현재 광고 개수를 어디서 확인하나요?' },
  { id: 10, question: '매물 묶어보기에서 매물순서는 어떻게 되나요?' },
])

function getToday() {
  const date = new Date()
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}.${month}.${day}`
}
const today = ref(getToday())

async function quest(question: string) {
  console.log('선택한 질문:', question)
  conversationStore.addMessage(question)
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
  <div class="box">
    <div class="left">
      <h1>자주 묻는 질문</h1>
      <button v-for="item in faqData1" :key="item.id" class="faq" @click="quest(item.question)">
        <div class="numbox">{{ item.id }}</div>
        <p>{{ item.question }}</p>
      </button>
    </div>
    <div class="right">
      <h6 style="margin-bottom: 20px; text-align: right">{{ today }}</h6>
      <button v-for="item in faqData2" :key="item.id" class="faq" @click="quest(item.question)">
        <div class="numbox">{{ item.id }}</div>
        <p>{{ item.question }}</p>
      </button>
    </div>
  </div>
</template>

<style>
.box {
  width: 70%;
  height: 210px;
  border: 1px solid #d7d7d7ff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.left,
.right {
  flex: 1; /* 1:1 비율 설정 */
  padding: 20px; /* 내부 여백 */
  display: flex; /* 내부 요소 정렬용 */
  flex-direction: column; /* 세로 방향으로 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
}
.box h1 {
  font-size: 12px;
  font-weight: bold;
  color: #ed4b4bff;
  margin-bottom: 20px;
}
.faq {
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;
  border: none;
  background: none;
  padding: none;
  margin: 0;
  margin-bottom: 5px;
  transition: background-color 0.3s ease;
}
.faq:hover {
  background-color: rgb(241, 252, 236);
}
.numbox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 24px;
  border: none;
  border-radius: 10px;
  background: #ebf6f2;
  color: #3e7036ff;
  text-align: center;
  margin-right: 6px;
}
</style>
