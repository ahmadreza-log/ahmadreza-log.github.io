import '../public/css/global.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/header'

const poppins = Poppins( {
	subsets:  [ 'latin' ],
	display:  'swap',
	variable: '--font-poppins',
	weight:   [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ],
} )

export const metadata = {
	title:       'Ahmadreza Github Page',
	description: 'My most used tools and codes on the web.',
}

export default function RootLayout( { children } ) {
	return (
		<html lang="en">
			<body className={ 'bg-slate-900 text-white ' + poppins.className }>
				<Header />
				<div className={ 'mb-12' }>{ children }</div>
			</body>
		</html>
	)
}
