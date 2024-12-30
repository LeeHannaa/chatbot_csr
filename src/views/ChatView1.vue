<script setup lang="ts">
import ConnectionChatComponent from '../components/ChatView/ConnectionChatComponent.vue'
import FAQComponent from '../components/ChatView/FAQComponent.vue'
</script>

<template>
  <div class="chat">
    <a href="/" class="back-link">〈</a>
    <h2 style="margin-bottom: 30px; margin-top: 200px; font-weight: bold">디디하우스 FQA 서비스</h2>
    <ConnectionChatComponent />
    <div style="margin-top: 40px"></div>
    <FAQComponent />
  </div>
</template>

<style>
.chat {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.back-link {
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin-top: 50px;
}
</style>
