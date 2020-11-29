console.log('Working');

let theme = localStorage.getItem('theme')

if(theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDot = document.getElementsByClassName('theme-dot')

for(let i=0; i<themeDot.length; i++) {
    themeDot[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        console.log('Clicked', mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
    document.getElementById('theme-style').href = `${mode}.css`

    localStorage.setItem('theme', mode);
}