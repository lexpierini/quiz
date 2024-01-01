import { shuffle } from '@/functions/arrays'
import questions from '../questionDatabase'

export default function questionnaire(req: any, res: any) {
    const ids = questions.map(question => question.id)
    res.status(200).json(shuffle(ids))
}