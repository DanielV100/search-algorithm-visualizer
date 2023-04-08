<script lang="ts">
    import { bubbleSort } from "../algorithms/bubble-sort";
</script>

<button class="btn btn-primary">Create bars</button>
<button class="btn btn-secondary" on:click={bubbleSort}>Bubble Sort</button>

<style>
    button {
      margin: 20px;
    }
  </style>