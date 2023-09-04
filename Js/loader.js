$(document).ready(function() {
    // Loader para reutilizar código html em outras páginas
    // Verificamos se o elemento com o ID "myDialog" existe na página
    if ($('#myDialog').length > 0) {
      // Usando o método .load() para carregar o conteúdo do arquivo externo
      $('#myDialog').load('index.html #myDialog'); // Carregando o elemento #myDialog da página index.html dentro da div
    }
});