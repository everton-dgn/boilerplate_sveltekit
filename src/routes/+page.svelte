<script lang="ts">
  import { counterState } from '@/store/counter.svelte'
  import { preventDefaultAction } from '@/actions/preventDefaultAction.svelte'
  import S from './styles.module.css'
</script>

<main>
  <h1 class={S.title}>
    Contador: {counterState.getCount} - {counterState.getDoubleCount}
  </h1>
  <button use:preventDefaultAction={counterState.setIncrement}>
    Incrementar
  </button>
  <button onclick={counterState.setDecrement}>Decrementar</button>
</main>
