import { barAsDivElements } from "../modules/bars.svelte";
import { barColor, barColorWhileSwapping } from "../variables/variables";
export async function bubbleSort() {
    let swapped:boolean; 
    do {
        swapped = false; 
        for(let i = 0; i < barAsDivElements.length-1; i++) { 
            const firstBar = barAsDivElements[i]; 
            const secondBar = barAsDivElements[i + 1]; 
            const heightFirstBar:string = barAsDivElements[i].style.height; 
            const heightSecondBar:string = barAsDivElements[i+1].style.height; 
            if(parseInt(heightFirstBar) > parseInt(heightSecondBar)) {
                await new Promise(resolve => setTimeout(resolve, 20));
                secondBar.style.height = heightFirstBar; 
                firstBar.style.height = heightSecondBar; 
                secondBar.style.background = barColorWhileSwapping; 
                firstBar.style.background = barColor; 
                swapped = true; 
            } else {
                for(let x = 0; x < barAsDivElements.length; x++) {
                    barAsDivElements[x].style.background = barColor; 
                }
            }
        }
     } while(swapped); 
}