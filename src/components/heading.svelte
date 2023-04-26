<script lang="ts" context="module">
  import { headingAsString, headingBegin, typewritterSpeed } from "../variables/stores";
    let i:number = 0; 
    export function typewriteHeading():void {
        const headingElement = document.getElementById("typewritterHeading") as HTMLParagraphElement; 
        if(i < headingAsString.length) {
            headingElement.innerHTML += headingAsString.charAt(i); 
            i++; 
            setTimeout(typewriteHeading, typewritterSpeed); 
        }
    }
</script>
<div class="typewritterHeadingContainer">
    <p class="display-3">{headingBegin}</p>
    <p id="typewritterHeading" class="display-3"></p>
</div>

<style>
    p {
        margin: 20px;
    }
    .typewritterHeadingContainer {
        display: flex;
    }
    #typewritterHeading {
        font-weight: 900;
        margin-left: -5px;
    }
</style>