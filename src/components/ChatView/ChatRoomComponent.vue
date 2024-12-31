<script setup lang="ts">
import { useConversationStore } from '../../stores/conversation'

const conversationStore = useConversationStore()
</script>

<template>
  <div class="room">
    <div class="chatroom">
      <p v-for="(item, index) in conversationStore.formattedConversation" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<style>
.room {
  width: 90%;
  height: 80%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  background: rgb(254, 254, 244);
}
.chatroom {
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: rgb(254, 254, 244);
}
</style>
