import questions from '../questionDatabase'

export default function GetQuestionById(req: any, res: any) {
    const selectedId = Number(req.query.id)
    const selectedQuestion = questions.filter(question => question.id === selectedId)

    if (selectedQuestion.length === 1) {
        res.status(200).json(selectedQuestion[0].shuffleAnswers().questionModelFactory())
    } else {
        res.status(204).send()
    }
}