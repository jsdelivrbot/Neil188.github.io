( () => {
    // stylesheets
    const style =  document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = '/style-footer.css';
    const style2 =  style.cloneNode(false);
    style2.href = '/style-aside.css';
    const font =  style.cloneNode(false);
    font.href = 'https://cdn.rawgit.com/tonsky/FiraCode/1.205/distr/fira_code.css';
    const firstStyle = document.querySelector('[rel="stylesheet"]');
    firstStyle.parentNode.appendChild(style);
    firstStyle.parentNode.appendChild(style2);
    firstStyle.parentNode.appendChild(font);
})();
