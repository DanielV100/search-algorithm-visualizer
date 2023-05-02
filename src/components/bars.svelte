<script lang="ts" context="module">
    //interface with height, id, color
    import type { Bars } from "../types/interfaces";
    //importing stores 
    import { colors, barsStore } from "../variables/stores";
    //height of bars 
    import { maxHeight, minHeight } from "../variables/stores";
    //array stores bars in it. An element is from type Bars which can be found in folder "types" 
    let bars:Bars = []; 
    //here are all bars as HTMLDivElements (this is needed for the rendering) 
    export let barAsDivElements:HTMLDivElement[] = []; 
   
    //getting color for bars 
    let color:string;
    colors.subscribe(value => {
        color = value; 
    }); 

    //calculates how many bars fit into the screen, because bars should be in one line
    function calcHowManyBarsFit():number {
        //(screen width - padding)/bar width
        return Math.round((window.innerWidth-20)/29); 
    }

    //generate new bars and store them in "bars" array
    export function generateBars(numberOfBars:number):void {
        //resetting bars (otherwise the array would be conducted and would get bigger and bigger)
        bars = []; 
        for(let i:number = 0; i < numberOfBars; i++) { 
           bars = [...bars, {height:generateRandomHeight(), id:i, color:color}]; 
        }
        //this triggers rerendering of the bars 
        barsStore.set(bars);
    }

    //generating random height for the bars (with max/min width)
    export function generateRandomHeight():number {
        return Math.floor(Math.random() * maxHeight) + minHeight;  
    }
    //init
    generateBars(calcHowManyBarsFit()); 
</script>

{#each $barsStore as bar}
<div class="barContainer">
    <div bind:this={barAsDivElements[bar.id]} id="{bar.id.toString()}" class="bar" style="background-color: {bar.color}; height: {bar.height}px;"></div>
</div>
{/each}

<style>
    .barContainer{
      display: inline-block;
      padding-top: 5%;
    }
    .bar {
        width: 9px;
        padding-top: 8px;
        margin-left: 20px;
     }
</style>