<script lang="ts">
  import { barColor, barColorDark, isDarkmode, setBarColor, setIsDarkmode } from "../variables/variables";
  import { barAsDivElements } from "./bars.svelte";
    //changing the color theme on button click
    function changeColorTheme() {
        if(getIfCurrentColorThemeIsDarkmode()) {
            barAsDivElements.map((bar) => {
            bar.style.background = barColor; 
         }); 
         setBarColor("blueviolett"); 
         setIsDarkmode(false); 
        } else {
            barAsDivElements.map((bar) => {
            bar.style.background = barColorDark; 
         }); 
         setBarColor("black"); 
         setIsDarkmode(true); 
        }
        
    }
    function getIfCurrentColorThemeIsDarkmode():boolean {
        if(isDarkmode === true) {
            return true; 
        } else { 
            return false; 
        }
    }

</script>

<button on:click={changeColorTheme}></button>