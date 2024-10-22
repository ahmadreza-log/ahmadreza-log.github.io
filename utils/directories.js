import path from 'path'
import fs from 'fs'

const directories = source => {
	source = path.join( process.cwd(), 'app/' + source )

	const folders = fs.readdirSync( source ).filter( name => {
		const folder   = path.join( source, name )
		const page     = path.join( folder, 'page.js' )
		const metadata = path.join( folder, 'metadata.json' )

		return fs.lstatSync( folder ).isDirectory() && fs.existsSync( page ) && fs.existsSync( metadata )
	} )

	const list = []

	for ( const folder of folders ) {
		const file     = path.join( source, folder, 'metadata.json' )
		const metadata = JSON.parse( fs.readFileSync( file, 'utf-8' ) )

		list.push( {
			path: `${ source.split( '\\' ).at( -1 ) }/${ folder }`,
			...metadata,
		} )
	}

	return list
}

export default directories