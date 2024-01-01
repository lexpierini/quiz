import AnswerModel from "./answer"

export default class QuestionModel {
    #id: number
    #statement: string
    #answers: AnswerModel[]
    #getRight: boolean

    constructor(id: number, statement: string, answers: AnswerModel[], getRight = false) {
        this.#id = id
        this.#statement = statement
        this.#answers = answers
        this.#getRight = getRight
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

    get getRight() {
        return this.#getRight
    }

    get answered() {
        this.#answers.forEach((answer) => {
            if (answer.revealed) return true
        })
        return false
    }
}