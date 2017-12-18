"use strict";

const { lstat } = require( "fs" );
const { join } = require( "path" );
const rimraf = require( "rimraf" );

const pegjs = join( __dirname, "..", "packages", "pegjs" );

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
