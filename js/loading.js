/**
 * CARGANDO OBJECTO
 */
var Loading = ( function () {
	/** Constructor */
	function Loading () {}

	// Mostrar
	Loading.prototype.show = function () {
		// Muestra el loading
		$( '#loading' ).removeClass( 'out' ).addClass( 'in' );
	}

	// Ocultar
	Loading.prototype.hide = function () {
		// Time out
		setTimeout( function () {
			// Oculta el loading
			$( '#loading' ).removeClass( 'in' ).addClass( 'out' );
		} , 800 );
	}

	// Retorna el contructor
	return new Loading ;
} ) () ;