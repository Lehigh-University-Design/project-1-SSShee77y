window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var vwToPx = window.innerWidth / 100;

    /** Title slide scroll features **/
    var titleBlock = document.querySelector('.title-block');
    var title = document.getElementById('title');
    var subtitle = document.getElementById('subtitle');

    scrollPercentage = Math.min(1.0, scrollPosition / 800);
    fontSizeChange = Math.min(60-45*scrollPercentage, (6-4.5*scrollPercentage)*vwToPx);
    title.style.fontSize = Math.max(fontSizeChange, 20) + 'px';
    title.style.marginTop = 30 - 30 * scrollPercentage + 'vh';
    subtitle.style.opacity = 1.5 - scrollPercentage*3;

    // Get the element with the class .title-block
    if (scrollPosition >= titleBlock.clientHeight - title.clientHeight) {
        title.style.borderBottom = '3px solid var(--color-theme-accent)';
    } else {
        title.style.borderBottom = 'None';
    }

});