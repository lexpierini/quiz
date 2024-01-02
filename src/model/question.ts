import { shuffle } from "@/functions/arrays"
import AnswerModel from "./answer"

export default class QuestionModel {
    #id: number
    #statement: string
    #answers: AnswerModel[]
    #correctedAnswer: boolean

    constructor(id: number, statement: string, answers: AnswerModel[], correctedAnswer = false) {
        this.#id = id
        this.#statement = statement
        this.#answers = answers
        this.#correctedAnswer = correctedAnswer
    }

    get id() {
        return this.#id
    }

    get statement() {
        return this.#statement
    }

    get answers() {
        return this.#answers
    }

    get correctedAnswer() {
        return this.#correctedAnswer
    }

    get answered() {
        this.#answers.forEach((answer) => {
            if (answer.revealed) return true
        })
        return false
    }

    replyWith(index: number): QuestionModel {
        const isCorrect = this.#answers[index]?.isCorrect
        const answers = this.#answers.map((answer, i) => {
            const selectedAnswer = index === i
            // const shouldReveal = selectedAnswer // Doesn't show the correct answer
            const shouldReveal = selectedAnswer || answer.isCorrect
            return shouldReveal ? answer.reveal() : answer
        })
        return new QuestionModel(this.#id, this.#statement, answers, isCorrect)
    }

    shuffleAnswers(): QuestionModel {
        const shuffleAnswers = shuffle(this.#answers)
        return new QuestionModel(this.#id, this.#statement, shuffleAnswers, this.#correctedAnswer)
    }

    parseLiteralObject() {
        return {
            id: this.#id,
            statement: this.#statement,
            answered: this.answered,
            correctedAnswer: this.#correctedAnswer,
            answers: this.#answers.map(answer => answer.parseLiteralObject()),
        }
    }
}