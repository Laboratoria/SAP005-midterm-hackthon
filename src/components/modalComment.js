import { SaveComment } from '../services/index.js';

export function WriteComment() {
  let modal = '';
  const commentDiv = document.createElement('div');
  commentDiv.innerHTML = modal += `
          <div class="comment">
              <textarea type="text" id="commentText" placeholder="Escreva um comentário sobre esta filme para salvar na sua lista." required>
              <button class="btnConfirm">Confirmar</button>
              <button class="btnCancel">Cancelar</button>
          </div>
      `;

  const btnSaveComment = commentDiv.querySelector('#btnConfirm');
  const comment = commentDiv.querySelector('#commentText');

  btnSaveComment.addEventListener('click', (e) => {
    e.preventDefault();
    SaveComment(comment.value)
      .then(() => {
        alert('Filme adicionado a sua lista de Assistidos!');
      });
  });
}
