window.addEventListener("load", loadQuiz);

function loadQuiz() {
    console.log("loadQuiz");

    document.querySelector("#next1").addEventListener("click", questionOne);
    document.querySelector("#next2").addEventListener("click", questionTwo);
    document.querySelector("#next3").addEventListener("click", questionThree);
    document.querySelector("#next4").addEventListener("click", questionFour);

    document.querySelector("#back2").addEventListener("click", questionZero);
    document.querySelector("#back3").addEventListener("click", questionOne);
    document.querySelector("#back4").addEventListener("click", questionTwo);

    document.querySelector("#two").classList.add("display_none");
    document.querySelector("#three").classList.add("display_none");
    document.querySelector("#four").classList.add("display_none");
    document.querySelector("#five").classList.add("display_none");

}

function questionZero() {
    document.querySelector("#two").classList.add("display_none");
    document.querySelector("#one").classList.remove("display_none");
    document.querySelector(".orange_bar").classList.remove("transform40");
}


function questionOne() {
    document.querySelector("#one").classList.add("display_none");
    document.querySelector("#three").classList.add("display_none");

    document.querySelector("#two").classList.remove("display_none");

    document.querySelector(".orange_bar").classList.add("transform40");
    document.querySelector(".orange_bar").classList.remove("transform60");
}

function questionTwo() {
    document.querySelector("#two").classList.add("display_none");
    document.querySelector("#four").classList.add("display_none");

    document.querySelector("#three").classList.remove("display_none");

    document.querySelector(".orange_bar").classList.remove("transform80");
    document.querySelector(".orange_bar").classList.add("transform60");
}

function questionThree() {
    document.querySelector("#three").classList.add("display_none");
    document.querySelector("#four").classList.remove("display_none");

    document.querySelector(".orange_bar").classList.add("transform80");
}

function questionFour() {
    document.querySelector("#four").classList.add("display_none");
    document.querySelector("#five").classList.remove("display_none");

    document.querySelector("#loading").classList.add("display_none");
}


//Slider

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}

//Fill fields

fetchQuestions();

function fetchQuestions() {
    console.log("fetchQuestion");
    fetch("https://agataswistak.com/wordpress/wp-json/wp/v2/ap-quiz")
        .then(function (response) {
            console.log(response)
            return response.json();
        })

        .then(function (data) {
            console.log("data")
            dataReceived(data);
        })
}

function dataReceived(question) {
    question.forEach(showQuestion);
    console.log("data received");
}


function showQuestion(myQuestion) {
    console.log("myQuestion")

    var temp = document.querySelector("#templateID");
    var myCopy = temp.cloneNode(true);

    myCopy.querySelector(".number_span").textContent = myQuestion.number;
    myCopy.querySelector("h1").textContent = myQuestion.quiz_title;
    myCopy.querySelector("p").textContent = myQuestion.blurb;
    myCopy.querySelector("#specificQuestion").textContent = myQuestion.question;

    myCopy.querySelector("#answer1").textContent = myQuestion.answers;


    var test = myQuestion.number;
    console.log(test);
    console.log('#template_place' + myQuestion.number);

    const parentElem = document.querySelector("#template_place" + myQuestion.number);
    parentElem.appendChild(myCopy);
}
