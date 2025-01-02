<script setup lang="ts">
import { useConversationStore } from '../../stores/conversation'
import InputChatComponent from '../ChatView/InputChatComponent.vue'

const conversationStore = useConversationStore()
defineProps<{
  toggleFAQ: () => void
  isFAQVisible: boolean
}>()
</script>

<template>
  <div class="room">
    <div class="chatroom">
      <p v-for="(item, index) in conversationStore.formattedConversation" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
  <InputChatComponent :isFAQVisible="isFAQVisible" :toggleFAQ="toggleFAQ" />
</template>

<style>
.room {
  width: 98%;
  height: 88%;
  padding: 30px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  background: rgb(254, 254, 244);
}
.chatroom {
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  background: rgb(254, 254, 244);
}
</style>
