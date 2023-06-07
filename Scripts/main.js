function smoothScroll(event, target) {
    event.preventDefault();
    const offset = document.querySelector('.navbar').offsetHeight;
    const element = document.getElementById(target);
    const topPos = element.offsetTop - offset;
    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    });
  }


  // In development
  
const customMenu = document.getElementById('custom-menu');
function showCustomMenu(event) {
  event.preventDefault();
  const x = event.clientX;
  const y = event.clientY;
  customMenu.style.left = x + 'px';
  customMenu.style.top = y + 'px';
  customMenu.style.display = 'block';
}

function hideCustomMenu() {
  customMenu.style.display = 'none';
}
