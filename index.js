document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('resume-button').addEventListener('click', () => {
    document.getElementById('resume-container').classList.remove('hidden');
    document.getElementsByTagName('body')[0].classList.add('noscroll');
  })
  document.getElementById('resume-container').addEventListener('click', () => {
    document.getElementById('resume-container').classList.add('hidden');
    document.getElementsByTagName('body')[0].classList.remove('noscroll');
  })
  
  const sidebar = document.getElementById('sidebar');
  const sidebarLis = Array.from(sidebar.children);
  sidebarLis.map( li => new CoolScroll(li));
});




class CoolScroll {
  constructor(el){
    this.el = el;
    this.correspondent = document.getElementById(el.dataset.correspondent)
    this.bindEvents();
  }

  bindEvents() {
    this.el.addEventListener('click', () => {
      this.correspondent.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
