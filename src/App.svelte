<script lang="ts">
  import { typewriteHeading } from "./modules/heading.svelte";
  import Bars from "./modules/bars.svelte";
  import Heading from "./modules/heading.svelte";
  import Buttons from "./modules/buttons.svelte";
  window.onmouseover = typewriteHeading; 
</script>

<div>
  <Heading/>
  <Buttons/>
</div>
<Bars/>
