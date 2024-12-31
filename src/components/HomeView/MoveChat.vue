<script setup lang="ts">
import { ref } from 'vue'
import InputChatComponent from '../ChatView/InputChatComponent.vue'
import ChatRoomComponent from '../ChatView/ChatRoomComponent.vue'

const chatIsOpen = ref(false)

function toggleChat() {
  chatIsOpen.value = !chatIsOpen.value
}
</script>

<template>
  <div style="text-align: center">
    <div v-if="chatIsOpen" class="chatbox">
      <ChatRoomComponent />
      <InputChatComponent />
    </div>
    <button class="movechatbot" @click="toggleChat">
      <img v-if="chatIsOpen" src="../../assets/closeChat.png" style="width: 45px; height: 46px" />
      <img v-else src="../../assets/openChat.png" style="width: 55px; height: 60px" />
    </button>
  </div>
</template>

<style scoped>
.chatbox {
  width: 40%;
  height: 70%;
  border-radius: 20px;
  background-color: rgb(252, 255, 236);
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 150px;
  right: 50px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.movechatbot {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgb(217, 236, 211);
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 80px;
  right: 50px;
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
