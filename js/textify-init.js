// Textify.js - GSAP based smooth text animation
window.addEventListener('DOMContentLoaded', function() {
    // すべてのh2要素にdata-textify属性を追加
    const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach(h2 => {
        h2.setAttribute('data-textify', '');
    });

    // Textifyを初期化
    new Textify({
        el: '[data-textify]',
        splitType: 'lines words chars',
        animation: {
            by: 'chars',
            duration: 1.2,
            stagger: 0.08,
            delay: 0,
            ease: 'power2.out',
            animateProps: {
                opacity: 0,
                y: '100%',
                scale: 1,
                rotate: 0
            }
        },
        observer: {
            repeat: false,
            threshold: 0.5
        }
    }, gsap);
});
