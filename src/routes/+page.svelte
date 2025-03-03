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

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.15s;

    &:hover {
      background-color: #0056b3;
    }
  }
</style>
