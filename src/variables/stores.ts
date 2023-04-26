import { writable, type Writable } from "svelte/store";

//colors 
const colorLight:string  = "blueviolet"; 
const colorDark:string = "black";
const colors:Writable<string> = writable(colorLight)

//colortheme 
const isDarkmode:Writable<boolean> = writable(false);

//bars
const barsStore = writable([]); 

//heading 
const typewritterSpeed:number = 40; 
const headingAsString:string = "how sorting works."; 
const headingBegin:string = "See"; 

function init():void {
    let colorTheme:string = localStorage.getItem("colorTheme"); 
    if(colorTheme === "light") {
      colors.update(value => colorLight)
    } else if(colorTheme === "dark") {
      colors.update(value => colorDark)
    } else {
      colors.update(value => colorLight) 
    }
  }
  init();

export { colorLight, colorDark, barsStore, isDarkmode, typewritterSpeed, headingAsString, headingBegin, colors }