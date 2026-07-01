// --- util.js: Manipulação de Interface e Ferramentas ---

// Aplica o feedback visual (borda verde/vermelha e mensagem)
function aplicarFeedbackVisual(elemento, condicao, msgErro) {
  const spanErro = document.getElementById("erro-" + elemento.id);
  if (condicao) {
    elemento.classList.remove("invalido");
    elemento.classList.add("valido");
    if (spanErro) spanErro.textContent = "";
    return true;
  } else {
    elemento.classList.remove("valido");
    elemento.classList.add("invalido");
    if (spanErro) spanErro.textContent = msgErro;
    return false;
  }
}

// Máscara para o telefone: (XX) XXXXX-XXXX
function formatarTelefone(valor) {
  let val = valor.replace(/\D/g, ""); // Remove não-números
  if (val.length > 11) val = val.substring(0, 11);
  if (val.length > 2) val = `(${val.substring(0, 2)}) ${val.substring(2)}`;
  if (val.length > 10) val = `${val.substring(0, 10)}-${val.substring(10)}`;
  return val;
}

// Atualiza o texto visual de força da senha
function atualizarUIForcaSenha(senha, isForte) {
  const forcaSpan = document.querySelector("#forca-senha span");
  if (isForte) {
    forcaSpan.textContent = "Forte";
    forcaSpan.style.color = "green";
  } else if (senha.length > 0) {
    forcaSpan.textContent = "Fraca (Falta número, maiúscula ou min. 8 chars)";
    forcaSpan.style.color = "red";
  } else {
    forcaSpan.textContent = "";
  }
}

// Gerenciamento de Backup (Desafio)
function salvarBackup(dados) {
  localStorage.setItem("formBackup", JSON.stringify(dados));
}

function carregarBackup() {
  return JSON.parse(localStorage.getItem("formBackup"));
}

function limparBackup() {
  localStorage.removeItem("formBackup");
}
