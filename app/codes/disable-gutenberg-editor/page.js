import Content from '@/components/content'
import Code from '@/components/code'

export const metadata = {
	title:       'Disable Gutenberg Editor',
	description: 'Switch back to the Classic Editor by disabling the Block Editor.',
}
export default function Page() {
	return <Content title={ metadata.title }>
		<p>{ metadata.description }</p>
		<Code language={ 'php' }>
			{ `<?php 
add_filter('gutenberg_can_edit_post', '__return_false', 5);
add_filter('use_block_editor_for_post', '__return_false', 5);` }
		</Code>
	</Content>
}