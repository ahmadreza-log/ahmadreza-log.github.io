import Card from '@/components/card'

export default function Cards( { items } ) {
	return items.length > 0 ? <div className={ 'grid grid-cols-3 gap-8' }>
		{ items.map( ( item, index ) => <div key={ index } className={ 'h-fit' }>
			<Card title={ item.title } description={ item.description } categories={ item.categories } path={ item.path } />
		</div> ) }
	</div> : <div className={ 'text-center bg-slate-800 rounded-lg p-12 shadow-[inset_0_1px_0_0_#ffffff0d] h-full' }>
		<p className={ 'text-9xl' }>☹️</p>
		<span className={ 'capitalize' }>There are no tools here, I will create it soon.</span>
	</div>
}