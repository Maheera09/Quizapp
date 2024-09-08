const question = [
    {
        'que': "Where was Taylor born?",
        'a': 'Nashville', 
        'b': "California", 
        'c': "LA", 
        'd': 'New York', 
        'correct': 'a'
    },
    {
        'que': "What is Taylor's latest tour called?",
        'a': 'Red Tour', 
        'b': "Speak Now Tour", 
        'c': "Eras Tour", 
        'd': 'Reputation Tour', 
        'correct': 'c'
    },
    {
        'que': "What's Taylor's most successful album?",
        'a': 'Folklore', 
        'b': "Lover", 
        'c': "Reputation", 
        'd': '1989', 
        'correct': 'd'
    }
]
let index=0
let total = question.length
let right = 0, wrong =0
const heading = document.querySelector('#heading')
const optionInput = document.querySelectorAll(".options")
const btn = document.querySelector('.btn')

const loadQuestion = ()=>{
    if (index === total){
        return endQuiz()
    }
    reset()
const data = question[index]
heading.innerHTML = `${index+1}) ${data.que}`
optionInput[0].nextElementSibling.innerText = data.a
optionInput[1].nextElementSibling.innerText = data.b
optionInput[2].nextElementSibling.innerText = data.c
optionInput[3].nextElementSibling.innerText = data.d
}

// const submitQuiz = ()=>{
    
// }

const getAnswer = ()=>{
    let answer
    optionInput.forEach(
        (input)=>{
            if (input.checked){
                answer =input.value;
            }
        }
    )
    return answer
}

const reset = ()=>{
    optionInput.forEach(
        (input)=>{
            input.checked = false
        }
    )
}

const endQuiz=()=>{
document.getElementById('box').innerHTML = `
<h3>Thank you for playing quiz</h3>
<h1>${right} / ${total} are correct</h2>`
}

loadQuestion()

btn.addEventListener('click', ()=>{
    const data = question[index]
    const ans = getAnswer()
    if (ans === data.correct){
        right++
    }
    else {
        wrong++
    }
    index++;
    loadQuestion()
    return;
})