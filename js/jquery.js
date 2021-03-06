/**
 * Created by dlvivanco on 22/04/2017.
 */

$( function() {                                     /* función que Define draggable y droppable */
    $( ".vigilante" ).draggable();                  /* define un draggable */
    $( "#puntoDeVigilancia" ).droppable({           /* define un droppable */
        accept: ".vigilante",                       /* Validación que solo acepta ".vigilante" */
        drop: function( event, ui ) {               /* función que cambia el color cuando cae el elemento*/
            $( this ).css('background', '#55d532'); /* cambia el valor de la variable background del css */
        },
        out: function (event, ui) {                 /* función que cambia el color cuando el elemento está fuera */
            ui.helper.off('mouseup').on('mouseup', function () {
                $('#puntoDeVigilancia').css('background', '#41d592'); /* cambia el valor de la variable background */
            });
        }
    });
});

$( function() {                                     /* función que Define draggable y droppable */
    $( "#supervivor" ).draggable({                  /* define un draggable */
        containment: '#planoEmpresa'                /* determina que solo puede moverse dentro de "#planoEmpresa" */
    });
    $( "#puntoDeSupervision" ).droppable({          /* define un droppable */
        accept: "#supervivor",                      /* Validación que solo acepta ".vigilante" */
        drop: function( event, ui ) {               /* función que cambia el color cuando cae el elemento*/
            $( this ).css('background', '#8a8c64'); /* cambia el valor de la variable background del css */
        },
        out: function (event, ui) {                 /* función que cambia el color cuando el elemento está fuera */
            ui.helper.off('mouseup').on('mouseup', function () {
                $('#puntoDeSupervision').css('background', '#977AAD'); /* cambia el valor de la variable background */
            });
        }
    });
} );

$( function() {
    $( "#puntoDeSupervision" ).draggable();         /* función que define un draggable */
} );

$( function() {
    $( "#puntoDeVigilancia" ).draggable();          /* función que define un draggable */
} );

$( function() {
    $( "#sortable" ).sortable();                    /* función que define un sortable */
    $( "#sortable" ).disableSelection();            /* Desabilita la selección dentro del elemento */
} );

$( function() {
    $( "#accordion" ).accordion({                    /* función que define un accordion */
        active: false,
        collapsible: true
    });
} );

$( function() {
    $( "#menu" ).menu();                            /* función que define un menu */
} );

$( function() {
    $( "#tabs" ).tabs();                            /* función que define tabs */
} );

$(function () {                                     /* función que abre la puerta del departamento ventas */
    $("#abrirVentas").click(function () {
        $("#puertaVentasCerrada").slideUp(4000);
    });
});

$(function () {                                     /* función que detiene el movimiento de la puerta del departamento ventas */
    $("#detenerVentas").click(function () {
        $("#puertaVentasCerrada").stop();
    });
});


$(function () {                                     /* función que cierra la puerta del departamento de ventas */
    $("#cerrarVentas").click(function () {
        $("#puertaVentasCerrada").slideDown(4000);
    });
});

$(function () {                                     /* función que abre la puerta interior */
    $("#abrirInterior").click(function () {
        $("#puertaInteriorCerrada").hide();
    });
});

$(function () {                                     /* función que cierra la puerta interior */
    $("#cerrarInterior").click(function () {
        $("#puertaInteriorCerrada").show();
    });
});

$(function () {                                     /* función que abre la puerta del almacen */
    $("#abrirAlmacen").click(function () {
        $("#puertaAlmacenCerrada").fadeOut(4000);
    });
});

$(function () {                                     /* función que detiene el movimiento de la puerta del almacen */
    $("#detenerAlmacen").click(function () {
        $("#puertaAlmacenCerrada").stop();
    });
});

$(function () {                                     /* función que cierra la puerta del almacen */
    $("#cerrarAlmacen").click(function () {
        $("#puertaAlmacenCerrada").fadeIn(4000);
    });
});

$( function() {
    $( ".controlgroup" ).controlgroup();            /* función que define un control */
} );


$(function () {
    $("#control").buttonset();                      /* función que define un conjunto de bottones */

    $("input[type='radio']").on("change", function () { /* función que se activa cuando se cambia de input tipo radio */

        if ($(".camaraApagada").css('display') == 'none') {
            $('.camaraApagada').css('display', 'block');
        } else {
            $('.camaraApagada').css('display', 'none');
        }
    });

});


