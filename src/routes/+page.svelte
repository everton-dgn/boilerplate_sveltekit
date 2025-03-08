<script lang="ts">
import Logo from '@/assets/logo_sveltekit.svg?raw'
import CounterButton from '@/components/atoms/CounterButton/CounterButton.svelte'
import S from './styles.module.css'
</script>

<svelte:head>
  <title>Boilerplate</title>
  <meta name="description" content="Boilerplate Sveltekit" />
</svelte:head>

<div class={S.container}>
  <header class={S.header}>Boilerplate</header>
  <main class={S.main}>
    <div class={S.logo}>
      {@html Logo}
    </div>
    <h1 class={S.title}>Sveltekit</h1>
    <CounterButton />
  </main>
</div>
