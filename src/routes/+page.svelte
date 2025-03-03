<script lang="ts">
  import { counterState } from '@/store/counter.svelte'
  import { preventDefaultAction } from '@/actions/preventDefaultAction.svelte'

  import S from './styles.module.css'
</script>

<main>
  <h1>Home</h1>
  <p>this is the Home page.</p>
  <div class={S.description}>
    <p>
      Contador: {counterState.getCount} and {counterState.getDoubleCount}
    </p>
    <button use:preventDefaultAction={counterState.setIncrement}>
      Incrementar
    </button>
    <button onclick={counterState.setDecrement}>Decrementar</button>
  </div>
</main>
