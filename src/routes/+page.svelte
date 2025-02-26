<script lang="ts">
  import { counterState } from './state.svelte'
  import S from './styles.module.css'
</script>

<main>
  <h1 class={S.title}>
    Contador: {counterState.getCount} - {counterState.getDoubleCount}
  </h1>
  <button onclick={counterState.setIncrement}>Incrementar</button>
  <button onclick={counterState.setDecrement}>Decrementar</button>
</main>
