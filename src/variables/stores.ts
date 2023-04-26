import { writable, type Writable } from "svelte/store";

//colortheme 
const isDarkmode:Writable<boolean> = writable(false);

//color of the buttons
const buttonColor:Writable<string> = writable("blueviolet"); 
const buttonColorLight:string = "blueviolet"; 
const buttonColorDark:string = "black"; 

//bars
const barsStore = writable([]); 

export { buttonColor, buttonColorDark, buttonColorLight, barsStore, isDarkmode }