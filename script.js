$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.rest-button').click(clickedRestButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Pumba", weight:18, happiness:80, energy:60};
  
    function clickedTreatButton() {
      pet_info.happiness += 5 // Increase pet happiness
      pet_info.weight += 1 // Increase pet weight
      pet_info.energy += 5
      showNotification("Delicious");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      pet_info.happiness += 5 // Increase pet happiness
      pet_info.weight -= 1// Decrease pet weight
      pet_info.energy -= 5
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      pet_info.happiness -=3 // Decrease pet happiness
      pet_info.weight -=2 // Decrease pet weight
      pet_info.energy -= 5
      checkAndUpdatePetInfoInHtml();
    }

    function clickedRestButton() {
      pet_info.energy += 20
      pet_info.happiness += 5 
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight < 0 ) pet_info.weight = 0;
      if (pet_info.energy > 100 ) pet_info.energy = 100;
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.energy').text(pet_info['energy']);
    }

    function showNotification(message) {
      $('.notification').text(message)
    .fadeIn(200)
    .delay(1000)
    .fadeOut(200);
    }
  