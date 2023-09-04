// Inicializamos uma variável para rastrear o número de itens no carrinho
let itemCount = 0;

// Seletor dos botões com a classe "comprar"
const addToCartBtns = document.querySelectorAll('.comprar');

// Seletor do badge
const badge = document.getElementById('badge');

// Adicione um ouvinte de eventos a todos os botões com a classe "comprar"
// Isso faz com que não apenas o primeiro botão mas todos os botões com a classe comprar sejam selecionados
// Também possível com Id's mas não é uma boa prática
addToCartBtns.forEach(function(button) {
    button.addEventListener('click', function() {
        // Aumente o contador de itens
        itemCount++;
        
        // Content adicionará um texto dentro da div badge
        // Atualize o valor do badge com o novo contador
        badge.textContent = itemCount;
        // E o botão também, mas como o elemento DOM específico a ser trabalhado é apenas o button
        button.textContent = 'Produto adicionado com sucesso!';
    });
});