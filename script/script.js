
// Tabla 1 //

function toggleTabList() {
  const content = document.getElementById('tabList');
  const arrow = document.getElementById('arrow');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
  arrow.textContent = content.style.display === 'none' ? '▼' : '▲';
}

// Tabla 2 //

function toggleTabList2() {
  const content = document.getElementById('tabList2');
  const arrow = document.getElementById('arrow2');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
  arrow.textContent = content.style.display === 'none' ? '▼' : '▲';
}

// Mini tablitas //

function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));
  document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');
}