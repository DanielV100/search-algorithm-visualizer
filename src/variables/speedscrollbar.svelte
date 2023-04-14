<script lang="ts" context="module">
  import { scrollbarMax, scrollbarMin, scrollbarStep, scrollbarValue } from "./variables";
    //sorting speed 
    let sortingSpeed:HTMLOutputElement; 
    let sortingSpeedScrollbar:HTMLInputElement; 

    export { sortingSpeedScrollbar }; 

</script>
<div>
   <label id="labelFaster" class="h4">faster</label> <input id="scrollbar" bind:this={sortingSpeedScrollbar} type="range" min={scrollbarMin} max={scrollbarMax} step={scrollbarStep} value={scrollbarValue}><label id="labelSlower" class="h4">slower</label>
</div>

<style>
    div{
        margin: 20px;
    }
    #labelSlower {
        margin-left: 10px;
    }
    #labelFaster{
        margin-right: 10px;
    }
</style>
