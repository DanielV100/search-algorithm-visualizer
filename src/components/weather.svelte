<script lang="ts" context="module">
    let latitude:string; 
    let longitude:string; 
    let weather:string; 

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(makeAPICall);
  } else { 
    
  }
}

function makeAPICall(position) {
    latitude = position.coords.latitude; 
    longitude = position.coords.longitude;
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`)
    .then(response => response.json())
    .then(data => {
        weather = data.current_weather.temperature + "°C"; 
        console.log(data.current_weather.temperature)
        document.getElementById("weather").innerHTML = weather;
    })
    .catch(error => console.error(error));
}
getLocation(); 
</script>
<p id="weather"></p>