<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout class="min-h-screen">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="css">
  .dark {
    background-color: black;
    color: white
  }
  .light {
    background-color: white;
    color: black
  }
</style>
