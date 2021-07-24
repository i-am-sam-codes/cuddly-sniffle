const closedEmoji = document.querySelector('.closed')
const openEmoji = document.querySelector('.open')


//add event listener

//closedEmoji.addEventListener('click', () => {
//    if(openEmoji.classList.contains('open')) {
//        openEmoji.classList.add('active');
//        closedEmoji.classList.remove('active');
//    }
//});
//
//openEmoji.addEventListener('click', () => {
//    if(closedEmoji.classList.contains('closed')) {
//        closedEmoji.classList.add('active');
//        openEmoji.classList.remove('active');
//    }
//});

const monkey = document.querySelector('.monkey');

function monkeyBusiness() {
    this.classList.toggle('open');
    this.classList.toggle('closed');
    if (this.classList.contains('open')) {
        this.innerText = '🙉';
    } else if (this.classList.contains('closed')) {
        this.innerText = '🙈';
    };
};

monkey.addEventListener('click', monkeyBusiness);