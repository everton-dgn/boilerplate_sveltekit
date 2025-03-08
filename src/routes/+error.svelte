<script lang="ts">
import { page } from '$app/state'
</script>

<svelte:head>
  <title>Error</title>
</svelte:head>

<h1>{page.status} {page.error?.message ?? 'Try again!'}</h1>
