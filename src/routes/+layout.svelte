<script lang="ts">
  import '@fontsource/inter/400.css'
  import '@fontsource/inter/500.css'
  import '@fontsource/inter/600.css'
  import '@/theme/reset.css'

  import MainProvider from '@/components/providers/MainProvider.svelte'
</script>

<MainProvider>
  {#snippet children()}
    <slot />
  {/snippet}
</MainProvider>
