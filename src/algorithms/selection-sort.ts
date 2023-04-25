import { barAsDivElements } from "../modules/bars.svelte";
import { sortingSpeedScrollbar } from "../modules/speedscrollbar.svelte";
import { barColor, barColorWhileSwapping } from "../variables/variables";
import { endSorting, refreshBarsAfterSorting } from "./algo-utils";
let test:number = 0; 
export async function selectionSort() {
    refreshBarsAfterSorting(); 
    let marker:number = barAsDivElements.length - 1; 
    while(marker >= 0){
        let max:number = 0; 
        for(let i:number = 0; i <= marker; i++){
            await new Promise(resolve => setTimeout(resolve, parseInt(sortingSpeedScrollbar.value)));
            if(parseInt(barAsDivElements[i].style.height) > parseInt(barAsDivElements[max].style.height)) {
                max = i; 
            }
        }
        let temp:string = barAsDivElements[marker].style.height; 
        barAsDivElements[marker].style.height = barAsDivElements[max].style.height; 
        barAsDivElements[max].style.height = temp; 
        barAsDivElements[marker].style.background = barColorWhileSwapping; 
        barAsDivElements[max].style.background = barColorWhileSwapping; 
        for(let x:number = 0; x < barAsDivElements.length; x++) {
            if((x != marker) && (x != max)) {
                barAsDivElements[x].style.background = barColor; 
            }
        }
        marker--; 
    }
    for (let y:number = 0; y < barAsDivElements.length; y++) {
        barAsDivElements[y].style.background = barColor;
      }
    endSorting();  
}