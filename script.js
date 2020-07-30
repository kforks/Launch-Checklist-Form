// Write your JavaScript code here!


window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
      }
      else if ( !isNaN(pilotInput.value) || !isNaN(copilotInput.value) ) {
         alert("Pilot or copilot name is invalid. Names must contain letters.");
      }
      else if ( isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value) ) {
         alert("Fuel level and cargo mass must be numbers.");
      }
      else if ( fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
         faultyItems.style.visibility = 'visible' ;
         document.getElementById("launchStatus").innerHTML = 'The shuttle is not ready.';
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("fuelStatus").innerHTML = "Fuel level too low.";
         document.getElementById("cargoStatus").innerHTML = "The shuttle is too heavy.";
      }
      else if ( fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = 'visible' ;
         document.getElementById("launchStatus").innerHTML = 'The shuttle is not ready.';
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("fuelStatus").innerHTML = "Fuel level too low.";
      }
      else if ( cargoMassInput.value > 10000) {
         faultyItems.style.visibility = 'visible' ;   
         document.getElementById("launchStatus").innerHTML = "The shuttle is not ready."
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("cargoStatus").innerHTML = "The shuttle is too heavy.";
      }
      else {
         faultyItems.style.visibility = 'visible'
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!";
         launchStatus.style.color = "green";
      }
      document.getElementById("pilotStatus").innerHTML =  `${pilotInput.value} ready!`
      document.getElementById("copilotStatus").innerHTML =  `${copilotInput.value} ready!`
      
   });
});


//JSON fetch for mission destination;
window.addEventListener("load", function() {  
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const mission = document.getElementById("missionTarget");
         mission.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">
         `;
      });
   });
});


//JSON fetch for mission destination;
// window.onLoad = function() {
//    console.log("noodles")
//    fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//       response.json().then( function(json) {
//          const mission = document.getElementById("missionTarget");

         

//          mission.innerHTML = `
//          <h2>Mission Destination</h2>
//          <ol>
//             <li>Name: ${json[0].name}</li>
//             <li>Diameter: ${json[0].diameter}</li>
//             <li>Star: ${json[0].star}</li>
//             <li>Distance from Earth: ${json[0].distance}</li>
//             <li>Number of Moons: ${json[0].moons}</li>
//          </ol>
//          <img src="${json[0].image}">
//          `;
//       });
//    });
// };


  
