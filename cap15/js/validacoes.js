// --- validacoes.js: Regras de Negócio e Lógica de Dados ---

function isNomeValido(nome) {
  return nome.trim().length >= 3;
}

function isEmailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isIdadeValida(dataNascimentoString) {
  if (!dataNascimentoString) return false;
  const hoje = new Date();
  const nascimento = new Date(dataNascimentoString);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();

  // Se ainda não fez aniversário esse ano, subtrai 1 da idade
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade >= 16;
}

function isSenhaForte(senha) {
  const temMaiuscula = /[A-Z]/.test(senha);
  const temNumero = /[0-9]/.test(senha);
  const tamanhoCerto = senha.length >= 8;
  return temMaiuscula && temNumero && tamanhoCerto;
}
