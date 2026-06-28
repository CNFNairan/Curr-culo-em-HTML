// --- ESTADOS INICIAIS (Para a funcionalidade de restaurar perfil) ---
const NOME_ORIGINAL = "Cauê Nairan Ferreira";
const CURSO_ORIGINAL = "Sistemas de Informação";
const FOTO_ORIGINAL = "imagens/fotooriginal.png";

// --- VARIÁVEIS DE ESTATÍSTICA ---
let totalAcoes = 0;
const contadorElemento = document.getElementById("contador-acoes");
const ultimaAcaoElemento = document.getElementById("ultima-acao");

// Função auxiliar (Funcionalidade 10) para centralizar a contagem
function registrarAcao(descricao) {
  totalAcoes++;
  contadorElemento.textContent = totalAcoes;
  ultimaAcaoElemento.textContent = descricao;
}

// --- VARIÁVEIS CÍCLICAS (Listas de opções e contadores) ---
const listaNomes = ["Maria Oliveira", "João Pedro", "Ana Clara", NOME_ORIGINAL];
let indiceNome = 0;

const listaCursos = [
  "Ciência da Computação",
  "Engenharia de Software",
  "Design Digital",
  CURSO_ORIGINAL,
];
let indiceCurso = 0;

const listaFotos = ["imagens/foto1.jpg", "imagens/foto2.jpg", FOTO_ORIGINAL];
let indiceFoto = 0;

// --- FUNCIONALIDADE 1: Alterar Nome (Cíclico) ---
document.getElementById("btn-alterar-nome").addEventListener("click", () => {
  document.getElementById("nome-perfil").textContent = listaNomes[indiceNome];

  // A matemática mágica aqui faz o índice voltar a 0 quando chega no limite da lista
  indiceNome = (indiceNome + 1) % listaNomes.length;
  registrarAcao("Alteração de nome");
});

// --- FUNCIONALIDADE 2: Alterar Curso (Cíclico) ---
document.getElementById("btn-alterar-curso").addEventListener("click", () => {
  document.getElementById("curso-perfil").textContent =
    listaCursos[indiceCurso];

  indiceCurso = (indiceCurso + 1) % listaCursos.length;
  registrarAcao("Alteração de curso");
});

// --- FUNCIONALIDADE 3: Alterar Foto (Cíclico) ---
document.getElementById("btn-alterar-foto").addEventListener("click", () => {
  document.getElementById("foto-perfil").src = listaFotos[indiceFoto];

  indiceFoto = (indiceFoto + 1) % listaFotos.length;
  registrarAcao("Alteração de foto");
});

// --- FUNCIONALIDADE 4: Destacar Perfil ---
document.getElementById("btn-destacar").addEventListener("click", () => {
  document.getElementById("perfil-card").classList.add("perfil-destaque");
  registrarAcao("Perfil destacado");
});

// --- FUNCIONALIDADE 5: Restaurar Perfil ---
document.getElementById("btn-restaurar").addEventListener("click", () => {
  document.getElementById("nome-perfil").textContent = NOME_ORIGINAL;
  document.getElementById("curso-perfil").textContent = CURSO_ORIGINAL;
  document.getElementById("foto-perfil").src = FOTO_ORIGINAL;
  document.getElementById("perfil-card").classList.remove("perfil-destaque");
  registrarAcao("Restauração do perfil original");
});

// --- FUNCIONALIDADE 6: Alterar Tema da Página ---
document.getElementById("select-tema").addEventListener("change", (evento) => {
  // Altera a classe do <body> para aplicar o tema correspondente do CSS
  document.body.className = evento.target.value;
  registrarAcao(
    `Tema alterado para: ${evento.target.options[evento.target.selectedIndex].text}`,
  );
});

// --- FUNCIONALIDADE 7: Controle de Tamanho da Fonte ---
const rangeFonte = document.getElementById("range-fonte");

// 1. O evento 'input' muda o CSS e o número da tela em tempo real
rangeFonte.addEventListener("input", (evento) => {
  const tamanho = evento.target.value;
  document.getElementById("texto-biografia").style.fontSize = `${tamanho}px`;
  document.getElementById("valor-fonte").textContent = `${tamanho}px`;
});

// 2. O evento 'change' só registra a ação nas estatísticas quando você solta o botão do mouse
rangeFonte.addEventListener("change", () => {
  registrarAcao("Tamanho da fonte ajustado");
});

// --- FUNCIONALIDADE 8: Exibir ou Ocultar Biografia ---
document
  .getElementById("check-biografia")
  .addEventListener("change", (evento) => {
    const biografia = document.getElementById("texto-biografia");
    if (evento.target.checked) {
      biografia.style.display = "block";
      registrarAcao("Biografia exibida");
    } else {
      biografia.style.display = "none";
      registrarAcao("Biografia ocultada");
    }
  });

// --- FUNCIONALIDADE 9: Atualizar Informações de Contato ---
document
  .getElementById("btn-atualizar-contato")
  .addEventListener("click", () => {
    const novoEmail = document.getElementById("input-email").value;
    const novoTelefone = document.getElementById("input-telefone").value;

    // Validação simples (Desafio Extra)
    if (novoEmail === "" || novoTelefone === "") {
      alert("Preencha o e-mail e o telefone para atualizar!");
      return;
    }

    document.getElementById("resumo-email").textContent = novoEmail;
    document.getElementById("resumo-telefone").textContent = novoTelefone;

    // Limpa os campos após atualização
    document.getElementById("input-email").value = "";
    document.getElementById("input-telefone").value = "";

    registrarAcao("Informações de contato atualizadas");
  });
