//Declaring an array named Planets
var planets = [
    { planetsName: "Mercury", weighs: 0.38 },
    { planetsName: "Venus", weighs: 0.91 },
    { planetsName: "Earth", weighs: 1 },
    { planetsName: "Mars", weighs: 0.38 },
    { planetsName: "Jupiter", weighs: 2.34 },
    { planetsName: "Saturn", weighs: 1.06 },
    { planetsName: "Uranus", weighs: 0.92 },
    { planetsName: "Neptune", weighs: 1.19 },
    { planetsName: "Pluto", weighs: 0.06 }
  ];
  
  //code to return correct weight
  function calculateWeight(userWeight, planetName) {
    for (var index = 0; index < planets.length; index++) {
      if (planets[index].planetsName == planetName) {
        return planets[index].weighs * userWeight;
      }
    }
  }
  
  // add an event listener for the change event
  const radioButtons = document.querySelectorAll('input[name="planet"]');
  for (const radioButton of radioButtons) {
    radioButton.addEventListener("change", showSelected);
  }
  
  function showSelected(e) {
    if (this.checked) {
      // Create a variable called planetName and assign the name of the selected planet
      var planetName = `${this.value}`;
      // Create a variable called userWeight and assign the value of the user's weight.
      var userWeight = document.getElementById("user-weight").value;
      // Create a variable called result and assign the value of the new calculated weight.
      var result = calculateWeight(userWeight, planetName);
      // Write code to display the output.
      document.getElementById("message").innerHTML =
        "If you were on " + planetName + ", you would weigh " + result + " Kgs!";
    }
  }
  