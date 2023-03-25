import typewriterEffect from "../librarysConfiq/typewriterEffect.js";
import particles from "../librarysConfiq/particles.js";
import { membersSwiper, quotsSwiper, blogsSwiper } from "../librarysConfiq/swiper.js";
import Service from "../components/Services/services.js";
import Member from "../components/Members/members.js";
import Blog from "../components/Blogs/blogs.js";
import Quot from "../components/quots/quots.js";

window.customElements.define('bittrader-service', Service)
window.customElements.define('bittrader-member', Member)
window.customElements.define('bittrader-blog', Blog)
window.customElements.define('bittrader-quot', Quot)

const navbar = document.querySelector('nav')
const sidebarBtn = document.querySelector('.hamburger')
const logo = document.getElementById('logo')
const sidebar = document.getElementById('sidebar')
const sidebarLinks = document.querySelectorAll('#sidebar li')
const loader = document.querySelector('.loader')

const openSidebar = () => {
    sidebarBtn.classList.add('open')
    sidebar.classList.replace('top-[-28rem]','top-[4.1rem]')
}
const closeSidebar = () => {
    sidebarBtn.classList.remove('open')
    sidebar.classList.replace('top-[4.1rem]','top-[-28rem]')
}

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar()
    })
})

sidebarBtn.addEventListener('click', () => {
    if(sidebarBtn.classList.contains('open')) closeSidebar()
    else openSidebar()
})

window.addEventListener('load', () => {
    loader.classList.replace('flex', 'hide')
})

window.addEventListener('scroll', () => {
    if(scrollY > 400) {
        navbar.classList.remove('py-4')
        logo.classList.remove('ml-4')
        logo.classList.add('scale-75')

        if(!sidebar.classList.contains('py-4')) {
            sidebar.classList.remove('py-10')
            sidebar.classList.add('py-4')
            console.log('py-10 removed, py-4 added')
        }
    }else {
        navbar.classList.add('py-4')
        logo.classList.add('ml-4')
        logo.classList.remove('scale-75')

        if(sidebar.classList.contains('py-4')) {
            sidebar.classList.remove('py-4')
            sidebar.classList.add('py-10')
            console.log('py-4 removed, py-10 added')
        }
    }
})