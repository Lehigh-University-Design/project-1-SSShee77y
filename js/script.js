window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    /** Title slide scroll features **/
    var title = document.getElementById('title');
    var subtitle = document.getElementById('subtitle');

    scrollPercentage = Math.min(1.0, scrollPosition / 800);
    title.style.fontSize = 60 - 45 * scrollPercentage + 'px';
    title.style.marginTop = 30 - 30 * scrollPercentage + 'vh';
    subtitle.style.opacity = 1.5 - scrollPercentage*3;

});