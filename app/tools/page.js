import Link from 'next/link'
import directories from '@/utils/directories'
import Card from '@/components/card'

export default async function Page() {
	const items = []
	directories( 'tools' ).map( item => items.push( item ) )

	return <div className={ 'container' }>
		<div className={ 'grid grid-cols-3' }>
			{ items.map( ( item, index ) => <div key={ index }>
				<Card title={ item.title } description={ item.description } categories={ item.categories } path={ item.path } />
			</div> ) }
		</div>
	</div>
}