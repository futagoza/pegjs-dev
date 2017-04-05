"use strict";

const { exec } = require( "child_process" );
const { join } = require( "path" );

const cwd = join( __dirname, "..", "pegjs" );

exec( "npm publish", { cwd }, function printResult( err, stdout ) {

    if ( err ) {

        console.error( err.stack || err.message || err );
        process.exit( 1 );

    }

    if ( stdout ) process.stdout.write( stdout );

} );
