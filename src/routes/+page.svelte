<script lang="ts">
  import { useCounter } from './state.svelte'
  import S from './styles.module.css'

  const counter = useCounter()
</script>

<main>
  <h1 class={S.title}>
    Contador: {counter.getCount} - {counter.getDoubleCount}
  </h1>
  <button onclick={counter.setIncrement}>Incrementar</button>
  <button onclick={counter.setDecrement}>Decrementar</button>
</main>
