<script lang="ts">
  //this is the typewritter heading
  import Heading from "./components/heading.svelte";
  //function for typewritter effect
  import { typewriteHeading } from "./components/heading.svelte";
  //these are the bars (which are basically div-elements)
  import Bars from "./components/bars.svelte";
  //these are the buttons for creating bars, bubble sort, insertion sort...
  import Buttons from "./components/buttons.svelte";
  //this is the scrollbar to change the sorting speed, its default value is 75
  import SpeedScrollbar from "./components/speedscrollbar.svelte";
  //this is the color theme switch (it's value is stored in local storage)
  import Colortheme from "./components/colortheme.svelte";
  //this is the footer incl. weather
  import Weather from "./components/weather.svelte";
  //on mouse hover comes the heading with typewritter effect (which is generated through typewriteHeading())
  window.addEventListener("mouseover", typewriteHeading);
</script>

<div>
  <Heading/> 
  <Buttons/> <Colortheme/>
  <SpeedScrollbar/>
</div>
<Bars/>
<Weather/>


