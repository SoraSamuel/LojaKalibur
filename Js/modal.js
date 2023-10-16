$(document).ready(function() {
    var toggleDialogBtn = $('#modalButton');
    var myDialog = $('#myDialog')[0];
    var closeDialogBtn = $('#closeButton');

    toggleDialogBtn.click(function() {
        if (myDialog.open) {
            // Adiciona a classe de animação de saída e fecha o modal
            $('#myDialog').addClass('slide-out');
            myDialog.close();
        } else {
            // Remove a classe de animação de saída, se ainda existir
            $('#myDialog').removeClass('slide-out');

            // Adiciona a classe de animação de entrada e abre o modal
            $('#myDialog').addClass('slide-in');
            myDialog.showModal();
        }
    });

    closeDialogBtn.click(function() {
        // Adiciona a classe de animação de saída e fecha o modal
        $('#myDialog').addClass('slide-out');
        myDialog.close();
    });

    $(document).on('click', function(event) { // Código para agir ao clicar fora do Modal
        if ($(event.target).is('#myDialog')) {
            // Adiciona a classe de animação de saída e fecha o modal
            $('#myDialog').addClass('slide-out');
            myDialog.close(); // Modal é fechado se a condição for verdadeira
        }
    });

    // O evento 'animationend' remove as classes de animação após a conclusão da animação
    $('#myDialog').on('animationend', function() {
        $('#myDialog').removeClass('slide-in slide-out');
    });
});

/* document.addEventListener('DOMContentLoaded', function() {
    var toggleDialogBtn = document.getElementById('modalButton');
    var myDialog = document.getElementById('myDialog');
    var closeDialogBtn = document.getElementById('closeButton');

    toggleDialogBtn.addEventListener('click', function() {
        if (myDialog.open) {
            // Adiciona a classe de animação de saída e fecha o modal
            myDialog.classList.add('slide-out');
            myDialog.close();
        } else {
            // Remove a classe de animação de saída, se ainda existir
            myDialog.classList.remove('slide-out');

            // Adiciona a classe de animação de entrada e abre o modal
            myDialog.classList.add('slide-in');
            myDialog.showModal();
        }
    });

    closeDialogBtn.addEventListener('click', function() {
        // Adiciona a classe de animação de saída e fecha o modal
        myDialog.classList.add('slide-out');
        myDialog.close();
    });

    document.addEventListener('click', function(event) {
        if (event.target === myDialog) {
            // Adiciona a classe de animação de saída e fecha o modal
            myDialog.classList.add('slide-out');
            myDialog.close();
        }
    });

    // O evento 'animationend' remove as classes de animação após a conclusão da animação
    myDialog.addEventListener('animationend', function() {
        myDialog.classList.remove('slide-in', 'slide-out');
    });
}); */
