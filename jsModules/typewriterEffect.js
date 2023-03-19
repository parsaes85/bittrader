// ---- typewriter-effect config ----
const typewriterEffect = () => {
    let headerTitle = document.getElementById('headerTitle')

    let typewriter = new Typewriter(headerTitle, {
        loop: true,
    });

    typewriter.typeString('خرید ارز دیجیتال')
    .pauseFor(2500)
    .deleteAll()
    .typeString('موفقیت در دستان توست!')
    .pauseFor(2500)
    .start();
}

export default typewriterEffect