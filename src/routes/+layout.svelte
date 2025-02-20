<script lang="ts">
  import '@fontsource/poppins/400.css'
  import '@fontsource/poppins/500.css'
  import '@fontsource/poppins/600.css'
  import '@/theme/reset.css'

  import MainProvider from '@/components/providers/MainProvider.svelte'
</script>

<MainProvider>
  {#snippet children()}
    <slot />
  {/snippet}
</MainProvider>
