<script lang="ts">
import '@fontsource/inter/latin-ext-400.css'
import '@fontsource/inter/latin-ext-500.css'
import '@fontsource/inter/latin-ext-600.css'
import '@/theme/reset.css'

import MainProvider from '@/components/providers/MainProvider.svelte'

import type { Props } from '@/routes/types'

const { children }: Props = $props()
</script>

<MainProvider>
  {@render children()}
</MainProvider>
