<script lang="ts">
  import { typewriteHeading } from "./components/heading.svelte";
  import Bars from "./components/bars.svelte";
  //this is the typewritter heading
  import Heading from "./components/heading.svelte";
  //these are the buttons for creating bars, bubble sort, insertion sort...
  import Buttons from "./components/buttons.svelte";
  //this is the scrollbar to change the sorting speed, its default value is 75
  import SpeedScrollbar from "./components/speedscrollbar.svelte";
  //this is the color theme switch (it's value is stored in local storage)
  import Colortheme from "./components/colortheme.svelte";
  import Weather from "./components/weather.svelte";
  //on mouse hover comes the heading with typewritter effect
  window.addEventListener("mouseover", typewriteHeading);

  
</script>

<div>
  <Heading/> 
  <Buttons/> <Colortheme/>
  <SpeedScrollbar/>
</div>
<Bars/>
<Weather/>


