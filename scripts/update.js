"use strict";

const { exec } = require( "child_process" );
const { readFileSync, writeFileSync } = require( "fs" );
const { join } = require( "path" );
const { EOL } = require( "os" );

const cwd = join( __dirname, ".." );

const pegREADME = join( cwd, "pegjs", "README.md" );
const devREADME = join( cwd, "src", "README.md" );

const pegPackage = join( cwd, "pegjs", "package.json" );
const devPackage = join( cwd, "src", "package.json" );

exec( "node scripts/count", { cwd }, function printResult( err, stdout ) {

    if ( err ) {

        console.error( err.stack || err.message || err );
        process.exit( 1 );

    }

    const count = stdout ? stdout.toString( "utf8" ) : "";

    if ( count !== "" ) {

        writeFileSync( pegREADME, readFileSync( devREADME, "utf8" ) );
        console.log( `Replaced ${ pegREADME }` );

        const metaData = Object.assign( require( pegPackage ), require( devPackage ) );
        metaData.version = `${ metaData.version.split( "-" )[ 0 ] }-${ count }`;
        writeFileSync( pegPackage, JSON.stringify( metaData, null, "  " ) + EOL );
        console.log( `Updated ${ pegPackage }` );

    }

} );
