"use strict";

const { spawn } = require( "child_process" );
const { join } = require( "path" );

spawn( "git", [ "clone", "https://github.com/pegjs/pegjs.git", "lib" ], {

    cwd: join( __dirname, ".." ),
    env: process.env,
    stdio: "inherit"

} )

.on( "error", function complete( err ) {

    console.error( err.stack || err.message || err );
    process.exit( 1 );

} );
