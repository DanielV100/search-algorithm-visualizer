<script lang="ts" context="module">
  import { afterUpdate } from "svelte";
    import type { Bars } from "../types/interfaces";
  import { colors, barsStore } from "../variables/stores";
    import { maxHeight, minHeight, numberOfBars } from "../variables/variables";
    //array stores bars in it 
    export let bars = []; 
    //here are all bars as div's
    export let barAsDivElements = []; 
    let color:string;
    
    colors.subscribe(value => {
        color = value; 
    }); 
    barsStore.subscribe(value => {
        barAsDivElements = []; 
        console.log(barAsDivElements); 
        bars = value; 
    });

    function calcHowManyBarsFit():number {
        //width - padding/bar width
        return Math.round((window.innerWidth-20)/29); 
    }

    //iterating through the bars and give them random height, id and color
    export function generateBars(numberOfBars:number):void {
        bars = []; 
        for(let i:number = 0; i < numberOfBars; i++) { 
            barAsDivElements = []; 
            bars = [...bars, {height:generateRandomHeight(), id:i, color:color}]; 
      }
      barsStore.set(bars);
    }
    //generating random height for the bars 
    export function generateRandomHeight():number {
        return Math.floor(Math.random() * maxHeight) + minHeight;  
    }
    generateBars(calcHowManyBarsFit()); 
</script>

{#each $barsStore as bar}
<div class="barContainer">
    <div bind:this={barAsDivElements[bar.id]} id="{bar.id.toString()}" class="bar" style="background-color: {bar.color}; height: {bar.height}px;">
    </div>
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