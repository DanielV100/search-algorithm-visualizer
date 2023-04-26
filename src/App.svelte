<script lang="ts">
  import { typewriteHeading } from "./components/heading.svelte";
  import Bars from "./components/bars.svelte";
  //This is the typewritter heading
  import Heading from "./components/heading.svelte";
  //These are the buttons 
  import Buttons from "./components/buttons.svelte";
  //This is the scrollbar to change the sorting speed
  import SpeedScrollbar from "./components/speedscrollbar.svelte";
  import { barColorDark, barColorLight, setBarColor } from "./variables/variables";
  import Colortheme from "./components/colortheme.svelte";
  import { buttonColor, buttonColorDark, buttonColorLight } from "./variables/stores";
  window.onmouseover = typewriteHeading; 
  function init():void {
    let colorTheme:string = localStorage.getItem("colorTheme"); 
    if(colorTheme === "light") {
      buttonColor.update(color => buttonColorLight)
      setBarColor(barColorLight); 
    } else if(colorTheme === "dark") {
      buttonColor.update(color => buttonColorDark)
      setBarColor(barColorDark); 
    } else {
      buttonColor.update(color => buttonColorLight)
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

