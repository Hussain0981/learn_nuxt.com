import { WebContainer } from '@webcontainer/api'

let webcontainerInstance: WebContainer | null = null

export async function useWebContainer() {
  if (!webcontainerInstance) {
    webcontainerInstance = await WebContainer.boot()
  }

  return webcontainerInstance
}