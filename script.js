const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function() {
  bodyHalaman.classList.toggle('light-mode');
  if (bodyHalaman.classList.contains('light-mode')) {
    btnTema.textContent = '🌙 Mode Gelap';
  } else {
    btnTema.textContent = '🔆 Mode Terang';
  }
});

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function(event) {
  event.preventDefault();
  elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function() {
  elemenModal.classList.remove('show');
});

const btnSkills = document.querySelectorAll('.skill-badge');
const modalSkill = document.querySelector('#modalSkill');
const modalSkillTitle = document.querySelector('#modalSkillTitle');
const modalSkillInfo = document.querySelector('#modalSkillInfo');
const btnTutupModalSkill = document.querySelector('#btnTutupModalSkill');

btnSkills.forEach(badge => {
    badge.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const info = this.getAttribute('data-info');
        
        modalSkillTitle.textContent = title;
        modalSkillInfo.textContent = info;
        
        modalSkill.classList.add('show');
    });
});

btnTutupModalSkill.addEventListener('click', function() {
    modalSkill.classList.remove('show');
});

modalSkill.addEventListener('click', function(e) {
    if (e.target === modalSkill) {
        modalSkill.classList.remove('show');
    }
});