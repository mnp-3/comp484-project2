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
      document.getElementById("burp-sound").play();
      pet_info.happiness += 5 // Increase pet happiness
      pet_info.weight += 1 // Increase pet weight
      pet_info.energy += 5 // Increase energy
      animatePet(); //glow animation
      showNotification("Yummy!"); //Pet notification
      addToHistory(" ate a treat!"); //Activity log entry
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      document.getElementById("toy-sound").play();
      pet_info.happiness += 5 // Increase pet happiness
      pet_info.weight -= 1 // Decrease pet weight
      pet_info.energy -= 5 //Decrease energy
      animatePet(); //glow animation
      showNotification("Woof! Woof!"); //Pet notification
      addToHistory(" just played fetch!"); //Activity log entry
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      document.getElementById("fart-sound").play();
      pet_info.happiness -=3 // Decrease pet happiness
      pet_info.weight -=2 // Decrease pet weight
      pet_info.energy -= 5 // Decrease energy
      animatePet(); //glow animation
      showNotification("*panting*"); //Pet notification
      addToHistory(" exercised for 5 minutes."); //Activity log entry
      checkAndUpdatePetInfoInHtml();
    }

    function clickedRestButton() {
      document.getElementById("snore-sound").play();
      pet_info.energy += 20 //Increase energy
      pet_info.happiness += 5 //Increase happiness
      animatePet(); //glow animation
      showNotification("ZZZZZZZZ"); //Pet notification
      addToHistory(" slept for 2 hours."); //Activity log entry
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      if (pet_info.weight < 0 ) pet_info.weight = 0; // Add conditional so if weight is lower than zero.
      if (pet_info.energy > 100 ) pet_info.energy = 100; // Conditional so energy doesn't exceed 100%
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
    .delay(2000)
    .fadeOut(200);
    }

    /* .prepend() https://api.jquery.com/prepend/
    Inserts the specified content as the first child of each element in the jQuery collection
    Places new log entries at the top, so the most recent actions appear first
    */
    function addToHistory(actionText){
      $(".history-log").prepend("<p>" + pet_info['name'] + actionText + "<p>");
    }


    /* .removeClass() https://api.jquery.com/removeClass/ 
    Remove a single class or multiple classes from each element in the set of matched elements.
    This method is often used with .addClass() to switch elements' classes from one to another
    */
    function animatePet() {
      setTimeout(function() {
        $(".pet-image").addClass("glow"); //adds glow effect 
      });

      setTimeout(function() {
        $(".pet-image").removeClass("glow"); //removes glow effect after a second
      }, 1000);
    }
  