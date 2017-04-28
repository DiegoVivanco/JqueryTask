/**
 * Created by dlvivanco on 22/04/2017.
 */

// Función que Define draggables y droppables
$( function() {
        $( ".vigilante" ).draggable();
        $( "#puntoDeVigilancia" ).droppable({
            accept: ".vigilante",
            drop: function( event, ui ) {
                $( this ).css('background', '#55d532');
            },
            out: function (event, ui) {
                var self = ui;
                ui.helper.off('mouseup').on('mouseup', function () {
                    $('#puntoDeVigilancia').css('background', '#41d592');
                });
            }
        });
});

// Función que Define draggable y droppable
$( function() {
    $( "#supervivor" ).draggable({
        containment: '#planoEmpresa'
    });
    $( "#puntoDeSupervision" ).droppable({
        // validación que solo acepta el #supervisor
        accept: "#supervivor",
        // función que añade una clase cuando la acción es drop (dejar caer)
        drop: function( event, ui ) {
            $( this ).css('background', '#8a8c64');
        },
        // función que elimine una clase
        out: function (event, ui) {
            var self = ui;
            ui.helper.off('mouseup').on('mouseup', function () {
                $('#puntoDeSupervision').css('background', '#977AAD');
            });
        }
    });
} );


$( function() {
    $( "#puntoDeSupervision" ).draggable();
} );

$( function() {
    $( "#puntoDeVigilancia" ).draggable();
} );

$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
} );

$( function() {
    $( "#accordion" ).accordion();
} );
