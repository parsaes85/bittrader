const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="tailwindcss/output.css">

<div class="flex flex-col items-center bg-white border-2 px-4 py-10 hover:border-mainOrange group">
    <img src="" alt="" class="w-16">
    <h2 class="text-lg my-4 group-hover:text-mainOrange"></h2>
    <p class="text-gray-400 text-sm"> <slot name="desc"></slot> </p>
</div>
`

class Service extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        this.shadowRoot.querySelector('h2').innerHTML = this.getAttribute('title')
        this.shadowRoot.querySelector('img').src = this.getAttribute('image')
    }

    static observedAttributes() {
        return ['title', 'image']
    }
}

export default Service