import Breadcrumb from '@/components/breadcrumb'

export default function Content( { children, title } ) {
	return (
		<div className={ 'container' }>
			<div className={ 'bg-slate-800 rounded-lg p-8 shadow-[inset_0_1px_0_0_#ffffff0d]' }>
				<Breadcrumb />
				<h1 className={ 'text-4xl mb-8' }>{ title }</h1>
				<div className={ 'text-slate-300 leading-8' }>
					{ children }
				</div>
			</div>
		</div>
	)
}