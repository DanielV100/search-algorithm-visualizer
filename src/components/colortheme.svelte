<script lang="ts">
  import { colors, colorDark, colorLight, isDarkmode, colorModeIcon, colorModeIconLight, colorModeIconDark } from "../variables/stores";

  import { barAsDivElements } from "./bars.svelte";
  let darkmode:boolean; 
  let color:string; 
  let colorMode:string; 
  
  isDarkmode.subscribe(value => {
    darkmode = value; 
  }); 

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
    if (getIfCurrentColorThemeIsDarkmode()) {
      colors.update(value => colorLight); 
      colorModeIcon.update(value => colorModeIconLight); 
      barAsDivElements.map((bar) => {
        bar.style.background = color;
      });
      localStorage.setItem("colorTheme", "light");
      //this updates the button color into light 
      isDarkmode.update(value => false);
    } else {
      colors.update(value => colorDark);
      colorModeIcon.update(value => colorModeIconDark); 
      barAsDivElements.map((bar) => {
        bar.style.background = color;
      });
      localStorage.setItem("colorTheme", "dark");
      //this updates the button color into dark
      isDarkmode.update(value => true);
    }
  }
  function getIfCurrentColorThemeIsDarkmode(): boolean {
    if (darkmode === true) {
      return true;
    } else {
      return false;
    }
  }
  setSuitableIcon();
</script>

<svg on:click={changeColorTheme} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d={colorMode} /></svg>
