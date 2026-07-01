// --- app.js: Event Listeners e Fluxo Principal ---

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCadastro");

  // Mapeamento dos inputs
  const inputs = {
    nome: document.getElementById("nome"),
    email: document.getElementById("email"),
    telefone: document.getElementById("telefone"),
    data_nascimento: document.getElementById("data_nascimento"),
    senha: document.getElementById("senha"),
    confirmar_senha: document.getElementById("confirmar_senha"),
    mensagem: document.getElementById("mensagem"),
    foto: document.getElementById("foto"),
  };

  // 1. Restaurar Backup
  const backup = carregarBackup();
  if (backup) {
    inputs.nome.value = backup.nome || "";
    inputs.email.value = backup.email || "";
    inputs.telefone.value = backup.telefone || "";
    inputs.mensagem.value = backup.mensagem || "";
  }

  // 2. Salvar Backup ao digitar
  form.addEventListener("input", () => {
    salvarBackup({
      nome: inputs.nome.value,
      email: inputs.email.value,
      telefone: inputs.telefone.value,
      mensagem: inputs.mensagem.value,
    });
  });

  // 3. Validações em Tempo Real usando validacoes.js e util.js
  inputs.nome.addEventListener("input", function () {
    aplicarFeedbackVisual(
      this,
      isNomeValido(this.value),
      "O nome deve ter no mínimo 3 caracteres.",
    );
  });

  inputs.email.addEventListener("input", function () {
    aplicarFeedbackVisual(
      this,
      isEmailValido(this.value),
      "Insira um e-mail válido.",
    );
  });

  inputs.telefone.addEventListener("input", function (e) {
    const formatado = formatarTelefone(e.target.value);
    e.target.value = formatado;
    aplicarFeedbackVisual(
      this,
      formatado.length === 15,
      "Formato: (XX) XXXXX-XXXX",
    );
  });

  inputs.data_nascimento.addEventListener("change", function () {
    aplicarFeedbackVisual(
      this,
      isIdadeValida(this.value),
      "Você deve ter pelo menos 16 anos.",
    );
  });

  inputs.senha.addEventListener("input", function () {
    const forte = isSenhaForte(this.value);
    atualizarUIForcaSenha(this.value, forte);
    aplicarFeedbackVisual(
      this,
      forte,
      "A senha deve ter min. 8 caracteres, 1 maiúscula e 1 número.",
    );

    if (inputs.confirmar_senha.value) {
      aplicarFeedbackVisual(
        inputs.confirmar_senha,
        inputs.confirmar_senha.value === this.value,
        "As senhas não coincidem.",
      );
    }
  });

  inputs.confirmar_senha.addEventListener("input", function () {
    aplicarFeedbackVisual(
      this,
      this.value === inputs.senha.value && this.value !== "",
      "As senhas não coincidem.",
    );
  });

  // 4. Funcionalidades Extras (Toggle Senha, Contador e Preview)
  document
    .getElementById("btn-mostrar-senha")
    .addEventListener("click", function () {
      const tipo = inputs.senha.type === "password" ? "text" : "password";
      inputs.senha.type = tipo;
      inputs.confirmar_senha.type = tipo;
      this.textContent = tipo === "password" ? "Mostrar" : "Esconder";
    });

  inputs.mensagem.addEventListener("input", function () {
    const len = this.value.length;
    document.getElementById("char-count").textContent = len;
    aplicarFeedbackVisual(
      this,
      len >= 50 && len <= 500,
      "A mensagem deve ter entre 50 e 500 caracteres.",
    );
  });

  inputs.foto.addEventListener("change", function () {
    const file = this.files[0];
    const container = document.getElementById("preview-container");
    const img = document.getElementById("preview-img");

    if (
      file &&
      ["image/jpeg", "image/png"].includes(file.type) &&
      file.size <= 2097152
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
        container.style.display = "block";
      };
      reader.readAsDataURL(file);
      document.getElementById("erro-foto").textContent = "";
    } else {
      document.getElementById("erro-foto").textContent =
        "Apenas JPG/PNG até 2MB.";
      this.value = "";
      container.style.display = "none";
    }
  });

  // 5. Submit Final
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Verifica checkboxes de interesses
    const interesses = document.querySelectorAll(
      'input[name="interesses"]:checked',
    ).length;
    if (interesses < 2) {
      document.getElementById("erro-interesses").textContent =
        "Selecione pelo menos 2 áreas.";
      return;
    } else {
      document.getElementById("erro-interesses").textContent = "";
    }

    // Checa se há campos com a classe 'invalido'
    if (form.querySelectorAll(".invalido").length > 0) {
      alert("Corrija os campos destacados em vermelho.");
      return;
    }

    alert("Cadastro realizado com sucesso! 🎉");
    limparBackup();
    form.reset();
    form
      .querySelectorAll(".valido")
      .forEach((el) => el.classList.remove("valido"));
    document.getElementById("char-count").textContent = "0";
    atualizarUIForcaSenha("", false);
    document.getElementById("preview-container").style.display = "none";
  });
});
