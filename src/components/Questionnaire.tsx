import styles from '../styles/Questionnaire.module.css'
import QuestionModel from '@/model/question'
import Question from './Question'
import Button from './Button'

type QuestionnaireProps = {
    question: QuestionModel
    finished: boolean
    answered: (question: QuestionModel) => void
    goNext: () => void
}

export default function Questionnaire(props: QuestionnaireProps) {
    const handleOnAnswer = (index: number) => {
        if (props.question.notAnswered) {
            props.answered(props.question.replyWith(index))
        }
    }

    return (
        <div className={styles.questionnaire}>
            {props.question && (
                <Question
                    value={props.question}
                    answerDuration={15}
                    onAnswer={handleOnAnswer}
                    timeOut={props.goNext}
                />
            )}
            <Button text={props.finished ? 'Finish' : 'Next'} onClick={props.goNext} />
        </div>
    )
}