<script lang="ts">
  import { typewriteHeading } from "./modules/heading.svelte";
  import Bars from "./modules/bars.svelte";
  import Heading from "./modules/heading.svelte";
  import { bubbleSort } from "./algorithms/bubble-sort";
  import { onMount } from 'svelte';
  window.onmouseover = typewriteHeading; 
</script>

<div>
  <Heading/>
  <button class="btn btn-secondary" on:click={bubbleSort}>Bubble Sort</button>
</div>
<Bars/>

<style>
  button {
    margin: 20px;
  }
</style>
