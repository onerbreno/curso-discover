const questions = [
    "O que você aprendeu hoje?",
    "O que te aborreceu e o que poderia ser feito?"
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", (data) => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`
        ${questions[0]}
        ${answers[0]}
        
        ${questions[1]}
        ${answers[1]}
    `)
})
