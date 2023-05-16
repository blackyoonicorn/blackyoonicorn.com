customElements.define('carousel-img',
	class extends HTMLElement {
		constructor() {
			super();
			const template = document.createElement('template');
			template.innerHTML = `
	<style>
::slotted(*) {
	padding-bottom: 5px;
	width: 100%;
}
	</style>
	<div class="carousel">
<slot></slot>
	</div>
`;
			const clone = template.content.cloneNode(true);
			const shadowRoot = this.attachShadow({mode: 'open'});
			shadowRoot.appendChild(clone);
		}
	}
);
