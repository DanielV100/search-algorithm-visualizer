<script lang="ts">
  import { typewriteHeading } from "./components/heading.svelte";
  import Bars from "./components/bars.svelte";
  //This is the typewritter heading
  import Heading from "./components/heading.svelte";
  //These are the buttons 
  import Buttons from "./components/buttons.svelte";
  //This is the scrollbar to change the sorting speed
  import SpeedScrollbar from "./components/speedscrollbar.svelte";
  import Colortheme from "./components/colortheme.svelte";
  window.onmouseover = typewriteHeading; 
   

</script>

<div>
  <Heading/> 
  <Buttons/> <Colortheme/>
  <SpeedScrollbar/>
</div>
<Bars/>

