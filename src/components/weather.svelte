<script lang="ts" context="module">
    import axios from 'axios'; 
    const params = {
    access_key: 'b1c0719f6da3f0bc9cd0a13b456ce96f',
    query: 'Mosbach'
    }

axios.get('http://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
    console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log(error);
  });
</script>