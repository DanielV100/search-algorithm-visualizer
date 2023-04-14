<script lang="ts" context="module">
    import type { Bars } from "../types/interfaces";
    import { barColor, maxHeight, minHeight, numberOfBars } from "../variables/variables";
    //array stores bars in it 
    let bars:Bars = []; 
    //here are all bars as div's
    export let barAsDivElements = []; 

    //iterating through the bars and give them random height, id and color
    for(let i = 0; i < parseInt(numberOfBars); i++) {
        bars.push(
            {height:generateRandomHeight(), id:i, color:barColor}
        )
    }

    //generating random height for the bars 
    export function generateRandomHeight():number {
        return Math.floor(Math.random() * maxHeight) + minHeight;  
    }
    
</script>

{#each bars as bar}
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