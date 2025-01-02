<script setup lang="ts">
import MoveChat from '../components/MoveChat.vue'
</script>

<template>
  <main>
    <div class="test">
      <h1>그냥 테스트 페이지</h1>
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
