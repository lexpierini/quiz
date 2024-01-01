export default class QuestionModel {
    #id: number
    #statement: string
    #answers: any[]
    #getRight: boolean
    // #answered: boolean

    constructor(id:number, statement:string, answers: any[], getRight = false) {
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
        //FIXME: implement this method
        return false
    }
}