import { barAsDivElements, generateRandomHeight } from "../components/bars.svelte";
import { colors, firstSorting, sortingSpeed } from "../variables/stores";
import { barColorEndSorting, delayEndSorting } from "../variables/stores";
import { buttonBubbleSort, buttonCreateBars, buttonInsertionSort, buttonSelectionSort } from "../components/buttons.svelte";
let audioPing:HTMLAudioElement = new Audio('/src/assets/ping.mp3');
let audioSuccessSound:HTMLAudioElement = new Audio('/src/assets/success_sound.mp3');

let color:string; 
colors.subscribe(value => {
    color = value; 
}); 

let sortSpeedTest:number; 
sortingSpeed.subscribe(value => {
    sortSpeedTest = +value; 
}); 

let isFirstSorting:string; 
firstSorting.subscribe(value => {
    isFirstSorting = value;  
}); 


//all bars get yellowgreen after sorting / wieso nicht map()?
export async function endSorting() {
    audioSuccessSound.play(); 
    let barsToSortArray = getBarsWhichArentNull(); 
    const delay = (delayInMs) => new Promise((resolve) => setTimeout(resolve, delayInMs));
    for (const bar of barsToSortArray) { 
        bar.style.background = barColorEndSorting; 
        await delay(delayEndSorting); 
        bar.style.transition = "";
        bar.style.boxShadow = "";
    }
    disableOrEnableButtons(false); 
    firstSorting.set("false"); 
}
//all bars get another height and default color (except at the fisrt sorting)
export function refreshBars():void {
    disableOrEnableButtons(true); 
    if(isFirstSorting === "false") {
        let barsToSortArray = getBarsWhichArentNull(); 
        barsToSortArray.map((bar) => {
            bar.style.height = generateRandomHeight() + "px"; 
            bar.style.background = color; 
    });
    }
}
//it happens that there are nulls in barAsDivElements - this shouldnt be the case, thats why they get sorted out
export function getBarsWhichArentNull():HTMLDivElement[] {
    let barsToSortAsArray:HTMLDivElement[] = []; 
    barAsDivElements.map(bar => {
        if(bar !== null) {
            barsToSortAsArray.push(bar); 
        }
    })
    return barsToSortAsArray; 
}

function disableOrEnableButtons(state:boolean):void {
    buttonCreateBars.disabled = state; 
    buttonBubbleSort.disabled = state; 
    buttonInsertionSort.disabled = state; 
    buttonSelectionSort.disabled = state; 
}

export function playSortSound():void {
    if(sortSpeedTest >= 75){ 
        audioPing.play(); 
    }
}
