<script lang="ts">
  import { counter } from './state.svelte'
  import S from './styles.module.css'
</script>

<main>
  <h1 class={S.title}>Contador: {counter.count} - {counter.doubleCount()}</h1>
  <button onclick={() => counter.increment()}>Incrementar</button>
  <button onclick={() => counter.decrement()}>Decrementar</button>
</main>
