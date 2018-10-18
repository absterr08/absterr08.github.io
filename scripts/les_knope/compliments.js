const leslieCompliments = [
"you beautiful, talented, brillinat, powerful musk ox!",
"you opalescent tree shark.",
"you poetic and noble land mermaid!",
"you beautiful, tropical fish!",
"you beautiful, naive, sophisticated new born baby!",
"you rainbow-infused space shark!",
"you cunning, pliable, chestnut-haired sunfish!",
"you beautiful, rule-breaking moth.",
"you beautiful spinster!",
"you perfect sunflower.",
"you tricky minx!",
"you are the most beautiful, glowing sun goddess ever.",
"you beautiful, sassy mannequin come to life!"
];

class KnopeComplimentGenerator {
  constructor(button, nameInput, complimentEl) {
    this.complimentTracker = new Set();
    this.nameInput = nameInput;
    this.complimentEl = complimentEl;
    const complimentContainer = document.getElementById('compliment-container');
    [nameInput, button, complimentContainer].forEach(el => {
      el.addEventListener('click', e => e.stopPropagation());
    });
    button.addEventListener('click', this.compliment.bind(this));
  }

  compliment() {
    const name = this.nameInput.value;
    const compliment = this.getComplimentFromList();
    this.complimentEl.innerHTML = (`${name}, ${compliment}`);
  }

  getComplimentFromList() {
    if (this.complimentTracker.size === leslieCompliments.length) {
      this.complimentTracker.clear();
    }

    let idx = Math.floor(Math.random() * leslieCompliments.length);
    while (this.complimentTracker.has(idx)) {
      idx = Math.floor(Math.random() * leslieCompliments.length);
    }

    this.complimentTracker.add(idx);
    this.numComplimentsGiven ++;
    return leslieCompliments[idx];
  }

  clear() {
    this.complimentEl.innerHTML = "";
    this.nameInput.value = "";
  }

}

function bindCompButton(button, background) {
  button.addEventListener('click', () => {
    console.log(background);
    $(background).fadeIn();
    document.getElementsByTagName('body')[0].classList.add('noscroll');
  });
}

const createComplimentGenerator = () => {
  const lesComplimentButton = document.getElementById('les-compliment-button');
  const nameInput = document.getElementById('name');
  const complimentEl = document.getElementById('compliment');
  return new KnopeComplimentGenerator(lesComplimentButton, nameInput, complimentEl);
};

export const bindComplimentStuff = () => {
  const buttons = document.getElementsByClassName('les-knope');
  const background = document.getElementById('compliment-modal-background');
  Array.from(buttons).forEach( (button) => bindCompButton(button, background));
  const comp = createComplimentGenerator();
  background.addEventListener('click', () => {
    $(background).fadeOut();
    document.getElementsByTagName('body')[0].classList.remove('noscroll');
    comp.clear();
  });
};
