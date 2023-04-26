import { writable, type Writable } from "svelte/store";

//colortheme 
const isDarkmode:Writable<boolean> = writable(false);

//color of the buttons
const buttonColor:Writable<string> = writable("blueviolet"); 
const buttonColorLight:string = "blueviolet"; 
const buttonColorDark:string = "black"; 

//bars
const barsStore = writable([]); 

//heading 
const typewritterSpeed:number = 40; 
const headingAsString:string = "how sorting works."; 
const headingBegin:string = "See"; 

export { buttonColor, buttonColorDark, buttonColorLight, barsStore, isDarkmode, typewritterSpeed, headingAsString, headingBegin }