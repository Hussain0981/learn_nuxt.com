<script lang="ts" setup>
import { useWebContainer } from '~/composables/webContainer'

const iframeEl = ref<HTMLIFrameElement | null>(null)

async function startDevServer() {
  const wc = await useWebContainer()
  console.warn('mounting')
  await wc.mount({
    'package.json': {
      file: {
        contents: JSON.stringify({
          private: true,
          scripts: {
            dev: 'nuxt dev',
          },
          dependencies: {
            nuxt: 'latest',
          },
        }, null, 2),
      },
    },

  })

  wc.on('server-ready', (port, url) => {
    if (iframeEl.value) {
      iframeEl.value.src = url
      console.warn('server ready', url)
    }
  })

  const installProcess = await wc.spawn('npm', ['install'])
  console.warn('installing')

  // exit code ka wait
  const installExitCode = await installProcess.exit

  if (installExitCode !== 0) {
    throw new Error('Unable to run npm install')
  }
  console.warn('running')

  wc.spawn('npm', ['run', 'dev'])
}

onMounted(() => {
  startDevServer()
})
</script>

<template>
  <div>
    <iframe ref="iframeEl" />
  </div>
</template>
