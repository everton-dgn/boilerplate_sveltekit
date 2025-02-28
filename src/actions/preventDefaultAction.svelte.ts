export function preventDefaultAction(node: HTMLElement, callback: () => void) {
  $effect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      callback()
    }

    node.addEventListener('mousedown', handler)
    node.addEventListener('touchstart', handler, { passive: false })

    return () => {
      node.removeEventListener('mousedown', handler)
      node.removeEventListener('touchstart', handler)
    }
  })
}
