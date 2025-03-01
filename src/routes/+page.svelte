<script lang="ts">
  import CounterButton from '@/components/atoms/CounterButton/CounterButton.svelte'

  import S from './styles.module.css'
</script>

<div class={S.container}>
  <header class={S.header}>Boilerplate</header>
  <main class={S.main}>
    <div class={S.wrapper_images}>
      <img
        src="/images/logo_sveltekit.svg"
        alt="Logo Sveltekit"
        width={87}
        height={87}
      />
    </div>
    <h1 class={S.title}>Sveltekit</h1>
    <CounterButton />
  </main>
</div>
