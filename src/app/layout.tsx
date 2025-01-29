import type { Metadata } from "next"
import "../../public/css/globals.css"
import { Poppins } from "next/font/google"

export const metadata: Readonly<Metadata> = {
	title:       "Ahmadreza Github Page",
	description: "My most used tools and codes on the web.",
}

const poppins = Poppins( {
	subsets:  [ "latin" ],
	display:  "swap",
	variable: "--font-poppins",
	weight:   [ "100", "200", "300", "400", "500", "600", "700", "800", "900" ],
} )

export default function RootLayout( { children }: Readonly<{ children: React.ReactNode }> ) {
	return <html lang="en">
		<body className={ `bg-slate-900 text-white ${ poppins.className }` }>
			{ children }
		</body>
	</html>
}
