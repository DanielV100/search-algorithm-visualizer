import { writable, type Writable } from "svelte/store";

//colors 
const colorLight:string  = "blueviolet"; 
const colorDark:string = "black";

//colortheme 
const isDarkmode:Writable<boolean> = writable(false);

//color of the button
const buttonColor:Writable<string> = writable(colorLight); 

//color of the bars 
const barColor:Writable<string> = writable(colorLight)

//bars
const barsStore = writable([]); 

//heading 
const typewritterSpeed:number = 40; 
const headingAsString:string = "how sorting works."; 
const headingBegin:string = "See"; 

function init():void {
    let colorTheme:string = localStorage.getItem("colorTheme"); 
    if(colorTheme === "light") {
      buttonColor.update(color => colorLight)
      barColor.update(value => colorLight)
    } else if(colorTheme === "dark") {
      buttonColor.update(color => colorDark)
      barColor.update(value => colorDark)
    } else {
      buttonColor.update(color => colorLight)
      barColor.update(value => colorLight) 
    }
  }
  init();

export { buttonColor, colorLight, colorDark, barsStore, isDarkmode, typewritterSpeed, headingAsString, headingBegin, barColor }