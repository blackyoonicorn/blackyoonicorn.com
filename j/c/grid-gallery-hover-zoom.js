customElements.define('grid-gallery-hover-zoom',
	class extends HTMLElement {
		constructor() {
			super();
			const template = document.createElement('template');
			template.innerHTML = `
	<style>
::slotted(*) {
	filter: grayscale(90%);
	height: 0;
	min-height: 100%;
	min-width: 100%;
	object-fit: cover;
	overflow: hidden;
	transition: .35s linear;
	width: 0;
}
::slotted(*:hover) {
	filter: grayscale(0);
	height: calc(100vw * var(--scale-factor) / var(--cols));
	width:  calc(100vh * var(--scale-factor) / var(--rows));
}
.gallery {
	--cols: 5;
	--gap: 10px;
	--rows: 2;
	--scale-factor: 1.2;
	--size: 150px;
	display: grid;
	gap: var(--gap);
	grid-template-columns: repeat(var(--cols), auto);
	height: 100vh;
	width: 100vw;
}
	</style>
	<div class="gallery">
<slot></slot>
	</div>
			`;
			const clone = template.content.cloneNode(true);
			const shadowRoot = this.attachShadow({mode: 'open'});
			shadowRoot.appendChild(clone);
		}
	}
);
