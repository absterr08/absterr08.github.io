import { bindComplimentStuff } from './les_knope/compliments.js';

document.addEventListener('DOMContentLoaded', () => {
  const tricky = document.getElementById('tricky-text');
  tricky.addEventListener('mouseover', () => {
    tricky.innerText = "(not a photographer but i took this photo!)";
  });
  tricky.addEventListener('mouseleave', () => {
    tricky.innerText = "Software Developer";
  });

  bindComplimentStuff();
});


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('about-me-button').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
  const $navDropdown = $(document.getElementById('nav-dropdown'));
  $navDropdown.hide();
  const navDropdownUl = document.getElementById('nav-dropdown-ul');
  const dropdownButton = document.getElementById('nav-dropdown-button');
  const closeModalButtons = document.getElementsByClassName('close-modal-button');
  const projects = document.getElementsByClassName('project-div');
  
  for (let button of closeModalButtons) {
    bindCloseModalButton(button);
  }
  for (let project of projects) {
    bindOpenProjectModals(project);
  }

  addDropdownFunctionality(dropdownButton, $navDropdown, navDropdownUl);

  const $lowerNav = $('.lower-nav');
  window.scrollY > 550 && $lowerNav.show();
  bindNavBar($lowerNav, $navDropdown);
});

function bindNavBar($el, navDropdown) {
  document.addEventListener('scroll', () => {
    if (window.scrollY > 550) {
      $el.fadeIn(150);
    } else {
      $el.fadeOut(150);
      navDropdown.is(':visible') && navDropdown.fadeOut(150);
    }
  });
}

function addDropdownFunctionality(dropdownButton, $navDropdown, dropdownUl) {
  dropdownButton.addEventListener('click', (e) => {
    $navDropdown.show();
    e.stopPropagation();
    document.addEventListener('click', (e) => {
      $navDropdown.hide();
    });
  });
  // dropdownButton.addEventListener('mouseleave', () => {
  //   navDropdown.classList.add('hidden');
  // });

  const dropdownLis = Array.from(dropdownUl.children);
  dropdownLis.forEach( li => {
    new CoolScroll(li);
    li.addEventListener('click', () => $navDropdown.hide());
  });
}

function bindCloseModalButton(button) {
  const $correspondent = $(document.getElementById(button.dataset.correspondent));
  button.addEventListener('click', () => {
    $correspondent.fadeOut(150);
    document.getElementsByTagName('body')[0].classList.remove('noscroll');
  });
}

function bindOpenProjectModals(project) {
  const $correspondent = $(document.getElementById(project.dataset.correspondent));
  project.addEventListener('click', () => {
    $correspondent.fadeIn(150);
    document.getElementsByTagName('body')[0].classList.add('noscroll');
  });
}

class CoolScroll {
  constructor(el){
    this.el = el;
    this.correspondent = document.getElementById(el.dataset.correspondent);
    this.bindEvents();
  }

  bindEvents() {
    this.el.addEventListener('click', () => {
      this.correspondent.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
    });
  }
}
