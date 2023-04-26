import { writable, type Writable } from "svelte/store";

const buttonColor:Writable<string> = writable("blueviolet"); 
const buttonColorLight:string = "blueviolet"; 
const buttonColorDark:string = "black"; 

export { buttonColor, buttonColorDark, buttonColorLight }