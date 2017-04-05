"use strict";

const { exec } = require( "child_process" );
const { join } = require( "path" );

const cwd = join( __dirname, "..", "pegjs" );

exec( "git rev-list v0.10.0..master", { cwd }, function printResult( err, stdout ) {

    if ( err ) {

        console.error( err.stack || err.message || err );
        process.exit( 1 );

    }

    const commits = stdout ? stdout.toString( "utf8" ) : "";

    if ( commits !== "" ) {

        // -1, as the above git command returns 1 extra result
        process.stdout.write( `${ --commits.split( "\n" ).length }` );

    }

} );
