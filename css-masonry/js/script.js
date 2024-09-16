import { Pane } from './tweakpane-4.0.4.js'

// MasonryLayout class to manage the entire configuration and updates
class MasonryLayout {
	// Constructor for initializing the class with the selector
	constructor( selector ) {
		// Select the .masonry element from the DOM
		this.masonry = document.querySelector( selector )

		// Default parameters for the layout
		this.params = {
			columns: 3,
			gap:     16,
			border:  {
				width: 1,
				style: 'double',
				color: '#e0e0e0',
			},
		}

		// Create a pane for configuration with the title 'Config'
		this.pane = new Pane( {
			title: 'Config',
		} )

		// Initialize bindings for the parameters and events
		this.initBindings()

		// Create the export CSS button
		this.createExportButton()
	}

	// Method to initialize all parameter bindings and event listeners
	initBindings() {
		// Bind column changes to the pane
		this.pane.addBinding( this.params, 'columns', {
			min:  1,
			max:  10,
			step: 1,
		} ).on( 'change', ( e ) => {
			this.updateColumns( e.value ) // Update the number of columns when the value changes
		} )

		// Bind gap changes to the pane
		this.pane.addBinding( this.params, 'gap', {
			min:  0,
			max:  100,
			step: 5,
		} ).on( 'change', ( e ) => {
			this.updateGap( e.value ) // Update the gap between columns
		} )

		// Create a folder for border-related settings
		const borderFolder = this.pane.addFolder( { title: 'Border' } )

		// Bind border width changes to the pane
		borderFolder.addBinding( this.params.border, 'width', { min: 0, max: 10, step: 1 } )
					.on( 'change', ( { value } ) => {
						this.updateBorderWidth( value ) // Update the border width
					} )

		// Bind border style changes to the pane
		borderFolder.addBinding( this.params.border, 'style', {
			options: {
				'dotted': 'dotted',
				'dashed': 'dashed',
				'solid':  'solid',
				'double': 'double',
			},
		} ).on( 'change', ( { value } ) => {
			this.updateBorderStyle( value ) // Update the border style
		} )

		// Bind border color changes to the pane
		borderFolder.addBinding( this.params.border, 'color' ).on( 'change', ( { value } ) => {
			this.updateBorderColor( value ) // Update the border color
		} )
	}

	// Method to update the number of columns
	updateColumns( value ) {
		this.masonry.style.columnCount = value
	}

	// Method to update the gap between columns and the block padding/margin
	updateGap( value ) {
		this.masonry.style.columnGap = `${ value }px`
		this.masonry.querySelectorAll( '.block' ).forEach( item => {
			item.style.paddingBottom = `${ value / 2 }px`
			item.style.marginBottom  = `${ value / 2 }px`
		} )
	}

	// Method to update the border width
	updateBorderWidth( value ) {
		this.masonry.style.columnRuleWidth = `${ value }px`
		this.masonry.querySelectorAll( '.block' ).forEach( item => {
			item.style.borderBottomWidth = `${ value }px`
		} )
	}

	// Method to update the border style
	updateBorderStyle( value ) {
		this.masonry.style.columnRuleStyle = value
		this.masonry.querySelectorAll( '.block' ).forEach( item => {
			item.style.borderBottomStyle = value
		} )
	}

	// Method to update the border color
	updateBorderColor( value ) {
		this.masonry.style.columnRuleColor = value
		this.masonry.querySelectorAll( '.block' ).forEach( item => {
			item.style.borderBottomColor = value
		} )
	}

	// Method to create the 'Export' button for exporting CSS
	createExportButton() {
		this.pane.addButton( {
			title: 'Export',
		} ).on( 'click', () => {
			this.exportCSS() // Export the CSS when the button is clicked
		} )
	}

	// Method to generate and download the CSS file
	exportCSS() {
		let css = `/**
 * Author: Ahmadreza Ebrahimi
 * Version: 1.0.0
 * Source: https://ahmadreza-log.github.io/css-masonry
 * Creating a masonry layout in the code with just a few lines of simple CSS.
 */
 
.masonry {
  column-count: ${ this.masonry.style.columnCount || '3' };
  column-gap: ${ this.masonry.style.columnGap || '16px' };
  column-rule: ${ this.masonry.style.columnRuleWidth || '1px' } ${ this.masonry.style.columnRuleStyle || 'double' } ${ this.masonry.style.columnRuleColor || '#e0e0e0' };
}
@media screen and (max-width: 1024px) {
  .masonry {
    column-count: 2;
  }
}
@media screen and (max-width: 768px) {
  .masonry {
    column-count: 1;
  }
}
.masonry .block {
  display: flex;
  padding-bottom: calc(${ this.masonry.style.columnGap || '16px' } / 2);
  margin-bottom: calc(${ this.masonry.style.columnGap || '16px' } / 2);
  border-bottom: ${ this.masonry.style.columnRuleWidth || '1px' } ${ this.masonry.style.columnRuleStyle || 'double' } ${ this.masonry.style.columnRuleColor || '#e0e0e0' };
}`

		// Create a download link for the CSS file
		let element = document.createElement( 'a' )
		element.setAttribute( 'href', 'data:text/plain;charset=utf-8,' + encodeURIComponent( css ) )
		element.setAttribute( 'download', 'export.css' )
		element.style.display = 'none'
		document.body.appendChild( element )
		element.click() // Simulate click to download the file
		document.body.removeChild( element ) // Remove the link after download
	}
}

// Initialize and use the class to manage the Masonry layout
const masonryLayout = new MasonryLayout( '.masonry' )
