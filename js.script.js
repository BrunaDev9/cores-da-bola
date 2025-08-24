document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os itens de lista de jogadoras
    const listaJogadoras = document.querySelectorAll('#elenco .list-unstyled li');
    
    // Seleciona os elementos do modal
    const modal = document.getElementById('modal-jogador');
    const modalImg = document.getElementById('modal-img');
    const modalNome = document.getElementById('modal-nome');
    const modalPosicao = document.getElementById('modal-posicao');
    const modalBiografia = document.getElementById('modal-biografia');
    const closeButton = document.querySelector('.close-button');

    // Adiciona um evento de clique a cada item da lista
    listaJogadoras.forEach(item => {
        item.addEventListener('click', function() {
            // Pega os dados do 'data-attributes' do item clicado
            const nome = this.getAttribute('data-nome');
            const posicao = this.getAttribute('data-posicao');
            const foto = this.getAttribute('data-foto');
            const biografia = this.getAttribute('data-biografia');

            // Preenche o modal com os dados
            modalNome.textContent = nome;
            modalPosicao.textContent = posicao;
            modalBiografia.textContent = biografia;
            modalImg.src = foto;
            modalImg.alt = `Foto de ${nome}`;

            // Exibe o modal
            modal.style.display = 'flex';
        });
    });

    // Adiciona um evento de clique no botão de fechar para esconder o modal
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Adiciona um evento para fechar o modal ao clicar fora dele
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});