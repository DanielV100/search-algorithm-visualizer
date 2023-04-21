<script lang="ts">
  import { barColor, barColorDark } from "../variables/variables";
  import { barAsDivElements } from "./bars.svelte";
    //changing the color theme on button click
    function changeColorTheme() {
        console.log(getIfColorThemeIsDarkmode()); 
        if(getIfColorThemeIsDarkmode()) {
            barAsDivElements.map((bar) => {
            bar.style.background = barColor; 
         }); 
        } else {
            barAsDivElements.map((bar) => {
            bar.style.background = barColorDark; 
         }); 
        }
        
    }
    function getIfColorThemeIsDarkmode():boolean {
        console.log(barAsDivElements[0].style.background.toString()); 
        let isDarkmode:boolean; 
        if((barAsDivElements[0].style.background).toString() === barColor) {
            console.log("Test"); 
            isDarkmode = false; 
        } else {
            isDarkmode = true; 
        }
        return isDarkmode; 
    }

</script>

<button on:click={changeColorTheme}></button>