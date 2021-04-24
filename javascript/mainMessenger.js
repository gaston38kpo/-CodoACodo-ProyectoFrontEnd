// Si se hace click sobre el input de tipo checkbox con id recordar-id
$('#recordar-id').click(function() {
    // Si esta seleccionado (si la propiedad checked es igual a true)
    if ($(this).prop('checked')) {
        // Habilita cada input que tenga id auto-login
        $('#auto-login').prop('disabled', false);
    } else {
        // Deselecciona el que tenga id auto-login y lo deshabilita
        $('#auto-login').prop('disabled', true);
        $('#auto-login').prop('checked', false);
    }
});

