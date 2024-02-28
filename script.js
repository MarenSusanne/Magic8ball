
let answers = [
    'Very doubtful',
    'As I see it, yes', 
    'My sources say no', 
    'It is decidedly so',
    'Concentrate and ask again', 
    'Most likely', 
    'My reply is no', 
    'It is certain',
    'Outlook good', 
    'You may rely on it', 
    'Cannot predict now',
    'Yes', 
    'Signs point to yes',
    'Reply hazy, try again',
    'Yes definitely',
    'Without a doubt',
    'Dont count on it', 
    'Ask again later',
    'Outlook not so good', 
    'Better not tell you now',
]
let previousAnswer

function newAnswer() {
    let math = Math.floor(Math.random() * 19)
    let currentAnswer = math

    if (currentAnswer !== previousAnswer) {
        previousAnswer = currentAnswer
        currentAnswer = math
        document.getElementById("answer").innerHTML = answers[currentAnswer]
    }
    else {
        math++
        previousAnswer = currentAnswer
        currentAnswer = math
        document.getElementById("answer").innerHTML = answers[currentAnswer]
    }
}