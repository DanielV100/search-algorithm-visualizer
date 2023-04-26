<script lang="ts" context="module">
  import { colors } from "../variables/stores";
  import { scrollbarMax, scrollbarMin, scrollbarStep, scrollbarValue } from "../variables/variables";
    //sorting speed 
    let sortingSpeed:HTMLOutputElement; 
    let sortingSpeedScrollbar:HTMLInputElement; 
    let color:string; 
    colors.subscribe(value => {
        color = value; 
    })
    export { sortingSpeedScrollbar }; 

</script>
<div>
   <label id="labelFaster" class="h4">faster</label> <input bind:this={sortingSpeedScrollbar} type="range" min={scrollbarMin} max={scrollbarMax} step={scrollbarStep} value={scrollbarValue} color={color}/><label id="labelSlower" class="h4">slower</label>
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
