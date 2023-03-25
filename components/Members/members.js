const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="tailwindcss/output.css">
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

<div class="text-center space-y-3 text-gray-400 group">
    <img src="images/tm1.jpg" alt="" class="block mx-auto">

    <h3 class=" text-sm">توسعه دهنده وب</h3>

    <h2 class="text-2xl text-black group-hover:text-mainOrange">حسین عابدی</h2>

    <p class=" text-sm">دارای سه سال سابقه برنامه نویسی و طراحی وب سایت و نمونه کارهای مختلف
        <br>
        مدت همکاری با بیت تریدر:یک سال
    </p>

    <div class="space-x-2">
        <a href="https://www.facebook.com" target="_blank"><i class='bx bxl-facebook-circle bg-gray-200 p-3 rounded-full hover:text-mainOrange transition'></i></a>
        
        <a href="https://twitter.com" target="_blank"><i class='bx bxl-twitter bg-gray-200 p-3 rounded-full hover:text-mainOrange transition'></i></a>
        
        <a href="https://dribbble.com" target="_blank"><i class='bx bxl-dribbble bg-gray-200 p-3 rounded-full hover:text-mainOrange transition'></i></a>
        
        <a href="https://www.pinterest.com" target="_blank"><i class='bx bxl-pinterest bg-gray-200 p-3 rounded-full hover:text-mainOrange transition'></i></a>

        <a href="https://www.behance.net" target="_blank"><i class='bx bxl-behance bg-gray-200 p-3 rounded-full hover:text-mainOrange transition'></i></a>
    </div>
</div>
`

class Member extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        this.shadowRoot.querySelector('img').src = this.getAttribute('image')
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name')
    }

    static observedAttributes() {
        return ['name', 'image']
    }
}

export default Member