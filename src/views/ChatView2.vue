<script setup lang="ts">
import ConnectionChatComponent from '../components/ChatView/ConnectionChatComponent.vue'
import ChatRoomComponent from '../components/ChatView/ChatRoomComponent.vue'

function endChat() {
  window.location.href = '/'
}
</script>

<template>
  <div class="chat">
    <button class="chatend" @click="endChat">종료하기</button>
    <ChatRoomComponent />
    <ConnectionChatComponent />
  </div>
</template>

<style>
.chat {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chatend {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: none;
  background: #ffdedc;
  color: rgb(255, 0, 0);
  cursor: pointer;
  margin-top: 10px;
}
</style>
