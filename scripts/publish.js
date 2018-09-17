"use strict";

const { exec } = require( "child_process" );
const { join } = require( "path" );

const cwd = join( __dirname, "..", "packages", "pegjs", "packages", "pegjs" );
const pegjs = require( join( cwd, "package.json" ) );

function run( command, callback ) {

    exec( command, { cwd }, function printResult( err, stdout ) {

        if ( err ) {

            console.error( err.stack || err.message || err );
            process.exit( 1 );

        }

        callback( Buffer.isBuffer( stdout ) ? stdout.toString( "utf8" ) : stdout );

    } );

}

run( "npm view pegjs@dev version", function publish( stdout ) {

    if ( pegjs.version === stdout.trim() ) return false;

    run( "npm publish --tag=dev", console.log.bind( console ) );

} );
