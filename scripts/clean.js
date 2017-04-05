"use strict";

const rimraf = require( "rimraf" );
const { lstat } = require( "fs" );

const pegjs = join( __dirname, "..", "pegjs" );

lstat( pegjs, function remove( err ) {

    if ( err ) {

        if ( err.code !== "ENOENT" ) {

            console.error( err.stack );
            process.exit( 1 );

        }

        process.exit( 0 );

    }

    rimraf( pegjs, function complete( err ) {

        if ( err ) {

            console.error( err.stack || err.message || err );
            process.exit( 1 );

        }

        console.log( `Removed "${ pegjs }"` );

    } );

} );
