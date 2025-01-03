<script setup lang="ts">
import { ref } from 'vue'
import { useConversationStore } from '../../stores/conversation'

const conversationStore = useConversationStore()

interface FAQ {
  id: number
  question: string
  answer: string
}

const faqData1 = ref<FAQ[]>([
  {
    id: 1,
    question: '아파트 가격 수정하는 방법',
    answer:
      '먼저 매물 수정 화면으로 들어가세요. 그 다음으로 상단에 매물수정 탭을 선택 해주세요. 마지막으로 가격정보에서 기존 금액을 모두 지우고 변경할 금액을 입력 후 저장을 눌러주세요. 문제가 발생했을 경우 고객센터(054-254-0732)에 문의주시면 친절하게 도와드리겠습니다. https://kface.notion.site/Q-bbfe3b3fe51841f7a88c0cf4a174aa4f 참고해보세요!',
  },
  {
    id: 2,
    question: '여러개 매물을 오늘날짜로 수정하는 방법',
    answer:
      '먼저 디디하우스 웹사이트에 접속하셔서 좌측메뉴의 등록단지 전체를 선택해주세요. 다음으로 오늘날짜로 광고할 매물을 왼쪽 체크박스에서 선택해주세요. 매물 선택이 끝나셨다면 화면 하단의 [오늘 날짜로 광고]버튼을 클릭해주세요. 완료되셨다면 매물 날짜가 오늘로 수정된 것을 확인하실 수 있습니다. 어려움이 있으시면 고객센터(054-254-0732)에 문의 부탁드립니다. https://kface.notion.site/Q-3b54b6395d3c47f88f02ec7f36d14277',
  },
  {
    id: 3,
    question: '광고가 상단에 노출되는 방법 (조건)',
    answer:
      '광고 노출 우선순위는 1순위로 추천매물 설정된 매물, 2순위는 실매물인증 처리된 매물, 3순위로는 일반매물입니다. 추천매물과 실매물인증으로 설정하면 상단에 광고 노출 될 수 있습니다. 이때, 조건이 동일한 경우 등록일 기준으로 로테이션 됩니다. 추가로 매물 묶어보기일 때 광고노출 우선순위는 1순위는 층을 공개로 설정한 매물, 2순위는 추천 매물, 3순위는 실매물인증 처리된 매물, 4순위로는 일반매물 입니다. 광고 노출에 대하여 더 궁금한 사항이 있으신 경우 고객센터(054-254-0732)에 문의주시면 친절하게 답변드리겠습니다. https://kface.notion.site/Q-352c6d55b7304c53988ddb46007600cb',
  },
  {
    id: 4,
    question: '거래 완료된 매물과 동일한 광고를 정리하는 방법',
    answer:
      '디디하우스 사이트에서 거래완료 요청을 해주시면 관리자가 확인하여 정리해드립니다. 거래완료 요청 방법은 다음과 같습니다. 1. 거래완료 처리하고 싶은 광고를 클릭하여 상세내용을 펼쳐주세요. 2. 펼쳐진 광고의 우측 하단에 거래완료 버튼을 눌러주세요. 3. 거래완료 신청창에서 거래가 완료된 호수를 입력 합니다. 4. 동일 호수 전체 거래완료 요청에 체크하고 매도인 연락처를 기재 후 확인을 눌러주세요. 거래완료 요청 중 어려움이 있으신 경우 고객센터(054-254-0732)에 문의주시면 친절하게 도와드리겠습니다. https://kface.notion.site/Q-4b89a43a9b184e35a457f8551305c9bb',
  },
  {
    id: 5,
    question: '계약 취소 된 경우, 거래 완료된 광고를 복구하는 방법',
    answer:
      '계약이 취소되었을 경우, 거래완료 처리된 광고를 다시 복구할 수 있습니다. 매물복사 기능을 이용하시면 간편하게 재등록이 가능합니다. 매물복사 기능은 기존에 등록했던 광고내용이 그대로 매물등록창에 복사됩니다. 더 궁금한 사항이 있으신 경우 고객센터(054-254-0732)에 문의주시면 친절하게 답변드리겠습니다. https://kface.notion.site/Q-adced0e4d93f4bcaa81a5dc5d7b9d4d5',
  },
])
const faqData2 = ref<FAQ[]>([
  {
    id: 6,
    question: '사진을 등록시, 광고 노출이 바로 안되는 경우',
    answer:
      '관리자가 직접 매물과 관련된 사진인지 판별하기 때문에 바로 노출이 안되는 경우가 있습니다. 적합한 사진일 경우, 사진등록한 다음날 노출처리 됩니다. 적합한 사진의 기준은 내부모습과 전망이 보이는 사진이며, 부적합한 사진으로는 아파트 외관이나 부동산 상호 관련 사진에 해당합니다. 이와 관련하여 더 궁금한 사항이 있으신 경우 고객센터(054-254-0732)에 문의주시면 자세히 안내해드리겠습니다. https://kface.notion.site/Q-ae1a8002ebcf4398a0719e93bd3f4861',
  },
  {
    id: 7,
    question: '아파트 광고를 추가할 때 발생하는 비용',
    answer:
      '아파트 광고 비용은 다음과 같습니다. 일4개/총30개(추천1개) 단위로 월65,000원 입니다. 기본: 8/60(추천2) - 13만원, 추가1): 12/90(추천3) - 19.5만원, 추가2): 16/120(추천4) - 26만원. 단, 주택/상업/토지는 광고 개수를 추가할 수 없습니다. 광고 개수 조정은 고객센터(054-254-0732)로 문의해주시면 친절하게 도와드리겠습니다. https://kface.notion.site/Q-2644fbc2a92f46a4b531077b61d15a7a',
  },
  {
    id: 8,
    question: '중개사무소 정보를 변경하는 방법',
    answer:
      '중개사무소 정보를 변경하길 원하시는 경우는 중개사무소등록증, 사업자등록증, 대표이미지(간판전면 or 대표자 얼굴) 서류의 사진을 담당자(010-6552-9075)에게 보내주시면 관리자가 변경해드립니다.',
  },
  {
    id: 9,
    question: '광고중이었던 내 매물이 비공개로 전환된 경우',
    answer:
      '디디하우스 정책에 따라 광고 등록 후 45일이 경과한 매물은 자동으로 비공개 전환됩니다. 광고 표시일이 오래된 매물은 한번씩 날짜를 업데이트 해주셔야 비공개로 전환되지 않습니다. 추가적인 문의사항이 있으신 경우 고객센터(054-254-0732)에 문의주시면 친절하게 답변드리겠습니다.',
  },
  {
    id: 10,
    question: '광고용 전화번호를 변경하는 방법',
    answer:
      '광고 노출 전화번호는 구청에 등록된 개업 공인중개사의 연락처(휴대폰,유선)만 가능합니다. 광고용 전화번호를 변경은 고객센터(054-254-0732)로 문의해주시면 도와드리겠습니다.',
  },
])

// function getToday() {
//   const date = new Date()
//   const year = date.getFullYear()
//   const month = (date.getMonth() + 1).toString().padStart(2, '0')
//   const day = date.getDate().toString().padStart(2, '0')

//   return `${year}.${month}.${day}`
// }
// const today = ref(getToday())

function quest(item: FAQ) {
  console.log('선택한 질문:', item.question)
  conversationStore.addMessage(item.question)
  setTimeout(() => {
    conversationStore.addMessage(item.answer)
  }, 1300)
}

const isNextFAQ = ref(false)
function toggleNextFAQ() {
  isNextFAQ.value = !isNextFAQ.value
}
defineProps<{ toggleFAQ: () => void }>()
</script>

<template>
  <div class="box">
    <div class="head">
      <h1>자주 묻는 질문</h1>
      <!-- <h6 style="margin-left: auto">{{ today }}</h6> -->
      <button class="nextBT" @click="toggleNextFAQ">
        {{ isNextFAQ ? '<' : '>' }}
      </button>
      <button class="endBT" @click="toggleFAQ">x</button>
    </div>

    <div v-if="isNextFAQ">
      <button v-for="item in faqData2" :key="item.id" class="faq" @click="quest(item)">
        <div class="numbox">{{ item.id }}</div>
        <p>{{ item.question }}</p>
      </button>
    </div>
    <div v-else>
      <button v-for="item in faqData1" :key="item.id" class="faq" @click="quest(item)">
        <div class="numbox">{{ item.id }}</div>
        <p>{{ item.question }}</p>
      </button>
    </div>
  </div>
</template>

<style>
.box {
  width: 350px;
  height: 150px;
  border: none;
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  position: fixed;
  bottom: 40px;
  right: 80px;
  background-color: rgb(255, 247, 194);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}
.box:after {
  border-top: 0px solid transparent;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgb(255, 247, 194);
  content: '';
  position: fixed;
  bottom: 190px;
  right: 120px;
}
.head {
  display: flex;
  justify-content: center;
  margin: 0;
  padding-top: 5px;
  padding-left: 10px;
}

.box h1 {
  font-size: 12px;
  font-weight: bold;
  color: #ed4b4bff;
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
  margin-bottom: 2px;
  transition: background-color 0.3s ease;
}
.faq:hover {
  background-color: rgb(255, 234, 99);
}
.numbox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 18px;
  border: none;
  border-radius: 10px;
  background: #ebf6f2;
  color: #3e7036ff;
  text-align: center;
  margin-right: 6px;
}
.nextBT {
  width: 20px;
  border-radius: 5px;
  border: none;
  background: #ebf6f2;
  color: rgb(43, 77, 37);
  cursor: pointer;
  margin-bottom: 4px;
  margin-left: 200px;
}
.endBT {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  border-radius: 5px;
  border: none;
  background: #ebf6f2;
  color: rgb(43, 77, 37);
  cursor: pointer;
  margin-left: auto;
  margin-right: 16px;
  margin-bottom: 4px;
}
</style>
