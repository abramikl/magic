const centerBallElem = document.querySelector(".center-ball")
const inputElem = document.querySelector(".magic__fun-question input")
const buttonElem = document.querySelector(".magic__fun-button button")
const subtitleElem = document.querySelector(".magic__answer-subtitle")
const magicAnswerTitleElem = document.querySelector('.magic__answer-title')
const magicAnswerElem = document.querySelector('.magic__answer-svg')

buttonElem.addEventListener("click", functionButton)
centerBallElem.classList.remove('center-ball')

function functionButton() {
    subtitleElem.classList.remove("magic__answer-subtitle")
    centerBallElem.classList.add('center-ball')

    buttonElem.disabled = true;
    inputElem.disabled = true;

    setTimeout(function(){
        magicAnswerTitleElem.innerText = inputElem.value
        fetch('https://yesno.wtf/api') 
            .then(function (x) {
                return x.json()
            }) 
            .then(function (response) {
                magicAnswerElem.src = response.image
            })

            inputElem.value = "";

            buttonElem.disabled = false;
        inputElem.disabled = false;
        centerBallElem.classList.remove('center-ball')
        
    } ,2000);
}