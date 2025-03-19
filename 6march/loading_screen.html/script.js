let randomTime = Math.floor(Math.random() * 3000);
console.log(randomTime);

let loaderPage = document.querySelector('.loading_screen');

setTimeout(() => {

    loaderPage.style.top = "-100%"

}, randomTime);