import { colors, sortingSpeed } from "../variables/stores";
import { barColorWhileSwapping } from "../variables/variables";
import { endSorting, getBarsWhichArentNull, refreshBars } from "./algo-utils";

let color:string; 
colors.subscribe(value => {
    color = value; 
}); 
let sortSpeed; 
sortingSpeed.subscribe(value => {
    sortSpeed = value; 
}); 
export async function selectionSort() {
    let barsToSortArray:HTMLDivElement[] = getBarsWhichArentNull(); 
    refreshBars(); 
    let marker:number = barsToSortArray.length - 1; 
    while(marker >= 0){
        let max:number = 0; 
        for(let i:number = 0; i <= marker; i++){
            await new Promise(resolve => setTimeout(resolve, sortSpeed));
            if(parseInt(barsToSortArray[i].style.height) > parseInt(barsToSortArray[max].style.height)) {
                max = i; 
            }
        }
        let temp:string = barsToSortArray[marker].style.height; 
        barsToSortArray[marker].style.height = barsToSortArray[max].style.height; 
        barsToSortArray[max].style.height = temp; 
        barsToSortArray[marker].style.background = barColorWhileSwapping; 
        barsToSortArray[max].style.background = barColorWhileSwapping; 
        for(let x:number = 0; x < barsToSortArray.length; x++) {
            if((x != marker) && (x != max)) {
                barsToSortArray[x].style.background = color; 
            }
        }
        marker--; 
    }
    for (let y:number = 0; y < barsToSortArray.length; y++) {
        barsToSortArray[y].style.background = color;
      }
    endSorting();  
}