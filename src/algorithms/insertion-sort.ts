import { colors, sortingSpeed } from "../variables/stores";
import { barColorWhileSwapping } from "../variables/variables";
import { endSorting, getBarsWhichArentNull, refreshBars } from "./algo-utils";

let color:string; 
colors.subscribe(value => {
    color = value; 
})
let sortSpeed; 
sortingSpeed.subscribe(value => {
    sortSpeed = value; 
}); 
export async function insertionSort() {
    let barsToSortArray = getBarsWhichArentNull(); 
    refreshBars(); 
    for(let i:number = 0; i < barsToSortArray.length; i++) {
        let j:number = i; 
        let m:string = barsToSortArray[i].style.height; 
        while(j > 0 && parseInt(barsToSortArray[j-1].style.height) > parseInt(m)) { 
            await new Promise(resolve => setTimeout(resolve, sortSpeed)); 
            barsToSortArray[j].style.height = barsToSortArray[j-1].style.height; 
            barsToSortArray[j].style.background = barColorWhileSwapping; 
            if(j < barsToSortArray.length-1) {
                barsToSortArray[j+1].style.background = color; 
            }
            j--; 
        }
        barsToSortArray[j].style.height = m; 
        barsToSortArray[j+1].style.background = color; 
    }
    //More modern, but lowers readability
    /*for (const [i, bar] of barAsDivElements.entries()) {
        let j = i;
        let m = bar.style.height;
        while (j > 0 && parseInt(barAsDivElements[j-1].style.height) > parseInt(m)) {
            await new Promise(resolve => setTimeout(resolve, parseInt(sortingSpeedScrollbar.value)));
            barAsDivElements[j].style.height = barAsDivElements[j-1].style.height;
            barAsDivElements[j].style.background = barColorWhileSwapping;
            if (j < barAsDivElements.length - 1) {
                barAsDivElements[j+1].style.background = color;
            }
            j--;
        }
        barAsDivElements[j].style.height = m;
        bar.style.background = color;
        if (j < barAsDivElements.length - 1) {
            barAsDivElements[j+1].style.background = color;
        }
    }*/
   
    //For-each: 
    /*barAsDivElements.forEach(async (bar, i) => {
        let j = i;
        let m = bar.style.height;
        while (j > 0 && parseInt(barAsDivElements[j-1].style.height) > parseInt(m)) {
            await new Promise(resolve => setTimeout(resolve, parseInt(sortingSpeedScrollbar.value)));
            barAsDivElements[j].style.height = barAsDivElements[j-1].style.height;
            barAsDivElements[j].style.background = barColorWhileSwapping;
            bar.style.background = color;
            j--;
        }
        barAsDivElements[j].style.height = m;
        barAsDivElements[j].style.background = color;
    });*/
    endSorting(); 
}