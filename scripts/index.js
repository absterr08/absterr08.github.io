import { scrollEvent, testy } from './elementsView.js';

document.addEventListener('DOMContentLoaded', () => {
  const cares = document.getElementById('cares');
  // window.addEventListener('scroll', scrollEvent);
  const tricky = document.getElementById('tricky-text');
  tricky.addEventListener('mouseover', () => {
    tricky.innerText = "(not a photographer but i took this photo!)"
  })
  tricky.addEventListener('mouseleave', () => {
    tricky.innerText = "Software Engineer"
  })
})


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('about-me-button').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });

  const navDropdown = document.getElementById('nav-dropdown');
  const dropdownButton = document.getElementById('nav-dropdown-button');
  const closeModalButtons = document.getElementsByClassName('close-modal-button');
  const projects = document.getElementsByClassName('project-div');
  bindCloseModalButton(closeModalButtons[0]);
  bindOpenProjectModals(projects[0]);
  const b = document.getElementById('resume-button');
  const b2 = document.getElementById('resume-button-2');
  addResumeModal(b);
  addResumeModal(b2);
  addDropdownFunctionality(dropdownButton, navDropdown);

  const lowerNav = document.getElementById('lower-nav');
  const $lowerNav = $('.lower-nav');
  bindNavBar(lowerNav, $lowerNav);
});

function bindNavBar(lowerNav, $el) {
  document.addEventListener('scroll', () => {
    if (window.scrollY > 550) {
      // lowerNav.classList.remove('hidden');
      $el.fadeIn();

    } else {
      $el.fadeOut();
    }
  });
}



function addResumeModal(button) {
  button.addEventListener('click', () => {
    document.getElementById('resume-container').classList.remove('hidden');
    document.getElementsByTagName('body')[0].classList.add('noscroll');
  })
  document.getElementById('resume-container').addEventListener('click', () => {
    document.getElementById('resume-container').classList.add('hidden');
    document.getElementsByTagName('body')[0].classList.remove('noscroll');
  })
}

function addDropdownFunctionality(dropdownButton, navDropdown) {
  // const dropdown = document.getElementsByClassName('nav-dropdown')[0];
  dropdownButton.addEventListener('click', (e) => {
    navDropdown.classList.remove('hidden');
    e.stopPropagation();
    document.getElementsByTagName('body')[0].addEventListener('click', () => {
      navDropdown.classList.add('hidden');
    })
  });
  // dropdownButton.addEventListener('mouseleave', () => {
  //   navDropdown.classList.add('hidden');
  // });

  const dropdownLis = Array.from(navDropdown.children);
  dropdownLis.forEach( li => {
    new CoolScroll(li);
    li.addEventListener('click', () => navDropdown.classList.add('hidden'))
  });
}

function bindCloseModalButton(button) {
  const $correspondent = $(document.getElementById(button.dataset.correspondent));
  button.addEventListener('click', () => {
    $correspondent.fadeOut();
    document.getElementsByTagName('body')[0].classList.remove('noscroll');

  });
}

function bindOpenProjectModals(project) {
  const $correspondent = $(document.getElementById(project.dataset.correspondent));
  project.addEventListener('click', () => {
    $correspondent.fadeIn();
    document.getElementsByTagName('body')[0].classList.add('noscroll');

  });
}

class CoolScroll {
  constructor(el){
    this.el = el;
    this.correspondent = document.getElementById(el.dataset.correspondent)
    this.bindEvents();
  }

  bindEvents() {
    this.el.addEventListener('click', () => {
      this.correspondent.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
      // this.correspondent.scrollTop -= 35;
    });
  }
}
