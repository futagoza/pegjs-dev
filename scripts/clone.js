"use strict";

const { spawn } = require( "child_process" );
const { pegjs } = require( "../package.json" );
const { join } = require( "path" );

spawn( "git", [ "clone", pegjs.repository, "lib" ], {

    cwd: join( __dirname, ".." ),
    env: process.env,
    stdio: "inherit"

} )

.on( "error", function complete( err ) {

    console.error( err.stack || err.message || err );
    process.exit( 1 );

} );
