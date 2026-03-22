<script lang="ts" setup>
import { useColorMode } from '#imports'

const colorMode = useColorMode()

function changeColor() {
  colorMode.preference
    = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div>
    <div class="grid grid-cols-[40%_auto] h-screen">
      <div class="border-r border-base p-4">
        hello
      </div>

      <div class="p-4">
        <button @click="changeColor">
          {{ colorMode.value }}
        </button>
      </div>
    </div>
  </div>
</template>
