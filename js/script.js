var bgDomains = [
    "techsparkle.com",
    "pixelmatrix.net",
    "cyberwave.io",
    "quantumlink.org",
    "digitalhorizon.biz",
    "codefusion.co",
    "datadreamscape.com",
    "cyberneticpulse.net",
    "techfusion.io",
    "stellarcode.org",
    "digitalvortex.biz",
    "cloudsparkle.co",
    "quantumforge.com",
    "datanexus.net",
    "codeblaze.io",
    "cybermatrix.biz",
    "pixelstream.co",
    "techgenesis.org",
    "digitalnova.net",
    "datafusion.io",
    "codevortex.com",
    "pixelwave.biz",
    "cloudspark.io",
    "techforge.co",
    "cybernova.org",
    "quantumlink.net",
    "tranquiltales.biz",
    "velvetvalley.co",
    "oasisofserenity.org",
    "coastalharmonystudio.com",
    "whisperingwoods.net",
    "cloudnineadventures.io",
    "paradiseplayground.biz",
    "mysticmoonlight.co",
    "rainbowrivers.org",
    "dreamersdelight.io",
    "serenitybay.biz",
    "alchemyacres.co",
    "hiddenhaven.org",
    "cosmiccanvasstudio.com",
    "midnightmystique.net",
    "enchantedescape.io",
    "codenexus.co",
    "cyberblaze.org",
    "quantumstream.net",
    "datamatrix.io",
    "techblaze.biz",
    "digitalvortex.co",
    "pixelhorizon.org",
    "codeforge.net",
    "quantumspark.co",
    "stellarwave.com",
    "techsavvysolutions.net",
    "pixelplayground.org",
    "quantumfusion.io",
    "goldenhorizon.biz",
    "cyberdynasty.co",
    "blazingtrails.net",
    "digitaldreamscape.org",
    "quantumnova.io",
    "datastream.org",
    "cloudpulse.net",
    "technova.io",
    "digitalwave.biz",
    "pixelvista.io",
    "codenexus.net",
    "cyberblaze.io",
    "quantumstream.biz",
    "datamatrix.co",
    "techblaze.org",
    "digitalvortex.io",
    "pixelhorizon.biz",
    "codeforge.co",
    "cyberwave.net",
    "quantumspark.io",
    "dataforge.biz",
    "cloudnova.io",
    "techstream.co",
    "digitalblaze.biz",
]

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var vwToPx = window.innerWidth / 100;

    // Title elements
    var titleBlock = document.querySelector('.title-block');
    var scrollText = document.querySelector('.scroll-text-bg');
    var title = document.getElementById('title');
    var subtitle = document.getElementById('subtitle');

    scrollPercentage = Math.min(1.0, scrollPosition / (titleBlock.clientHeight - 2 * title.clientHeight));
    
    // Title values
    fontSizeChange = Math.min(60-45*scrollPercentage, (6-4.5*scrollPercentage)*vwToPx);
    title.style.fontSize = Math.max(fontSizeChange, 20) + 'px';
    title.style.marginTop = 30 - 30 * scrollPercentage + 'vh';

    // Subtitle Values
    subtitleOpacity = 1.5 - scrollPercentage*4;
    subtitle.style.opacity = subtitleOpacity;
    subtitle.style.visibility = (subtitleOpacity <= 0) ? 'hidden' : '';

    // ScrollText Values
    scrollText.style.top = -scrollPosition + 'px';
    scrollText.style.opacity = Math.min(.6 - scrollPercentage/1.5, 0.2);

    // Replace border on title with block border
    if (scrollPosition >= titleBlock.clientHeight - title.clientHeight) {
        title.style.backgroundColor = 'var(--color-theme-dark)';
        title.style.borderBottom = '3px solid var(--color-theme-accent)';
    } else {
        title.style.backgroundColor = '';
        title.style.borderBottom = '';
    }

});

// Call function on load
document.addEventListener('DOMContentLoaded', () => {
    createScrollingText();
});

// Function to create scrolling text elements
function createScrollingText() {
    var listOfScrollLines = [];
    var colors = ["#505050", "#707070", "#909090", "#b0b0b0"];
    var scrollTextBg = document.querySelector('.scroll-text-bg');

    for (let i = 0; i < screen.height / 40; i++) {
        const line = document.createElement('div');
        line.classList.add('line');

        var spans = [];
        for (let i = 0; i < screen.width / 140 + 2; i++) {
            var color = colors[Math.floor(Math.random()*colors.length)];
            var randomDomain = bgDomains[Math.floor(Math.random() * bgDomains.length)];
            var span = "<span style='color: " + color + ";'>" + randomDomain + "</span>";
            spans.push(span);
        }
        line.innerHTML = spans.join("");

        scrollTextBg.appendChild(line);
        listOfScrollLines.push(line);
    }
}

// Update scroll lines properly
setInterval(scrollLines, 50);
var listOfScrollLines = [];

function scrollLines() {
    listOfScrollLines = document.querySelectorAll('.line');
    for(var i = 0; i<listOfScrollLines.length; i++) {
        var line = listOfScrollLines[i];
        
        // Get margin left
        var style = window.getComputedStyle(line);
        var marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);

        // Calculate offset value
        var marginValue = 1;
        if (marginLeft <= -400 || marginLeft >= 0) {
            // Calculate value to loop chilldren properly
            var child;
            if (i % 2 == 0) {
                child = line.lastElementChild;
                line.prepend(child);
            } else {
                child = line.firstElementChild;
                line.appendChild(child);
            }
            marginValue -= child.offsetWidth;
        }
        marginValue *= (i % 2 == 0) ? 1 : -1; // direction factor

        // Apply value
        line.style.marginLeft = (marginLeft + 1 * marginValue) + 'px';
    }
}