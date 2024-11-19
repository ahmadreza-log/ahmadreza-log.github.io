import directories from '@/utils/directories'
import Cards from '@/components/cards'

export default async function Page() {
	const items = []
	directories( 'codes' ).map( item => items.push( item ) )

	return <div className={ 'container' }><Cards items={ items } /></div>
}