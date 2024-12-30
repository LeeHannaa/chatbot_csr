<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleChatBot = () => {
  router.push('/chat1')
}
</script>

<template>
  <div style="text-align: center">
    <button class="movechatbot" @click="handleChatBot">
      <img src="../../assets/chatbot.png" style="width: 55px; height: 60px" />
    </button>
  </div>
</template>

<style scoped>
.movechatbot {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgb(203, 255, 189);
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 80px;
  animation: motion 0.7s ease-in-out infinite alternate;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}
@keyframes motion {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}
.movechatbot :hover {
  transform: scale(1.1);
}
</style>
