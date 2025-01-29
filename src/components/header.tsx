import Image from "next/image"
import Link from "next/link"
import { IoCodeSlashSharp } from "react-icons/io5"
import { PiGameController, PiToolbox } from "react-icons/pi"

export default async function Header() {
	let data     = await fetch( "https://api.github.com/users/ahmadreza-log" )
	let response = await data.json()

	return (
	  <header className={ "sticky top-0 mb-12 backdrop-blur bg-transparent border-b border-slate-100/10 py-4" }>
		  <div className={ "container" }>

			  <div className={ "flex justify-between items-center" }>

				  <Link href={ response.html_url } className={ "flex items-center justify-center gap-4" }>
					  <Image src={ response.avatar_url } alt={ response.name } width={ 48 } height={ 48 } className={ "rounded-full" } />
					  <div>
						  <h1 className={ "text-white text-xl font-medium my-0" }>{ response.name }</h1>
						  <sub className={ "text-white/70 font-light" }>{ response.bio }</sub>
					  </div>
				  </Link>

				  <div className={ "flex" }>
					  <ul className={ "flex gap-5" }>
						  <li className={ "border-e border-slate-100/30 pe-5" }>
							  <Link href={ "/tools" } className={ "hover:text-sky-400 flex items-center gap-2" }>
								  <PiToolbox className={ "text-xl" } />
								  Tools
							  </Link>
						  </li>
						  <li className={ "border-e border-slate-100/30 pe-5" }>
							  <Link href={ "/tools" } className={ "hover:text-sky-400 flex items-center gap-2" }>
								  <PiGameController className={ "text-xl" } />
								  Games
							  </Link>
						  </li>
						  <li>
							  <Link href={ "/codes" } className={ "hover:text-sky-400 flex items-center gap-2" }>
								  <IoCodeSlashSharp className={ "text-xl" } />
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