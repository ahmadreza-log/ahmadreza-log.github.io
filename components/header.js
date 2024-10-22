import Link from 'next/link'
import Image from 'next/image'
export default async function Header() {
	let data     = await fetch( 'https://api.github.com/users/ahmadreza-log' )
	let response = await data.json()

	return (
		<header className={ 'sticky top-0 mb-12 backdrop-blur bg-transparent border-b border-slate-100/10 py-4' }>
			<div className={ 'container' }>

				<div className={ 'flex justify-between items-center' }>

					<div className={ 'flex items-center justify-center gap-4' }>
						<Link href={ '/' }>
							<Image src={ response.avatar_url } alt={ response.name } width={ 48 } height={ 48 } className={ 'rounded-full' } />
						</Link>
						<Link href={ '/' }>
							<h1 className={ 'text-white text-xl font-medium my-0' }>{ response.name }</h1>
							<sub className={ 'text-white/70 font-light' }>{ response.bio }</sub>
						</Link>
					</div>

					<div className={ 'flex' }>
						<ul className={ 'flex gap-8' }>
							<li>
								<Link href={ '/tools' } className={ 'hover:text-sky-400' }>
									Tools
								</Link>
							</li>
							<li>
								<Link href={ '/codes' } className={ 'hover:text-sky-400' }>
									Codes
								</Link>
							</li>
						</ul>
					</div>

				</div>

			</div>
		</header>
	)
}