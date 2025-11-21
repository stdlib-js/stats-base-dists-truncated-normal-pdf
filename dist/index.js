/** @license Apache-2.0 */

'use strict';

/**
* Truncated normal distribution probability density function (PDF).
*
* @module @stdlib/stats-base-dists-truncated-normal-pdf
*
* @example
* var pdf = require( '@stdlib/stats-base-dists-truncated-normal-pdf' );
*
* var y = pdf( 0.9, 0.0, 1.0, 0.0, 1.0 );
* // returns ~0.7795
*
* var mypdf = pdf.factory( -1.0, 1.0, 0.0, 1.0 );
* y = mypdf( 0.9 );
* // returns ~0.390
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
