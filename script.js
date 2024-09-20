class NumberRandomizer {
    constructor(element) {
      this.element = element;
    }
  
    // Function to generate a random number between 1 and 9
    getRandomNumber() {
      return Math.floor(Math.random() * 9) + 1;
    }
  
    // Start randomizing numbers and stop after 2 seconds
    startRandomizing(finalNumber) {
      const interval = setInterval(() => {
        this.element.textContent = this.getRandomNumber();
      }, 100);
  
      setTimeout(() => {
        clearInterval(interval);
        this.element.textContent = finalNumber; // Change to the desired final number
      }, 2000);
    }
  }
  
  // Create instances for each number box
  const numberBoxes = document.querySelectorAll('.number-box');
  const randomizers = Array.from(numberBoxes).map(
    (box) => new NumberRandomizer(box)
  );
  
  // Function to randomize all number boxes
  function randomizeAll() {
    randomizers.forEach((randomizer) => {
        console.log(randomizer)
      randomizer.startRandomizing(Math.floor(Math.random() * 9) + 1); // Set final number randomly or as needed
    });
  }
  