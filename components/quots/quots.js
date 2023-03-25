const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="tailwindcss/output.css">
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

<div class="text-center space-y-6 text-white">
    <i class='bx bxs-quote-alt-left bx-lg text-mainOrange'></i>

    <h1 class="text-2xl md:text-5xl"> <slot name="title"></slot> </h1>

    <p class="text-xs md:text-base"> <slot name="desc"></slot> </p>

    <p class="text-xs md:text-base">کارشناس امنیت - رضا احمدی</p>
</div>
`

class Quot extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export default Quot