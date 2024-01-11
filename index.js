const $startGameButton = document.querySelector(".start-quiz")
const $questionContainer = document.querySelector(".questoes-c")
const $frase = document.querySelector(".frase")
const $answerscontainer = document.querySelector(".respostas-c")
const $questionText = document.querySelector(".questao")
const $nextQuestionButton = document.querySelector(".prox-questao")


$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion )

let QuestionIndex = 0
let totalCorrect = 0

function startGame(){
$startGameButton.classList.add("hide")
$questionContainer.classList.remove("hide")
$frase.classList.add("hide")
displayNextQuestion()
}


function displayNextQuestion(){
    while($answerscontainer.firstChild) {
    $answerscontainer.removeChild($answerscontainer.firstChild)
    }
    $nextQuestionButton.classList.add("hide")


    if(questions.length==QuestionIndex){
        return finishGame()
    }
    


    $questionText.textContent = questions[QuestionIndex].question
    questions[QuestionIndex].answer.forEach(answer => {
        const newanswer = document.createElement("button")
        newanswer.classList.add("button", "answer")
        newanswer.textContent = answer.text
        if(answer.correct) {
            newanswer.dataset.correct = answer.correct
        }
        $answerscontainer.appendChild(newanswer)

        newanswer.addEventListener("click", selectAnswer)
        
               
    })
}

    

    function selectAnswer(event){
        const answerClicked = event.target
            if(answerClicked.dataset.correct){
                totalCorrect++
            }
    
        
        document.querySelectorAll(".answer").forEach(button => {
            if (button.dataset.correct){
                button.classList.add("correct")
            

            }else{
                button.classList.add("incorrect")
            }
            button.disabled = true
        })

        $nextQuestionButton.classList.remove("hide")
        QuestionIndex++
        }

        function finishGame(){
            const totalQuestion = questions.length
            
            let message =""

        switch (true){
            case(totalCorrect >= 7 ):
            message = "Super fã 🤩"
            break
            case(totalCorrect >= 5 ):
            message = "Fã ⭐"
            break
            default:
             message = "Poser 🧐"
        }

            $questionContainer.innerHTML = `
                <p class="final-message">Você acertou ${totalCorrect} de ${totalQuestion} questões!
                <span>Resultado: ${message}</span>
                    </p>
                <button onclick=window.location.reload() class="button" style="border: 2px solid red;">
                Refazer teste </button>
                `

           }

           

            
            
            
            

    
        

        
    


const questions = [
{ 
    question: "Em qual cidade Mary Winchester morreu misteriosamente queimada no teto de casa?",
    answer:[
        {text:"Leawood-Kansas", correct: false},
        {text: "Los Angeles-Califórnia", correct: false},
        {text: "Lawrence-Kansas", correct: true},
        {text: "Licoln-Califórnia", correct: false}
    ] 
},
{
    question: "Qual o nome do personagem que tirou Dean do inferno?",
    answer:[
        {text: "Castiel", correct: true},
        {text:'Sam Winchester', correct: false},
        {text: "Mary Winchester", correct: false},
        {text: "Bobby", correct: false}
    ]
},
{
    question: "Qual é a placa do impala do Dean Winchester?",
    answer:[
        {text:"KAZ 2Y5", correct: true},
        {text:"KAS 2Y5", correct: false},
        {text:"KAZ 3R2", correct: false},
        {text: "ING 2J4", correct: false}
    ] 
},
{
    question: "O que é o Colt?",
    answer: [
        {text:"Um demônio", correct: false},
        {text: "Uma arma", correct: true},
        {text:"Um vampiro que sobrevive a luz solar", correct: false},
        {text:"Um anjo", correct: false},
    ]
},
{
    question: "Qual é a primeira criatura sobrenatural que os irmãos Winchester enfrentaram na série?",
    answer:[
        {text:"Wendigos", correct: false},
        {text:"Bloody Mary", correct: false},
        {text:"Mulher de Branco", correct: true},
        {text:"Crowley", correct: false},
    ]

},
{
    question: "Escolha a alternativa que completa corretamente a frase a seguir: '... o negócio da família'",
    answer: [
        {text:"caçar monstros, ajudar pessoas", correct: false},
        {text:"Salvar pessoas, caçar monstros", correct: false},
        {text:"ajudar pessoas, caçar coisas", correct: false},
        {text:"Salvar pessoas, caçar coisas", correct: true},
    ]
},
{
    question: "Em qual temporada a Charlie morreu?",
    answer: [
        {text:"5º temporada", correct:false},
        {text:"10º temporada", correct: true },
        {text:"12º temporada", correct: false},
        {text:"9º temporada", correct: false},
    ]

},
{
    question: "Qual o nome do Demônio que matou Mary Winchester?",
    answer: [
        {text:"Azazel", correct: true},
        {text:"Crowley", correct: false},
        {text:"Ruby", correct: false},
        {text:"Lúcifer", correct: false },

    ]

}

]




