<script lang="ts">
  import '@fontsource/poppins/400.css'
  import '@fontsource/poppins/500.css'
  import '@fontsource/poppins/600.css'
  import '@/theme/reset.css'

  import MainProvider from '@/components/providers/MainProvider.svelte'
</script>

<MainProvider>
  {#snippet children()}
    <nav>
      <a href="/">home</a>
      <a href="/about">about</a>
    </nav>
    <slot />
  {/snippet}
</MainProvider>

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    height: 50px;
    margin-bottom: 100px;
    border-bottom: 1px solid #427f90;
  }
</style>
