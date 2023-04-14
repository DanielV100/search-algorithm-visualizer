<script lang="ts">
    import { bubbleSort } from "../algorithms/bubble-sort";
  import { insertionSort } from "../algorithms/insertion-sort";
</script>

<button class="btn btn-primary" id="create-bars">Create bars</button>
<button class="btn btn-secondary" on:click={bubbleSort}>Bubble Sort</button>
<button class="btn btn-secondary" on:click={insertionSort}>Insertion Sort</button>
<button class="btn btn-secondary">Selection Sort</button>

<style>
    button {
      margin: 20px;
    }
    #create-bars {
        background-color: blueviolet;
        border-color: blueviolet;
    }

  </style>