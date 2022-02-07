export function getWorker() {
  return new Worker(new URL('./worker', import.meta.url))
}

