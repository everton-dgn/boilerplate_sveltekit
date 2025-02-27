<script lang="ts">
  import { counterState } from './state.svelte'
  import S from './styles.module.css'

  function preventDefaultAction(node: HTMLElement) {
    $effect(() => {
      const handler = (e: Event) => {
        e.preventDefault()
        counterState.setIncrement()
      }

      node.addEventListener('mousedown', handler)
      node.addEventListener('touchstart', handler, { passive: false })

      return () => {
        node.removeEventListener('mousedown', handler)
        node.removeEventListener('touchstart', handler)
      }
    })
  }
</script>

<main>
  <h1 class={S.title}>
    Contador: {counterState.getCount} - {counterState.getDoubleCount}
  </h1>
  <button use:preventDefaultAction>Incrementar</button>
  <button onclick={counterState.setDecrement}>Decrementar</button>
</main>
