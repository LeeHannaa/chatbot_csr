<script setup lang="ts">
import { useRouter } from 'vue-router'
import MoveChat from '../components/MoveChat.vue'

const router = useRouter()

function moveTest() {
  router.push('/test')
}
</script>

<template>
  <main>
    <button class="testBT" @click="moveTest">test 페이지 이동</button>
    <MoveChat />
  </main>
</template>

<style>
.testBT {
  width: 160px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background: #17ffaa;
  color: rgb(43, 77, 37);
  cursor: pointer;
}
</style>
