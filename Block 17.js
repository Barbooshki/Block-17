class Numbers {
  constructor() {
    this.numbersList = document.getElementById('numbersList');
    this.numbers = [];
    this.interval = null;
    this.generateNumbers();
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generate random numbers from 0 to 99
  }

  addNumberToList(number) {
    const li = document.createElement('li');
    li.textContent = number;
    this.numbersList.appendChild(li);
  }

  generateNumbers() {
    this.interval = setInterval(() => {
      const number = this.generateRandomNumber();
      this.numbers.push(number);
      this.addNumberToList(number);

      if (this.numbers.length >= 10) {
        this.stopGeneratingNumbers();
      }
    }, 1000); // Generates a new number every second
  }

  stopGeneratingNumbers() {
    if (this.interval) {
      clearInterval(this.interval);
      alert('Stopped generating numbers. 10 numbers displayed.');
    }
  }
}

const numbersWorkshop = new Numbers();
