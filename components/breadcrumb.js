'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Breadcrumb() {
	const paths     = usePathname().split( '/' ).filter( path => path )
	const separator = ' / '

	return (
		<div className={ 'mb-4' }>
			<ul className={ 'flex text-white/50 font-light gap-1 text-sm' }>
				<li>
					<Link href={ '/' }>Home</Link>
					{ paths.length > 0 && separator }
				</li>
				{
					paths.map( ( link, index ) => {
						let href = `/${ paths.slice( 0, index + 1 ).join( '/' ) }`,
							item = link[0].toUpperCase() + link.slice( 1, link.length ).replaceAll( '-', ' ' )

						return <li key={ index }>
							<Link href={ href } className={ usePathname() === href ? `text-sky-400` : '' }>{ item }</Link>
							{ paths.length !== index + 1 && separator }
						</li>
					} )
				}
			</ul>
		</div>
	)
}