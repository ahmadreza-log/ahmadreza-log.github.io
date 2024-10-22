import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark as theme } from 'react-syntax-highlighter/src/styles/hljs'

export default function Code( { children, language } ) {
	return <SyntaxHighlighter language={ language } style={ theme } className={ 'my-4 !bg-slate-700 rounded-lg border border-slate-600' } wrapLongLines={ true }>{ children }</SyntaxHighlighter>
}