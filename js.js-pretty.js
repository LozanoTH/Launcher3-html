const apps = [{
  name: 'Telefono',
  icon: '<circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>',
  color: '#34A0A4'
}, {
  name: 'Mensajes',
  icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
  color: '#4C6EF5'
}, {
  name: 'Camera',
  icon: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
  color: '#ADB5BD'
}, {
  name: 'Fotos',
  icon: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
  color: '#E599F7'
}, {
  name: 'Musica',
  icon: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
  color: '#9775FA'
}, {
  name: 'Chrome',
  icon: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
  color: '#22B8CF'
}, {
  name: 'Gmail',
  icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
  color: '#FA5252'
}, {
  name: 'Reloj',
  icon: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
  color: '#868E96'
}, {
  name: 'Google maps',
  icon: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
  color: '#51CF66'
}, {
  name: 'Weather',
  icon: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
  color: '#74C0FC'
}, {
  name: 'Notas',
  icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
  color: '#FCC419'
}, {
  name: 'Calculator',
  icon: '<rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="16" y2="10"></line><line x1="8" y1="14" x2="16" y2="14"></line><line x1="8" y1="18" x2="16" y2="18"></line>',
  color: '#845EF7'
}, {
  name: 'Ajustes',
  icon: '<circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6m5.2-13.2l-3.4 3.4m-3.4 3.4l-3.4 3.4M23 12h-6m-6 0H1m18.2 5.2l-3.4-3.4m-3.4-3.4l-3.4-3.4"></path>',
  color: '#495057'
}, {
  name: 'Health',
  icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
  color: '#F06595'
}, {
  name: 'Billetera',
  icon: '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4z"></path>',
  color: '#40C057'
}, {
  name: 'Calendario',
  icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
  color: '#5C7CFA'
}];
let startY = 0;
let currentY = 0;
let isDragging = false;
let drawerOpen = false;
function init() {
  renderApps();
  updateTime();
  setupGestures();
  setInterval(updateTime, 1000);
  setTimeout(() => {
    document.getElementById('gestureIndicator').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('gestureIndicator').style.display = 'none';
    }, 300);
  }, 5000);
}
function createAppIcon(app, isDock = false) {
  const appDiv = document.createElement('div');
  appDiv.className = 'app-icon';
  appDiv.setAttribute('data-name', app.name.toLowerCase());
  appDiv.innerHTML = `
                <div class="icon-container" style="background: ${app.color}">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="2">${app.icon}</svg>
                </div>
                ${!isDock ? `<span class="app-name">${app.name}</span>` : ''}
            `;
  appDiv.addEventListener('click', e => {
    e.stopPropagation();
    openApp(app);
  });
  return appDiv;
}
function renderApps() {
  const appsGrid = document.getElementById('appsGrid');
  const dock = document.getElementById('dock');
  const drawerApps = document.getElementById('drawerApps');
  appsGrid.innerHTML = '';
  dock.innerHTML = '';
  drawerApps.innerHTML = '';
  apps.slice(0, 8).forEach(app => {
    appsGrid.appendChild(createAppIcon(app));
  });
  apps.slice(0, 4).forEach(app => {
    dock.appendChild(createAppIcon(app, true));
  });
  apps.forEach(app => {
    drawerApps.appendChild(createAppIcon(app));
  });
}
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}`;
}
function openApp(app) {
  const modal = document.getElementById('appModal');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  modalIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2">${app.icon}</svg>`;
  modalIcon.style.background = app.color;
  modalTitle.textContent = app.name;
  modal.classList.add('active');
  document.getElementById('dock').classList.add('hidden');
}
function closeModal() {
  const modal = document.getElementById('appModal');
  modal.classList.remove('active');
  document.getElementById('dock').classList.remove('hidden');
}
function setupGestures() {
  const drawer = document.getElementById('appDrawer');
  const modal = document.getElementById('appModal');
  const dock = document.getElementById('dock');
  const searchContainer = document.querySelector('.search-container');
  document.addEventListener('touchstart', handleTouchStart, {
    passive: false
  });
  document.addEventListener('touchmove', handleTouchMove, {
    passive: false
  });
  document.addEventListener('touchend', handleTouchEnd);
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseEnd);
  modal.addEventListener('touchstart', handleModalTouchStart);
  modal.addEventListener('touchmove', handleModalTouchMove);
  modal.addEventListener('touchend', handleModalTouchEnd);
  document.getElementById('searchInput').addEventListener('input', e => {
    const query = e.target.value.toLowerCase();
    const apps = document.querySelectorAll('.drawer-apps .app-icon');
    apps.forEach(appDiv => {
      const appName = appDiv.getAttribute('data-name');
      if (appName.includes(query)) {
        appDiv.style.display = 'flex';
      } else {
        appDiv.style.display = 'none';
      }
    });
    if (query && !drawerOpen) {
      openDrawer();
    }
  });
  function handleTouchStart(e) {
    if (drawerOpen || e.target.closest('.app-modal')) return;
    startY = e.touches[0].clientY;
    currentY = startY;
    isDragging = true;
    if (startY > window.innerHeight - 200) {
      searchContainer.style.transform = 'translateY(-20px)';
    }
  }
  function handleTouchMove(e) {
    if (!isDragging) return;
    currentY = e.touches[0].clientY;
    const deltaY = startY - currentY;
    if (startY > window.innerHeight - 200 && deltaY > 0) {
      e.preventDefault();
      const progress = Math.min(deltaY / 300, 1);
      drawer.style.transform = `translateY(${100 - progress * 100}%)`;
    }
  }
  function handleTouchEnd() {
    if (!isDragging) return;
    const deltaY = startY - currentY;
    if (deltaY > 100 && startY > window.innerHeight - 200) {
      openDrawer();
    } else {
      closeDrawer();
    }
    searchContainer.style.transform = 'translateY(0)';
    isDragging = false;
  }
  function handleMouseDown(e) {
    if (drawerOpen || e.target.closest('.app-modal')) return;
    startY = e.clientY;
    currentY = startY;
    isDragging = true;
  }
  function handleMouseMove(e) {
    if (!isDragging) return;
    currentY = e.clientY;
    const deltaY = startY - currentY;
    if (startY > window.innerHeight - 200 && deltaY > 0) {
      const progress = Math.min(deltaY / 300, 1);
      drawer.style.transform = `translateY(${100 - progress * 100}%)`;
    }
  }
  function handleMouseEnd() {
    if (!isDragging) return;
    const deltaY = startY - currentY;
    if (deltaY > 100 && startY > window.innerHeight - 200) {
      openDrawer();
    } else {
      closeDrawer();
    }
    isDragging = false;
  }
  let modalStartY = 0;
  function handleModalTouchStart(e) {
    modalStartY = e.touches[0].clientY;
  }
  function handleModalTouchMove(e) {
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - modalStartY;
    if (deltaY > 0) {
      modal.style.opacity = `${1 - deltaY / 300}`;
    }
  }
  function handleModalTouchEnd(e) {
    const currentY = e.changedTouches[0].clientY;
    const deltaY = currentY - modalStartY;
    if (deltaY > 100) {
      closeModal();
    } else {
      modal.style.opacity = '1';
    }
  }
}
function openDrawer() {
  const drawer = document.getElementById('appDrawer');
  const dock = document.getElementById('dock');
  const searchContainer = document.querySelector('.search-container');
  drawer.classList.add('active');
  dock.classList.add('hidden');
  searchContainer.style.transform = 'translateY(-100px)';
  drawerOpen = true;
  document.getElementById('gestureIndicator').style.display = 'none';
}
function closeDrawer() {
  const drawer = document.getElementById('appDrawer');
  const dock = document.getElementById('dock');
  const searchContainer = document.querySelector('.search-container');
  drawer.classList.remove('active');
  dock.classList.remove('hidden');
  searchContainer.style.transform = 'translateY(0)';
  drawerOpen = false;
  document.getElementById('searchInput').value = '';
  const apps = document.querySelectorAll('.drawer-apps .app-icon');
  apps.forEach(app => app.style.display = 'flex');
}
window.addEventListener('DOMContentLoaded', init);
