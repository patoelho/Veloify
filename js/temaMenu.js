function trocarTema() {
    const checkbox = document.getElementById('tema-toggle');
    const nome = document.getElementById('lightDark');
    const tema = document.getElementById('tema-nome');
    nome.textContent = checkbox.checked ? "Escuro" : "Claro";
    const body = document.body;
  
    if (checkbox.checked) {
      body.classList.add('dark');
      tema.textContent = 'Escuro';
    } else {
      body.classList.remove('dark');
      tema.textContent = 'Claro';
    }
}
  