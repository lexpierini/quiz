export default class AnswerModel {
    #value: string
    #isCorrect: boolean
    #revealed: boolean

    constructor(value: string, isCorrect: boolean, revealed = false) {
        this.#value = value
        this.#isCorrect = isCorrect
        this.#revealed = revealed
    }

    static correct(value: string) {
        return new AnswerModel(value, true)
    }

    static wrong(value: string) {
        return new AnswerModel(value, false)
    }

    get value() {
        return this.#value
    }

    get isCorrect() {
        return this.#isCorrect
    }

    get revealed() {
        return this.#revealed
    }

    reveal() {
        return new AnswerModel(this.#value, this.#isCorrect, true)
    }

    static answerModelFactory(obj: AnswerModel): AnswerModel {
        return new AnswerModel(obj?.value, obj?.isCorrect, obj?.revealed)
    }

    answerModelFactory() {
        return {
            value: this.#value,
            isCorrect: this.#isCorrect,
            revealed: this.#revealed,
        }
    }
}