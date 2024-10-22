import directories from '@/utils/directories'
import Link from 'next/link'

export default async function Card( { path, title, categories, description } ) {
	return (
		<Link href={ path } className={ 'flex flex-col items-start gap-8 bg-slate-800 rounded-lg p-8 shadow-[inset_0_1px_0_0_#ffffff0d]' }>
			<div className={ 'flex items-center gap-4' }>
				<div className={ 'bg-sky-400 aspect-square w-12 rounded-full flex items-center justify-center text-2xl grow shrink-0' }>
					{ title.split( '' ).at( 0 ) }
				</div>
				<div>
					<h2 className={ 'text-slate-300 text-xl my-0' }>{ title }</h2>
					<span className={ 'text-slate-500 text-sm font-medium' }>{ categories.join( ', ' ) }</span>
				</div>
			</div>
			<div className={ 'text-slate-400' }>
				{ description.substring( 0, 150 ) }
				{ description.length > 150 && ' ...' }
			</div>
		</Link>
	)
}