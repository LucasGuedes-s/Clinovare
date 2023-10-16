// Função para rolar a página para o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Rolagem suave
  });
}

// Verifica a posição da página e mostra/oculta o botão flutuante
function checkScroll() {
  const btnTop = document.getElementById('btnTop');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
}

// Anexa um ouvinte de evento para verificar a posição da página ao rolar
window.addEventListener('scroll', checkScroll);

// Anexa um ouvinte de evento ao botão para rolar a página para o topo
document.getElementById('btnTop').addEventListener('click', scrollToTop);
