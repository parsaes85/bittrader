const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="tailwindcss/output.css">
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

<div class="text-right space-y-3 text-gray-400">
    <a href="#">
        <img src="" alt="" class="block mx-auto">
    </a>

    <h2>
        <a href="#" class="text-black text-xl md:text-2xl hover:text-mainOrange">دلیل نوسانات اخیر بازار ارزهای دیجیتال</a>
    </h2>

    <p class="text-xs md:text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>

    <div class="flex justify-between text-xs md:text-sm">
        <a href="#" class="flex items-start gap-1 hover:text-mainOrange">
            <span>ادامه مطلب</span>
            <i class='bx bxs-right-arrow-circle bx-xs'></i>
        </a>

        <div>
            <i class='bx bxs-calendar-alt'></i>
            <span>۱۴۰۱/۱۰/۲۷</span>
        </div>
    </div>
</div>
`

class Blog extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        this.shadowRoot.querySelector('img').src = this.getAttribute('image')
    }

    static observedAttributes() {
        return ['image']
    }
}

export default Blog