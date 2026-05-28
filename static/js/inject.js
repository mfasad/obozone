
// Independent project disclaimer for Ozon-related pages
(function () {
    var DISCLAIMER_HTML = '<strong>Важно:</strong> этот сайт не является официальным сайтом Ozon. Материалы подготовлены независимым информационным проектом и не связаны с ООО &laquo;Интернет Решения&raquo; или брендом Ozon.';

    function createDisclaimer() {
        var block = document.createElement('div');
        block.className = 'pb-official-disclaimer';
        block.setAttribute('role', 'note');
        block.innerHTML = DISCLAIMER_HTML;
        return block;
    }

    function insertAfter(anchor) {
        if (!anchor || document.querySelector('.pb-official-disclaimer')) return;
        anchor.insertAdjacentElement('afterend', createDisclaimer());
    }

    function insertOzonDisclaimer() {
        var path = window.location.pathname;
        if (path === '/' || path === '/index.html') {
            insertAfter(document.querySelector('.pb-hp-hero h1'));
            return;
        }

        if (path.indexOf('/articles/') === 0) {
            insertAfter(document.querySelector('article.pb-article > h1, .pb-article > h1'));
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertOzonDisclaimer);
    } else {
        insertOzonDisclaimer();
    }
})();
// Yandex.Metrika — counter 109122602
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}
)(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
ym(109122602,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});


// VideoRoll — Под текстом статьи, перед похожими
(function(){
    var target = document.querySelector('.article-body') || document.querySelector('.pb-article-body');
    if (!target) return;

    // Ad container
    var wrap = document.createElement('div');
    wrap.style.cssText = 'margin:20px 0;text-align:center';
    wrap.innerHTML = '<div id="vid_vpaut_div" style="display:inline-block;width:600px;height:320px" vid_vpaut_pl="43365"></div>';
    target.parentNode.insertBefore(wrap, target.nextSibling);

    // External script
    var s = document.createElement('script');
    s.src = 'https://videoroll.net/js/vid_vpaut_script.js';
    s.async = true;
    document.body.appendChild(s);
})();
