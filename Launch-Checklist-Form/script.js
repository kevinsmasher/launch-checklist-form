
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/




window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         let planetName = json[0].name;
         let planetDiameter = json[0].diameter;
         let planetStar = json[0].star;
         let planetDistance = json[0].distance;
         let planetImage = json[0].image;
         let planetMoons = json[0].moons;
         document.getElementById("missionTarget").innerHTML = `<h2>Mission Destination</h2> <ol> <li>Name: ${planetName}</li><li>Diameter: ${planetDiameter}</li> <li>Star: ${planetStar}</li><li>Distance from Earth: ${planetDistance}</li><li>Number of Moons: ${planetMoons}</li></ol><img src= '${planetImage}'>`;
      });
   });
});




let massNumber = window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let cargoMassInput = document.querySelector("input[name=cargoMass]")
      if (isNaN(cargoMassInput.value) === true) {
         alert("Make sure to enter valid information in each field!");
            event.preventDefault();
      }
   });
});

let fuelNumber = window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
      if (isNaN(fuelLevelInput.value) === true) {
         alert("Make sure to enter valid information in each field!");
            event.preventDefault();
      }
   });
});



let fuelLow = window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
      if (fuelLevelInput.value < 10000) {
         document.getElementById("faultyItems").style.visibility = 'visible';
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = 'red';
         document.getElementById("fuelStatus").innerHTML = "Fuel level too low!";
         event.preventDefault();
      }
   });
});

let cargoHigh = window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let cargoMassInput = document.querySelector("input[name=cargoMass]")
      if (cargoMassInput.value > 10000) {
         document.getElementById("faultyItems").style.visibility = 'visible';
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = 'red';
         document.getElementById("cargoStatus").innerHTML = "Too much cargo!";
         event.preventDefault();
      }
   });
});

let readyToLaunch = window.addEventListener("load", function() {
   let form = this.document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let cargoMassInput = document.querySelector("input[name=cargoMass]")
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
      let pilotNameInput = document.querySelector("input[name=pilotName]")
      let copilotNameInput = document.querySelector("input[name=copilotName]")
      if (isNaN(pilotNameInput.value) === true && isNaN(copilotNameInput.value) === true && cargoMassInput.value < 10000 && fuelLevelInput.value > 10000) {
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
         document.getElementById("launchStatus").style.color = 'green';
         document.getElementById("faultyItems").style.visibility = 'hidden';
         event.preventDefault();
      }
   })
})
// If the shuttle is ready to launch, change the text of launchStatus to green and display
//  "Shuttle is ready for launch".




let pilotString = window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]")
      if (isNaN(pilotNameInput.value) === false) {
         alert("Make sure to enter valid information in each field!");
            event.preventDefault();
      }
   });
});

let copilotString = window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let copilotNameInput = document.querySelector("input[name=copilotName]")
      if (isNaN(copilotNameInput.value) === false) {
         alert("Make sure to enter valid information in each field!");
            event.preventDefault();
      }
   });
});






window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]")
      let copilotNameInput = document.querySelector("input[name=copilotName]")
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
      let cargoMassInput = document.querySelector("input[name=cargoMass]")
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
            event.preventDefault();
      } massNumber();
        fuelNumber();
        fuelLow();
        cargoHigh();
        pilotString();
        copilotString();
        readyToLaunch();
   });
})