const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.body;
const temaTersimpan = localStorage.getItem('tema');

bodyHalaman.classList.toggle('light-mode', temaTersimpan === 'terang');

function perbaruiTombolTema() {
  const modeTerang = bodyHalaman.classList.contains('light-mode');
  btnTema.textContent = modeTerang ? '🌙 Mode Gelap' : '🔆 Mode Terang';
  btnTema.setAttribute('aria-pressed', String(modeTerang));
}

perbaruiTombolTema();

btnTema.addEventListener('click', function() {
  bodyHalaman.classList.toggle('light-mode');
  localStorage.setItem(
    'tema',
    bodyHalaman.classList.contains('light-mode') ? 'terang' : 'gelap'
  );
  perbaruiTombolTema();
});

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

if (btnBukaModal && elemenModal && btnTutupModal) {
  btnBukaModal.addEventListener('click', function(event) {
    event.preventDefault();
    elemenModal.classList.add('show');
  });

  btnTutupModal.addEventListener('click', function() {
    elemenModal.classList.remove('show');
  });
}

const btnSkills = document.querySelectorAll('.skill-badge');
const modalSkill = document.querySelector('#modalSkill');
const modalSkillTitle = document.querySelector('#modalSkillTitle');
const modalSkillInfo = document.querySelector('#modalSkillInfo');
const btnTutupModalSkill = document.querySelector('#btnTutupModalSkill');

if (modalSkill && modalSkillTitle && modalSkillInfo && btnTutupModalSkill) {
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
}
