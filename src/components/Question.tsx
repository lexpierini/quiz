import styles from '../styles/Question.module.css'
import QuestionModel from "@/model/question"
import Statement from "./Statement"
import Answer from './Answer'
import Timer from './Timer'

const letters = [
    { value: 'A', color: '#f2c866' },
    { value: 'B', color: '#f266ba' },
    { value: 'C', color: '#85d4f2' },
    { value: 'D', color: '#bce596' },
]

type QuestionProps = {
    value: QuestionModel
    answerDuration?: number
    onAnswer: (index: number) => void
    timeOut: () => void
}

export default function Question(props: QuestionProps) {
    const question = props.value

    const answersRender = () => (
        question.answers.map((answer, i) => (
            <Answer
                key={`${question.id}-${i}`}
                value={answer}
                index={i}
                letter={letters[i].value}
                letterBg={letters[i].color}
                onAnswer={props.onAnswer}
            />
        ))
    )

    return (
        <div className={styles.question}>
            <Statement text={question.statement} />
            <Timer key={question.id} duration={props.answerDuration ?? 10} timeOut={props.timeOut} />
            {answersRender()}
        </div>
    )
}