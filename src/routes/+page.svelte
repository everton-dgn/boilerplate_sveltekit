<script lang="ts">
  import { counter } from './state.svelte'
  import S from './styles.module.css'
</script>

<main>
  <h1 class={S.title}>
    Contador: {counter.getCount} - {counter.getDoubleCount}
  </h1>
  <button onclick={counter.setIncrement}>Incrementar</button>
  <button onclick={counter.setDecrement}>Decrementar</button>
</main>
