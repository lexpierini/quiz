import questions from '../questionDatabase'

export default function questionnaire(req: any, res: any) {
    res.status(200).json(questions.map(question => question.id))
}