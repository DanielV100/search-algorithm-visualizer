<script lang="ts">
  //importing color stores
  import { colors, colorDark, colorLight, colorModeIcon, colorModeIconLight, colorModeIconDark } from "../variables/stores";
  //getting bars as DOM/Div-element 
  import { barAsDivElements } from "./bars.svelte";
  let color:string; 
  let colorMode:string; 
  
  colors.subscribe(value => {
    color = value; 
  }); 
  colorModeIcon.subscribe(value => {
    colorMode = value; 
  }); 

  //gets color theme from local storage and sets the correct icon 
  function setSuitableIcon(): void {
    let colorTheme: string = localStorage.getItem("colorTheme");
    if (colorTheme === "light") {
      colorModeIcon.update(value => colorModeIconLight); 
    } else if (colorTheme === "dark") {
      colorModeIcon.update(value => colorModeIconDark); 
    } else {
      colorModeIcon.update(value => colorModeIconLight); 
    }
  }
  //changing the color theme on button click
  function changeColorTheme() {
    if (localStorage.getItem("colorTheme") == "dark") {
      colors.update(value => colorLight); 
      colorModeIcon.update(value => colorModeIconLight); 
      barAsDivElements.map((bar) => {
        bar.style.background = color;
      });
      localStorage.setItem("colorTheme", "light");
    } else {
      colors.update(value => colorDark);
      colorModeIcon.update(value => colorModeIconDark); 
      barAsDivElements.map((bar) => {
        bar.style.background = color;
      });
      localStorage.setItem("colorTheme", "dark");
    }
  }
  //init
  setSuitableIcon();
</script>
<svg on:click={changeColorTheme} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d={colorMode} /></svg>
