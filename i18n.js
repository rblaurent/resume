function setLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
    document.querySelectorAll('#lang-toggle span').forEach(function(s) {
        s.classList.toggle('active', s.getAttribute('data-lang') === lang);
    });
    localStorage.setItem('resume-lang', lang);
}

function initLang() {
    var saved = localStorage.getItem('resume-lang') || 'en';
    setLang(saved);
}
