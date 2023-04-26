<script lang="ts">
  import { bubbleSort } from "../algorithms/bubble-sort";
  import { insertionSort } from "../algorithms/insertion-sort";
  import { selectionSort } from "../algorithms/selection-sort";
  import { buttonColor } from "../variables/stores";
  let buttonColorValue:string; 
  buttonColor.subscribe(color => {
    buttonColorValue = color; 
  }); 
</script>

<button class="btn btn-primary" id="create-bars" style="background-color: {buttonColorValue}; border-color: {buttonColorValue};">Create bars</button>
<button class="btn btn-secondary" on:click={bubbleSort}>Bubble Sort</button>
<button class="btn btn-secondary" on:click={insertionSort}>Insertion Sort</button>
<button class="btn btn-secondary" on:click={selectionSort}>Selection Sort</button>

<style>
    button {
      margin: 20px;
    }
</style>