<script lang="ts">
  import { typewriteHeading } from "./modules/heading.svelte";
  import Bars from "./modules/bars.svelte";
  //This is the typewritter heading
  import Heading from "./modules/heading.svelte";
  //These are the buttons 
  import Buttons from "./modules/buttons.svelte";
  //This is the scrollbar to change the sorting speed
  import SpeedScrollbar from "./modules/speedscrollbar.svelte";
  import { barColorDark, barColorLight, setBarColor } from "./variables/variables";
  import Colortheme from "./modules/colortheme.svelte";
  window.onmouseover = typewriteHeading; 
  function init():void {
    let colorTheme:string = localStorage.getItem("colorTheme"); 
    if(colorTheme === "light") {
       setBarColor(barColorLight); 
    } else if(colorTheme === "dark") {
      setBarColor(barColorDark); 
    } else {
      setBarColor(barColorLight); 
    }
  }
  init(); 
</script>

<div>
  <Heading/>
  <Buttons/> <Colortheme/>
  <SpeedScrollbar/>
</div>
<Bars/>

