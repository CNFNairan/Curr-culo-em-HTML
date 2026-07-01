# Capítulo 15 - Validação de Formulários Avançada

## Autor

**Nome:** [Seu Nome Aqui]
**Disciplina:** Programação Web 1

## Sobre o Projeto

Este laboratório simula um sistema de inscrição acadêmica (IFAL) com foco pesado em experiência do usuário (UX) e segurança no frontend. O objetivo foi validar os dados em tempo real para guiar o usuário antes mesmo de ele clicar em "Enviar".

## Estrutura Modular

O JavaScript foi propositalmente dividido seguindo o padrão de separação de responsabilidades (Separation of Concerns):

- `util.js`: Contém funções exclusivas para manipulação da interface (DOM), como formatação de máscaras e aplicação de feedbacks visuais.
- `validacoes.js`: Contém a lógica de negócio pura. Funções que recebem um dado, calculam e retornam booleanos.
- `app.js`: O controlador principal. Escuta os eventos da tela e coordena a comunicação entre a interface (util) e a lógica (validacoes).

## Funcionalidades e Desafios Implementados

- Validação em tempo real (Eventos `input` e `change`).
- Cálculo dinâmico de idade mínima (16 anos) com a API `Date`.
- Máscara automática de telefone (Regex).
- Medidor de força de senha interativo.
- Preview de imagem local usando a `FileReader API`.
- **Desafio Bônus:** Salvamento automático de rascunho. Se o usuário fechar a página por acidente, o formulário recupera os dados usando o `localStorage`.
