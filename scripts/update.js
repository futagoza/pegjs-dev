"use strict";

const { exec } = require( "child_process" );
const { writeFileSync } = require( "fs" );
const { join } = require( "path" );
const { EOL } = require( "os" );

const cwd = join( __dirname, ".." );
const pegPackage = join( cwd, "packages", "pegjs", "package.json" );

exec( "node scripts/count", { cwd }, function printResult( err, stdout ) {

    if ( err ) {

        console.error( err.stack || err.message || err );
        process.exit( 1 );

    }

    const count = stdout ? stdout.toString( "utf8" ) : "";

    if ( count !== "" ) {

        const metaData = require( pegPackage );
        metaData.version = `${ metaData.version.split( "-" )[ 0 ] }-dev.${ count }`;
        writeFileSync( pegPackage, JSON.stringify( metaData, null, "  " ) + EOL );
        console.log( `Updated ${ pegPackage }` );

    }

} );
