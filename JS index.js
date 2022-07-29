let btnRandom = document.querySelector('button');

let users = ['My', 'Nhi', 'Anh', 'trúc' ]
function getRandomNumber(min,max) {
    let step1 = max-min + 1 ;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}
btnRandom.addEventListener('click',() => {
    let index = getRandomNumber(0, user.length-1);
    result.innerText = user[index];
});