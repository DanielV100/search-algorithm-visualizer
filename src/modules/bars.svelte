<script lang="ts" context="module">
    import type { Bars } from "../types/interfaces";
    //array stores bars in it 
    let bars:Bars = []; 
    //color of bars
    let color:string = "turquoise"; 
    //max height of bars 
    let maxHeight:number = 500;
    //min height of bars 
    let minHeight:number = 50; 

    for(let i = 0; i < 40; i++) {
        bars.push(
            {height:generateRandomHeight(), id:i, color:color}
        )
    }

    function generateRandomHeight():number{
        return Math.floor(Math.random() * maxHeight) + minHeight;  
    }
</script>

{#each bars as bar}
<div class="barContainer">
    <div id="{bar.id.toString()}" class="bar" style="background-color: {bar.color}; height: {bar.height}px;">
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