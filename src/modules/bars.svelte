<script lang="ts" context="module">
  import { each } from "svelte/internal";

    const element = document.querySelector(".barContainer") as HTMLDivElement;
    let color:string = "green"; 
    let height:number = 300; 
    const items = [
		{ h: 100, c: "blue"},
		{ h: 200, c: "black"},
		{ h: 400, c: "orange"}
	]
</script>

{#each items as item}
<div class="barContainer">
    <div class="bar"
        style="background-color: {item.c}; height: {item.h}px;">
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